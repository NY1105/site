import React from 'react'
import RenderContainer from './RenderContainer'
import { Experience } from '@/utils/types'
import ExperienceContainer from './ExperienceContainer'
import ExperienceData from '@/data/experiences.json'

const RenderExperience = () => {
  const experiences = ExperienceData.experiences
  return (
    <RenderContainer
      title="Experience"
      childrenClassName="flex justify-center py-3 h-max"
    >
      <div className="flex flex-col justify-center">
        {experiences.map((experience: Experience) => (
          <ExperienceContainer
            key={`${experience}-${experience.id}`}
            id={experience.id}
            title={experience.title}
            organization={experience.organization}
            shortname={experience.shortname}
            url={experience.url}
            image={experience.image}
          />
        ))}
      </div>
    </RenderContainer>
  )
}

export default RenderExperience
