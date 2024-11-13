/**
 * @copyright 2024 Nischal Bhandari
 * @license Apache-2.0
 */


/**
 * About Section
 */

const aboutItems = [
  {
    label: 'Project done',
    number: 3
  },
  {
    label: 'Years of experience',
    number: 1
  }
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          {/* Personal description improved for readability */}
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Hello! I&apos;m <span className="font-semibold text-white">Nischal Bhandari</span>, an aspiring software engineer with a passion for creating efficient and innovative software solutions.
          </p>

          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            With a strong foundation in <span className="font-semibold text-white">C++, Python,</span> and <span className="font-semibold text-white">cloud technologies</span>, I&apos;m constantly learning and improving my skills to stay on top of the latest trends in the tech industry.
          </p>

          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            I&apos;m always eager to collaborate on exciting projects and open to new opportunities where I can make a meaningful impact. Let&apos;s build something amazing together!
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

            <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
