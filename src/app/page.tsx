"use client"

import { useScroll, useSpring } from 'framer-motion'
import HeroSection from './components/HeroSection'
import TestimonialsSection from './components/TestimonalSection'
import GetInTouchSection from './components/GetInTouch'
import HowItWorksSection from './components/StepsSection'
import ServicesSection from './components/ServicesSection'
import PortfolioSection from './components/PortfolioSection'
import FAQSection from './components/FAQ'
import CallToAction from './components/CallToAction'
import StepsSection from './components/Steps'
export default function LandingPage() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <main>
        <HeroSection />
        <StepsSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FAQSection />
        <HowItWorksSection/>
        <GetInTouchSection />
        <CallToAction />
      </main>
    </div>
  )
}
