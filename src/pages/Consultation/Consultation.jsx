import { Link } from 'react-router-dom'
import Section from '../../components/Section/Section.jsx'
import Button from '../../components/Button/Button.jsx'

const consultationAreas = [
  {
    number: '01',
    title: 'Business & Technology Strategy',
    description:
      'Have a business idea but do not know what technology you need? We help you turn the idea into a practical digital strategy.'
  },
  {
    number: '02',
    title: 'Startup & Business Ideas',
    description:
      'We can help you examine your idea, identify opportunities, understand the technology involved and plan the right way to move forward.'
  },
  {
    number: '03',
    title: 'Website & Software Advice',
    description:
      'Not sure whether you need a website, web application, mobile app or custom software? We help you choose the right solution before you spend money building it.'
  },
  {
    number: '04',
    title: 'AI & Automation',
    description:
      'Discover where artificial intelligence and automation can genuinely improve your business, workflow or product.'
  },
  {
    number: '05',
    title: 'Project Review',
    description:
      'Already have a website or software project? We can review it, identify weaknesses and recommend practical improvements.'
  },
  {
    number: '06',
    title: 'Digital Growth',
    description:
      'Get guidance on building your digital presence, improving your online systems and creating better experiences for your customers.'
  }
]

export default function Consultation() {
  return (
    <main className="overflow-hidden">

      {/* HERO */}

      <section className="relative min-h-[70vh] flex items-center">

        <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

        <div className="absolute -top-48 -left-40 w-[34rem] h-[34rem] rounded-full bg-electric-500/10 blur-[120px] pointer-events-none" />

        <div className="absolute -bottom-48 -right-40 w-[34rem] h-[34rem] rounded-full bg-violet-500/10 blur-[120px] pointer-events-none" />

        <div className="container-page section-pad py-24 md:py-32 relative">

          <Section className="max-w-4xl">

            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2">

              <span className="relative flex w-2 h-2">

                <span className="absolute inline-flex w-full h-full rounded-full bg-cyan-400 opacity-60 animate-ping" />

                <span className="relative inline-flex rounded-full w-2 h-2 bg-cyan-400" />

              </span>

              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-400">
                Rackyweb Consultation
              </span>

            </div>

            <h1 className="font-display font-bold text-[clamp(3rem,7vw,6.5rem)] leading-[.94] tracking-[-0.06em] text-ink-50 mt-8">

              Have an idea?

              <br />

              <span className="gradient-text">
                Let's figure it out.
              </span>

            </h1>

            <p className="text-ink-400 text-base md:text-lg leading-8 mt-8 max-w-2xl">
              You do not need to know exactly what technology you need before
              speaking with us. Tell us what you are trying to achieve and
              we will help you understand the possibilities, the right
              approach and the next step.
            </p>

            <div className="flex flex-wrap gap-3 mt-9">

              <Button
                href="https://wa.me/2347087806251"
                variant="primary"
              >
                Talk to Us on WhatsApp →
              </Button>

              <Button
                to="/contact"
                variant="outline"
              >
                Contact Rackyweb
              </Button>

            </div>

          </Section>

        </div>

      </section>


      {/* INTRO */}

      <section className="section-pad py-20 md:py-28 border-y border-white/[0.06] bg-white/[0.015]">

        <div className="container-page grid lg:grid-cols-[.75fr_1.25fr] gap-12 lg:gap-24">

          <Section>

            <span className="eyebrow">
              Why Consultation?
            </span>

            <h2 className="font-display font-semibold text-3xl md:text-5xl leading-tight text-ink-50 mt-5">
              Sometimes the first step is simply having the right conversation.
            </h2>

          </Section>

          <Section delay={100}>

            <p className="text-xl leading-9 text-ink-300">
              Technology can become expensive and complicated when you start
              building before understanding the actual problem.
            </p>

            <p className="text-ink-500 leading-8 mt-6">
              Our consultation helps you get clarity before making major
              decisions. Whether you are an entrepreneur, an organization,
              a developer or someone with a new idea, we can help you
              understand what is possible and what makes sense.
            </p>

          </Section>

        </div>

      </section>


      {/* CONSULTATION AREAS */}

      <section className="section-pad py-20 md:py-32">

        <div className="container-page">

          <Section className="max-w-2xl mb-12">

            <span className="eyebrow">
              What We Can Help With
            </span>

            <h2 className="font-display font-semibold text-3xl md:text-5xl text-ink-50 mt-5">
              Bring the problem.
              <br />
              We'll explore the solution.
            </h2>

          </Section>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {consultationAreas.map((item, index) => (

              <Section
                key={item.number}
                delay={index * 70}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-electric-400/30 hover:bg-white/[0.045]"
              >

                <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-electric-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">

                  <span className="font-mono text-xs text-electric-400">
                    {item.number}
                  </span>

                  <h3 className="font-display text-xl font-semibold text-ink-50 mt-10">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-ink-500 mt-4">
                    {item.description}
                  </p>

                </div>

              </Section>

            ))}

          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}

      <section className="section-pad py-20 md:py-32 bg-navy-900/40 border-y border-white/[0.06]">

        <div className="container-page">

          <Section className="max-w-2xl mb-12">

            <span className="eyebrow">
              Simple Process
            </span>

            <h2 className="font-display font-semibold text-3xl md:text-5xl text-ink-50 mt-5">
              No complicated process.
            </h2>

          </Section>


          <div className="grid md:grid-cols-3 gap-5">

            <Section className="rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7">

              <span className="font-mono text-electric-400 text-xs">
                01
              </span>

              <h3 className="font-display text-xl font-semibold text-ink-50 mt-8">
                Tell us about it
              </h3>

              <p className="text-sm leading-7 text-ink-500 mt-4">
                Explain your idea, problem, business or project in your own
                words. You do not need technical knowledge.
              </p>

            </Section>


            <Section
              delay={80}
              className="rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7"
            >

              <span className="font-mono text-electric-400 text-xs">
                02
              </span>

              <h3 className="font-display text-xl font-semibold text-ink-50 mt-8">
                We understand it
              </h3>

              <p className="text-sm leading-7 text-ink-500 mt-4">
                We discuss your goals and identify the technology,
                opportunities and challenges involved.
              </p>

            </Section>


            <Section
              delay={160}
              className="rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7"
            >

              <span className="font-mono text-electric-400 text-xs">
                03
              </span>

              <h3 className="font-display text-xl font-semibold text-ink-50 mt-8">
                You get direction
              </h3>

              <p className="text-sm leading-7 text-ink-500 mt-4">
                We recommend a practical next step based on what your
                project actually needs.
              </p>

            </Section>

          </div>

        </div>

      </section>


      {/* PRICING */}

      <section className="section-pad py-20 md:py-28">

        <div className="container-page">

          <Section className="max-w-3xl mx-auto text-center rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-8 md:p-14">

            <span className="eyebrow">
              Consultation
            </span>

            <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink-50 mt-5">
              Let's discuss what you actually need.
            </h2>

            <p className="text-ink-400 leading-8 mt-5 max-w-2xl mx-auto">
              Consultation requirements vary from project to project.
              Instead of forcing every client into the same package, we
              prefer to understand your situation first and discuss any
              applicable consultation fee directly.
            </p>

            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-600 mt-6">
              No obligation to start a project
            </p>

          </Section>

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="section-pad py-28 md:py-40">

        <div className="container-page text-center">

          <Section>

            <span className="eyebrow">
              Your Idea. Your Next Move.
            </span>

            <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-[-0.04em] text-ink-50 mt-5">

              Not sure where

              <br />

              <span className="gradient-text">
                to begin?
              </span>

            </h2>

            <p className="text-ink-500 max-w-xl mx-auto leading-7 mt-6">
              Start with a conversation. Tell Rackyweb Technologies what
              you are trying to achieve and let's explore the best way
              forward.
            </p>

            <div className="flex justify-center flex-wrap gap-3 mt-9">

              <Button
                href="https://wa.me/2347087806251"
                variant="primary"
              >
                Book a Consultation →
              </Button>

              <Button
                to="/contact"
                variant="outline"
              >
                Contact Us
              </Button>

            </div>

          </Section>

        </div>

      </section>

    </main>
  )
}