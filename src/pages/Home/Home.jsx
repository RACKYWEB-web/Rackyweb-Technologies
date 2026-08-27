import { useState } from 'react'
import { Link } from 'react-router-dom'

import { company, stats } from '../../data/company.js'
import { services } from '../../data/services.js'
import { projects } from '../../data/projects.js'
import { processSteps } from '../../data/technologies.js'

import Button from '../../components/Button/Button.jsx'
import Section from '../../components/Section/Section.jsx'
import Counter from '../../components/Counter/Counter.jsx'
import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx'
import ProcessStep from '../../components/ProcessStep/ProcessStep.jsx'
import Modal from '../../components/Modal/Modal.jsx'


function OrbitVisual() {
  return (
    <div className="relative w-full max-w-[560px] aspect-square mx-auto">

      <div className="absolute inset-[12%] rounded-full border border-white/[0.07]" />

      <div className="absolute inset-[23%] rounded-full border border-electric-400/20 animate-[spin_18s_linear_infinite]" />

      <div className="absolute inset-[34%] rounded-full border border-violet-400/20 animate-[spin_13s_linear_infinite_reverse]" />

      <div className="absolute inset-[43%] rounded-full bg-gradient-to-br from-electric-500 to-violet-500 blur-2xl opacity-30" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-[2rem] border border-white/15 bg-navy-900/90 backdrop-blur-xl shadow-[0_0_100px_rgba(76,141,255,0.2)] flex items-center justify-center">

          <div className="absolute inset-2 rounded-[1.5rem] border border-electric-400/20" />
       <span className="relative font-display text-6xl md:text-7xl font-bold gradient-text block w-full h-full flex items-center justify-center p-4 bg-slate-900 rounded-2xl overflow-hidden">
  <img src="public/rackyweb.jpeg" alt="Rackyweb Logo" className="w-21/22 h-21/22 object-contain rounded-full" />
</span>



        </div>
      </div>


      <div className="absolute top-[14%] right-[13%] glass-orbit">
        <span>AI</span>
      </div>


      <div className="absolute bottom-[19%] left-[10%] glass-orbit">
        <span>WEB</span>
      </div>


      <div className="absolute bottom-[10%] right-[24%] glass-orbit">
        <span>CODE</span>
      </div>


      <div className="absolute top-[31%] left-[7%] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(95,240,220,.8)]" />

      <div className="absolute bottom-[30%] right-[7%] w-2 h-2 rounded-full bg-electric-400 shadow-[0_0_18px_rgba(111,163,255,.8)]" />

    </div>
  )
}


function ServicePreview({ service, index, onOpen }) {
  return (
    <Section
      delay={index * 70}
      className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-electric-400/30 hover:bg-white/[0.045]"
    >

      <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-electric-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative">

        <div className="flex items-start justify-between">

          <span className="font-mono text-xs text-electric-400">
            0{index + 1}
          </span>

          <span className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-ink-500 group-hover:text-electric-400 group-hover:border-electric-400/30 transition-all">
            ↗
          </span>

        </div>


        <div className="mt-12">

          <h3 className="font-display text-xl font-semibold text-ink-50">
            {service.title}
          </h3>

          <p className="text-sm leading-7 text-ink-500 mt-3">
            {service.short}
          </p>

        </div>


        <button
          type="button"
          onClick={() => onOpen(service)}
          className="mt-7 text-xs font-mono uppercase tracking-[0.18em] text-ink-400 hover:text-electric-400 transition-colors"
        >
          Explore service →
        </button>

      </div>

    </Section>
  )
}


