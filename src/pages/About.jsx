import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { experiences, skills } from "../contains/index";

import "react-vertical-timeline-component/style.min.css";
import CTA from '../components/CTA';

const About = () => {

  return (
    <section className='max-container'>
      <h1 className='head-text'>Hello</h1>
      I am <span className='blue-gradient_text font-semibold drop-shadow'>Kiet </span>{" "}
      👋
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Software Engineer based in Croatia, specializing in technical
          education through hands-on learning and building applications.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 grid grid-cols-5 gap-10'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
        <div className="py-16">
          <h3 className="subhead-text">Work Experience</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              I have
            </p>
          </div>
          <div className='w-full mt-[16px]'>
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                    <img src={experience.icon} alt={experience.company_name} 
                    className='w-[60%] h-[60%] object-contain'/>
                    </div>
                  }
                  iconStyle={{background: experience.iconBg}}
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: experience.iconBg,
                    boxShadow: 'none'
                  }}
                 >
                  <div>
                    <h3 className='text-black font-medium'>{experience.title}</h3>
                    <p className='text-black-500 font-medium font-base m-[0px]' >
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, i) => (
                    <li key={i} className='text-black-500/50 font-normal pl-1'>{point}</li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}

            </VerticalTimeline>
          </div>

        </div>
      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default About