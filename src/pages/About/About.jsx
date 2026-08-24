import { company } from '../../data/company.js'
import { whyChooseUs } from '../../data/technologies.js'
import { founder } from '../../data/team.js'
import Section from '../../components/Section/Section.jsx'
import Button from '../../components/Button/Button.jsx'

const principles = [
  {
    number: '01',
    title: 'Build with purpose',
    body: 'Every product should solve a real problem. We care about usefulness as much as visual quality.',
  },
  {
    number: '02',
    title: 'Think beyond launch',
    body: 'A good digital product should be built with growth, maintenance and future improvements in mind.',
  },
  {
    number: '03',
    title: 'Make technology human',
    body: 'Complex technology means very little if people cannot understand or use the final product.',
  },
]

export default function About() {
  return (
    <div>

      <section className="section-pad pt-20 pb-20 md:pt-32 md:pb-28">
        <div className="container-page max-w-5xl">

          <Section>
            <span className="eyebrow">Rackyweb Technologies</span>

            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[.92] tracking-[-.055em] text-ink-50 mt-6">
              A technology company
              <br />
              <span className="gradient-text">built from an idea.</span>
            </h1>

            <p className="text-ink-400 text-lg md:text-xl leading-8 max-w-3xl mt-8">
              {company.description}
            </p>
          </Section>

        </div>
      </section>

      <section className="section-pad py-20 md:py-28 border-y border-white/[0.06] bg-navy-900/40">
        <div className="container-page">

          <div className="grid md:grid-cols-3 gap-px bg-white/[0.07] rounded-3xl overflow-hidden border border-white/[0.07]">

            {principles.map((item) => (
              <Section
                key={item.number}
                className="bg-navy-950 p-8 md:p-10"
              >
                <span className="font-mono text-xs text-electric-400">
                  {item.number}
                </span>

                <h2 className="font-display font-semibold text-xl text-ink-50 mt-12">
                  {item.title}
                </h2>

                <p className="text-sm leading-7 text-ink-500 mt-4">
                  {item.body}
                </p>
              </Section>
            ))}

          </div>

        </div>
      </section>

      <section className="section-pad py-24 md:py-36">
        <div className="container-page grid lg:grid-cols-[.8fr_1.2fr] gap-14 lg:gap-24">

          <Section>
            <span className="eyebrow">What We Do</span>

            <h2 className="font-display text-3xl md:text-5xl font-semibold text-ink-50 mt-5">
              Software, web and AI — built around the problem.
            </h2>
          </Section>

          <Section delay={100}>
            <p className="text-lg leading-8 text-ink-300">
              Rackyweb Technologies works across web development, custom
              software, artificial intelligence, digital experiences and
              technology education.
            </p>

            <p className="text-ink-500 leading-8 mt-6">
              We are building a company that can work with people locally and
              remotely, while creating products capable of reaching audiences
              far beyond Nigeria.
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              {[
                'Web',
                'Software',
                'AI',
                'Automation',
                'Digital Products',
                'Education',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs font-mono text-ink-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </Section>

        </div>
      </section>

      {/* FOUNDER */}
      <section className="section-pad py-24 md:py-32 bg-navy-900/40 border-y border-white/[0.06]">
        <div className="container-page">

          <Section className="max-w-3xl mx-auto">

            <div className="text-center">
              <span className="eyebrow">Founder</span>

              <h2 className="font-display font-bold text-4xl md:text-6xl text-ink-50 mt-5">
                Edward Prince Akachukwu
              </h2>

              <p className="text-electric-400 font-mono text-xs uppercase tracking-[0.18em] mt-3">
                Founder & Technology Developer
              </p>
            </div>

            <div className="mt-12 rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 md:p-12">

              <div className="flex flex-col sm:flex-row gap-7">

                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-electric-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center shrink-0">
                  <span className="font-display text-3xl font-bold gradient-text">
                    EP
                  </span>
                </div>

                <div>
                  <p className="text-ink-300 leading-8">
                    {founder.bio}
                  </p>

                  <p className="text-ink-500 italic leading-7 mt-5">
                    “{founder.vision}”
                  </p>

                  <div className="flex flex-wrap gap-2 mt-7">
                    {founder.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[10px] px-3 py-1.5 rounded-full bg-white/[0.04] text-ink-500 border border-white/[0.05]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-8">
                    <Button
                      href={founder.portfolioLink}
                      variant="outline"
                    >
                      View Portfolio →
                    </Button>

                    <Button
                      href={company.whatsapp}
                      variant="primary"
                    >
                      Contact Rackyweb
                    </Button>
                  </div>
                </div>

              </div>

            </div>

          </Section>

        </div>
      </section>

      {/* WHY */}
      <section className="section-pad py-24 md:py-32">
        <div className="container-page">

          <Section className="max-w-2xl mb-12">
            <span className="eyebrow">Why Rackyweb</span>

            <h2 className="font-display text-3xl md:text-5xl font-semibold text-ink-50 mt-5">
              Serious about the work.
            </h2>
          </Section>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseUs.map((item, index) => (
              <Section
                key={item.title}
                delay={index * 60}
                className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7 hover:border-electric-400/20 transition-colors"
              >
                <span className="font-mono text-xs text-electric-400">
                  0{index + 1}
                </span>

                <h3 className="font-display font-semibold text-lg text-ink-50 mt-10">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-ink-500 mt-3">
                  {item.body}
                </p>
              </Section>
            ))}
          </div>

        </div>
      </section>

      <section className="section-pad pb-28 text-center">
        <Button to="/contact" variant="primary">
          Work With Rackyweb →
        </Button>
      </section>

    </div>
  )
}