export default function Home() {

  const [activeService, setActiveService] = useState(null)


  return (
    <div className="overflow-hidden">


      {/* =========================
          HERO
      ========================== */}

      <section className="relative min-h-[calc(100vh-80px)] flex items-center">

        <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

        <div className="absolute -top-48 -left-40 w-[36rem] h-[36rem] rounded-full bg-electric-500/10 blur-[120px] pointer-events-none" />

        <div className="absolute -bottom-48 -right-40 w-[36rem] h-[36rem] rounded-full bg-violet-500/10 blur-[120px] pointer-events-none" />


        <div className="container-page section-pad relative grid lg:grid-cols-[1.05fr_.95fr] gap-12 xl:gap-20 items-center py-20 md:py-28">


          {/*  TEXT */}

          <div className="reveal">

            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2">

              <span className="relative flex w-2 h-2">

                <span className="absolute inline-flex w-full h-full rounded-full bg-cyan-400 opacity-60 animate-ping" />

                <span className="relative inline-flex rounded-full w-2 h-2 bg-cyan-400" />

              </span>


              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-400">
                {company.name}
              </span>

            </div>


            <h1 className="font-display font-bold text-[clamp(3.2rem,7vw,6.8rem)] leading-[.92] tracking-[-0.06em] text-ink-50 mt-8 max-w-4xl">

              We build

              <br />

              <span className="gradient-text">
                what comes next.
              </span>

            </h1>


            <p className="text-ink-400 text-base md:text-lg leading-8 mt-8 max-w-xl">
              {company.description}
            </p>


            <div className="flex flex-wrap gap-3 mt-9">

              <Button
                to="/contact"
                variant="primary"
              >
                Start a Project →
              </Button>


              <Button
                to="/projects"
                variant="outline"
              >
                Explore Our Work
              </Button>

            </div>


            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-9 text-xs text-ink-600">

              <span>
                Web Development
              </span>

              <span>
                Software
              </span>

              <span>
                Artificial Intelligence
              </span>

            </div>

          </div>


          {/* HERO VISUAL */}

          <div
            className="reveal"
            style={{ animationDelay: '160ms' }}
          >

            <OrbitVisual />

          </div>

        </div>

      </section>



      {/* =========================
          COMPANY POSITIONING
      ========================== */}

      <section className="border-y border-white/[0.06] bg-white/[0.015]">

        <div className="container-page section-pad py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          <p className="font-display text-sm md:text-base text-ink-300">

            <span className="text-electric-400">
              01
            </span>

            {' '}— Based in Nigeria. Building for the world.

          </p>


          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-600">
            Digital products • intelligent systems • human experiences
          </p>

        </div>

      </section>



      {/* =========================
          STATS
      ========================== */}

      <section className="section-pad py-20 md:py-28">

        <div className="container-page grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-3xl overflow-hidden border border-white/[0.06]">

          {stats.map((stat) => (

            <div
              key={stat.label}
              className="bg-navy-950 px-6 py-8 md:px-8 md:py-10"
            >

              <Counter
                value={stat.value}
                suffix={stat.suffix}
              />

              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-600 mt-3">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </section>



      {/* =========================
          INTRODUCTION
      ========================== */}

      <section className="section-pad py-20 md:py-32">

        <div className="container-page grid lg:grid-cols-[.75fr_1.25fr] gap-12 lg:gap-24">


          <Section>

            <span className="eyebrow">
              The Rackyweb Approach
            </span>


            <h2 className="font-display font-semibold text-3xl md:text-5xl leading-tight tracking-tight text-ink-50 mt-5">
              Not just another software company.
            </h2>

          </Section>


          <Section delay={100}>

            <p className="text-xl md:text-2xl leading-9 text-ink-300">
              We take ideas, problems and opportunities and turn them into useful digital products.
            </p>


            <p className="text-ink-500 leading-8 mt-6 max-w-2xl">
              From a business that needs its first serious website to an organization that needs custom software or intelligent automation, Rackyweb Technologies focuses on technology that actually has a purpose.
            </p>


            <Link
              to="/about"
              className="inline-flex mt-8 font-mono text-xs uppercase tracking-[0.18em] text-electric-400 hover:text-electric-300"
            >
              Discover the company →
            </Link>

          </Section>

        </div>

      </section>



      {/* =========================
          SERVICES
      ========================== */}

      <section className="section-pad py-20 md:py-32 bg-navy-900/40 border-y border-white/[0.06]">

        <div className="container-page">


          <Section className="max-w-2xl mb-12">

            <span className="eyebrow">
              Capabilities
            </span>


            <h2 className="font-display font-semibold text-3xl md:text-5xl text-ink-50 mt-5">
              Technology with a reason behind it.
            </h2>


            <p className="text-ink-500 leading-7 mt-5">
              Our work sits where software, design and intelligent technology meet.
            </p>

          </Section>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {services.slice(0, 6).map((service, index) => (

              <ServicePreview
                key={service.id || service.title}
                service={service}
                index={index}
                onOpen={setActiveService}
              />

            ))}

          </div>


          <div className="mt-8">

            <Button
              to="/services"
              variant="outline"
            >
              View all services →
            </Button>

          </div>

        </div>

      </section>



      {/* =========================
          FOUNDER
      ========================== */}

      <section className="section-pad py-24 md:py-36">

        <div className="container-page">


          <Section className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-white/[0.045] to-transparent p-8 md:p-14">

            <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-violet-500/10 blur-[100px]" />


            <div className="relative grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">


              <div className="w-28 h-28 md:w-36 md:h-36 rounded-[2rem] border border-white/10 bg-gradient-to-br from-electric-500/20 via-violet-500/15 to-transparent flex items-center justify-center">

                <span className="font-display text-5xl md:text-6xl font-bold gradient-text">
                  EP
                </span>

              </div>


              <div>

                <span className="eyebrow">
                  Founder
                </span>


                <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink-50 mt-3">
                  Edward Prince Akachukwu
                </h2>


                <p className="text-electric-400 font-mono text-xs uppercase tracking-[0.15em] mt-2">
                  Founder & Technology Developer
                </p>


                <p className="text-ink-400 leading-7 mt-5 max-w-3xl">
                  Rackyweb Technologies was founded with a simple ambition: build technology that solves real problems and make those solutions accessible beyond borders.
                </p>


                <div className="flex flex-wrap gap-3 mt-7">

                  <Button
                    href={company.portfolio}
                    variant="outline"
                  >
                    View Founder Portfolio
                  </Button>


                  <Button
                    href={company.whatsapp}
                    variant="primary"
                  >
                    Talk to Rackyweb
                  </Button>

                </div>

              </div>

            </div>

          </Section>

        </div>

      </section>



     {/* =========================
    PROJECTS & PORTFOLIO
========================== */}

<section className="section-pad py-20 md:py-32">

  <div className="container-page">

    <Section className="max-w-3xl mb-14">

      <span className="eyebrow">
        What We've Built
      </span>

      <h2 className="font-display font-semibold text-3xl md:text-5xl lg:text-6xl text-ink-50 mt-5 tracking-tight">
        Real work.
        <br />
        <span className="gradient-text">
          Real things we've built.
        </span>
      </h2>

      <p className="text-ink-500 leading-8 mt-6 max-w-2xl">
        Explore Rackyweb Technologies projects, digital products and
        selected work from our founder and development journey.
      </p>

    </Section>


    {/* FOUNDER PORTFOLIO */}

    <Section className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-electric-500/[0.08] via-white/[0.025] to-violet-500/[0.06] p-8 md:p-12 mb-6">

      <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-electric-500/10 blur-[100px]" />

      <div className="relative grid lg:grid-cols-[1fr_auto] gap-10 items-center">

        <div>

          <div className="flex items-center gap-3">

            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(95,240,220,.7)]" />

            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-electric-400">
              Founder Portfolio
            </span>

          </div>


          <h3 className="font-display font-semibold text-3xl md:text-4xl text-ink-50 mt-6">
            Edward Prince Akachukwu
          </h3>


          <p className="text-electric-400 font-mono text-xs uppercase tracking-[0.16em] mt-3">
            Founder • Developer • Technology Builder
          </p>


          <p className="text-ink-400 leading-8 mt-6 max-w-2xl">
            Explore the personal portfolio of Rackyweb Technologies'
            founder, including his development journey, technical skills,
            projects, experiments and technology work.
          </p>


          <div className="flex flex-wrap gap-3 mt-8">

            <Button
              href="https://rackyweb-web.github.io/Edward-portfolio/"
              variant="primary"
            >
              View Portfolio →
            </Button>

          </div>

        </div>


        <div className="hidden md:flex w-40 h-40 lg:w-48 lg:h-48 rounded-[2rem] border border-white/10 bg-navy-950/70 backdrop-blur-xl items-center justify-center">

          <div className="text-center">

            <span className="block font-display text-6xl font-bold gradient-text">
              EP
            </span>

            <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-ink-600 mt-2">
              Portfolio
            </span>

          </div>

        </div>

      </div>

    </Section>


    {/* RACKYWEB PROJECTS */}

    <div className="grid md:grid-cols-2 gap-6">

      {projects
        .filter((project) => !project.placeholder)
        .slice(0, 6)
        .map((project, index) => (

          <Section
            key={project.id || project.title}
            delay={index * 80}
          >

            <ProjectCard
              project={project}
            />

          </Section>

        ))}

    </div>


    {/* NO PROJECTS FALLBACK */}

    {projects.filter((project) => !project.placeholder).length === 0 && (

      <div className="rounded-[2rem] border border-dashed border-white/10 bg-white/[0.015] py-20 px-6 text-center">

        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-600">
          works and projects released
        </span>

        <p className="text-ink-400 mt-4 max-w-lg mx-auto leading-7">
          We're continuously building new websites, software and
          technology projects.
        </p>

      </div>

    )}


    {/* VIEW ALL WORK */}

    <Section className="mt-10 flex flex-wrap gap-3">

      <Button
        to="/projects"
        variant="outline"
      >
        Explore Rackyweb Projects →
      </Button>

      <Button
        href="https://rackyweb-web.github.io/Edward-portfolio/"
        variant="ghost"
      >
        Visit Full Portfolio →
      </Button>
      

    </Section>

  </div>

</section>
      {/* =========================
          PROCESS
      ========================== */}

      <section className="section-pad py-20 md:py-32 bg-navy-900/40 border-y border-white/[0.06]">

        <div className="container-page">


          <Section className="max-w-xl mb-12">

            <span className="eyebrow">
              How We Work
            </span>


            <h2 className="font-display font-semibold text-3xl md:text-5xl text-ink-50 mt-5">
              From idea to something real.
            </h2>

          </Section>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

            {processSteps.slice(0, 4).map((step, index) => (

              <Section
                key={step.id || index}
                delay={index * 80}
              >

                <ProcessStep
                  step={step}
                  index={index}
                />

              </Section>

            ))}

          </div>

        </div>

      </section>



      {/* =========================
          FINAL CTA
      ========================== */}

      <section className="section-pad py-28 md:py-40">

        <div className="container-page text-center">


          <Section>

            <span className="eyebrow">
              Start Something
            </span>


            <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-[-0.04em] text-ink-50 mt-5">

              Have an idea?

              <br />

              <span className="gradient-text">
                Let's build it.
              </span>

            </h2>


            <p className="text-ink-500 max-w-xl mx-auto leading-7 mt-6">
              Tell us what you're trying to create, improve or automate. We'll help turn the idea into a practical digital solution.
            </p>


            <div className="flex justify-center flex-wrap gap-3 mt-9">

              <Button
                to="/contact"
                variant="primary"
              >
                Start a Project →
              </Button>


              <Button
                href={company.whatsapp}
                variant="outline"
              >
                WhatsApp Us
              </Button>

            </div>

          </Section>

        </div>

      </section>



      {/* =========================
          SERVICE MODAL
      ========================== */}

      <Modal
        open={!!activeService}
        onClose={() => setActiveService(null)}
      >

        {activeService && (

          <div>

            <span className="eyebrow">
              Service
            </span>


            <h3 className="font-display font-semibold text-2xl text-ink-50 mt-3">
              {activeService.title}
            </h3>


            <p className="text-ink-400 leading-7 mt-5">
              {activeService.details || activeService.short}
            </p>


            <Button
              to="/contact"
              variant="primary"
              className="mt-7"
            >
              Discuss This Service →
            </Button>

          </div>

        )}

      </Modal>

    </div>
  )
}