/**
 * @copyright 2024 Nischal Bhandari
 * @license Apache-2.0
 */


/**
 * Components
 */
import SkillCard from "./SkillCard";


const skillItem = [
  {
    imgSrc: '/images/c++.svg',
    label: 'C++',
    desc: 'Programming Language'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/python.svg',
    label: 'Python',
    desc: 'Programming Language'
  },
  {
    imgSrc: '/images/html.svg',
    label: 'HTML',
    desc: 'Markup Language'
  },
  {
    imgSrc: '/images/linux.svg',
    label: 'Linux',
    desc: 'Operating System'
  },
  {
    imgSrc: '/images/unreal.svg',
    label: 'Unreal Engine',
    desc: 'Game Engine'
  },
  {
    imgSrc: '/images/Azure.svg',
    label: 'Azure',
    desc: 'Cloud Platform'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'JavaScript Framework'
  }
];



const Skill = () => {
  return (
    <section className="section">
      <div className="container">

        <h2 className="headline-2 reveal-up">
          Tools I’ve Learned and Continue to Explore
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
        A showcase of the essential tools I’ve mastered and the technologies I’m exploring to further enhance my expertise.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Skill