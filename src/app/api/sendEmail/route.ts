import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Types for request body
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Types for SMTP config
interface SmtpConfig {
  host: string;
  port: number;
  secure: boolean;
}

// Types for mail options
interface MailOptions {
  from: string;
  to: string;
  subject: string;
  html: string;
}

// Helper function with proper typing
function getSmtpConfig(email: string): SmtpConfig {
  const domain = email.split('@')[1].toLowerCase();
  
  const configs: Record<string, SmtpConfig> = {
    'gmail.com': {
      host: 'smtp.gmail.com',
      port: 465,
      secure: true
    },
    'outlook.com': {
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false
    },
    'hotmail.com': {
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false
    },
    'yahoo.com': {
      host: 'smtp.mail.yahoo.com',
      port: 465,
      secure: true
    },
    'default': {
      host: 'smtp.office365.com',
      port: 587,
      secure: false
    }
  };

  return configs[domain] || configs['default'];
}

export async function POST(request: Request) {
  try {
    const { name, email, message }: ContactFormData = await request.json();
    const websiteUrl = 'https://nekcy.vercel.app';
    const logoUrl = 'https://nekcy.vercel.app/nekcy.png';

    const emailUser = process.env.EMAIL_USER as string;
    const smtpConfig = getSmtpConfig(emailUser);

    const transporter = nodemailer.createTransport({
      ...smtpConfig,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const adminMailOptions: MailOptions = {
      from: emailUser,
      to: emailUser,
      subject: `💌 Nova mensagem de ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nova Mensagem</title>
            <style>
              @media only screen and (max-width: 600px) {
                .container {
                  width: 100% !important;
                  padding: 20px 10px !important;
                }
                .content {
                  padding: 20px !important;
                }
                .button {
                  display: block !important;
                  width: calc(100% - 32px) !important;
                  margin: 8px 16px !important;
                  padding: 12px 16px !important;
                  text-align: center !important;
                  box-sizing: border-box !important;
                }
                .button-container {
                  display: flex !important;
                  flex-direction: column !important;
                  padding: 0 !important;
                }
              }
            </style>
          </head>
          <body style="margin: 0; padding: 0; background-color: #f9fafb; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
            <table role="presentation" class="container" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
              <tr>
                <td class="content">
                  <div style="background: white; border-radius: 16px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                    <img src="${logoUrl}" alt="Nekcy Logo" style="width: 600px; margin-bottom: 24px;">
                    <h1 style="color: #1e293b; margin: 0 0 24px 0; font-size: 24px;">Nova Mensagem Recebida 📬</h1>
                    <div style="background: #f8fafc; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
                      <p style="color: #475569; margin: 0 0 16px 0;"><strong style="color: #1e293b;">Nome:</strong> ${name}</p>
                      <p style="color: #475569; margin: 0 0 16px 0;"><strong style="color: #1e293b;">Email:</strong> ${email}</p>
                      <p style="color: #475569; margin: 0 0 8px 0;"><strong style="color: #1e293b;">Mensagem:</strong></p>
                      <p style="color: #475569; margin: 0; line-height: 1.6;">${message}</p>
                    </div>
                    <a href="mailto:${email}" style="display: inline-block; background: #3b82f6; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 500;">Responder Agora</a>
                  </div>
                  <p style="color: #64748b; font-size: 14px; text-align: center; margin-top: 24px;">
                    © ${new Date().getFullYear()} Nekcy. Todos os direitos reservados.
                  </p>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `
    };

    const userMailOptions: MailOptions = {
      from: emailUser,
      to: email,
      subject: '✨ Obrigado por escolher a Nekcy!',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bem-vindo à Nekcy</title>
            <style>
              @media only screen and (max-width: 600px) {
                .container {
                  width: 100% !important;
                  padding: 20px 10px !important;
                }
                .content {
                  padding: 20px !important;
                }
                .cta-button {
                  display: block !important;
                  margin: 10px 0 !important;
                  width: 100% !important;
                  text-align: center !important;
                }
                .service-card {
                  margin-bottom: 16px !important;
                }
              }
            </style>
          </head>
          <body style="margin: 0; padding: 0; background-color: #f9fafb; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
            <table role="presentation" class="container" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
              <tr>
                <td>
                  <div class="content" style="background: white; border-radius: 16px; padding: 30px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
                    <img src="${logoUrl}" alt="Nekcy Logo" style="width: 600px; margin-bottom: 24px;">
                    <h1 style="color: #1e293b; margin: 0 0 16px 0; font-size: 24px;">Olá ${name}! 👋</h1>
                    <p style="color: #475569; margin: 0 0 24px 0; line-height: 1.6;">
                      Que ótimo ter você aqui! Somos especializados em transformar ideias em experiências digitais memoráveis.
                    </p>

                    <!-- Mensagem do usuário -->
                    <div style="background: #f8fafc; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
                      <p style="color: #475569; margin: 0 0 8px 0;"><strong style="color: #1e293b;">Sua mensagem:</strong></p>
                      <p style="color: #475569; margin: 0; line-height: 1.6;">${message}</p>
                    </div>

                    <!-- Nossos Serviços -->
                    <div style="margin-bottom: 32px;">
                      <h2 style="color: #1e293b; font-size: 18px; margin: 0 0 16px 0;">O que oferecemos:</h2>
                      <div style="display: grid; gap: 24px;"> <!-- Increased gap between cards -->
                        <div class="service-card" style="padding: 20px; border-radius: 12px; background: #f0f9ff; border-left: 4px solid #3b82f6; transition: transform 0.2s;">
                          <h3 style="color: #1e293b; margin: 0 0 8px 0; font-size: 16px;">💻 Websites & Landing Pages</h3>
                          <p style="color: #475569; margin: 0; font-size: 14px; line-height: 1.6;">Design personalizado e desenvolvimento sob medida para sua marca.</p>
                        </div>
                        <div class="service-card" style="padding: 20px; border-radius: 12px; background: #fdf4ff; border-left: 4px solid #d946ef; transition: transform 0.2s;">
                          <h3 style="color: #1e293b; margin: 0 0 8px 0; font-size: 16px;">🛍️ E-commerce</h3>
                          <p style="color: #475569; margin: 0; font-size: 14px; line-height: 1.6;">Soluções completas para sua loja online.</p>
                        </div>
                      </div>
                    </div>

                    <!-- Próximos Passos -->
                    <div style="background: #f8fafc; border-radius: 8px; padding: 24px; margin-bottom: 24px;">
                      <h3 style="color: #1e293b; margin: 0 0 16px 0; font-size: 18px;">Próximos passos:</h3>
                      <ol style="color: #475569; margin: 0; padding-left: 20px;">
                        <li style="margin-bottom: 8px;">Nossa equipe analisará sua mensagem</li>
                        <li style="margin-bottom: 8px;">Entraremos em contato em até 24 horas</li>
                        <li style="margin-bottom: 8px;">Agendaremos uma reunião para discutir seu projeto</li>
                        <li>Começaremos a criar algo incrível juntos!</li>
                      </ol>
                    </div>

                    <!-- CTAs -->
                    <div class="button-container" style="text-align: center; margin: 32px 0;">
                      <a href="${websiteUrl}#portfolio" class="button" style="display: inline-block; background: #3b82f6; color: white; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: 500; margin: 0 8px;">Ver Portfólio</a>
                      <a href="${websiteUrl}#services" class="button" style="display: inline-block; background: #f8fafc; color: #1e293b; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: 500; border: 1px solid #e2e8f0;">Nossos Serviços</a>
                    </div>

                    <!-- Social Media -->
                    <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e2e8f0;">
                      <p style="color: #64748b; margin: 0 0 20px 0; text-align: center; font-size: 14px;">Acompanhe nosso trabalho:</p>
                      <div style="text-align: center; display: flex; justify-content: center; gap: 24px;">
                        <a href="https://instagram.com/nekcy" style="color: #3b82f6; text-decoration: none; padding: 8px 16px;">Instagram</a>
                        <a href="https://linkedin.com/company/nekcy" style="color: #3b82f6; text-decoration: none; padding: 8px 16px;">LinkedIn</a>
                      </div>
                    </div>
                  </div>

                  <!-- Footer -->
                  <div style="text-align: center; margin-top: 24px; padding: 0 20px;">
                    <p style="color: #64748b; font-size: 14px; margin: 0 0 8px 0;">
                      © ${new Date().getFullYear()} Nekcy. Todos os direitos reservados.
                    </p>
                  </div>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return NextResponse.json(
      { message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar email' },
      { status: 500 }
    );
  }
}