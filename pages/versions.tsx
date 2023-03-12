import RenderContainer from '@/components/RenderContainer'
import React from 'react'
import versionData from '@/data/versions.json'

const versions = () => {
  const versions = versionData.versions
  return (
    <RenderContainer title="Versions">
      <div className="flex flex-col items-center overflow-y-auto">
        <div className="h-1/2">
          {versions.map((version) => (
            <div
              key={version.version}
              className={`border-2 rounded-lg p-4 my-2  border-gray-400 dark:border-white ${version.display ? '' : 'hidden'}`}
            >
              <div className="text-xl">{version.version}</div>
              <img src={version.image} alt={version.version} />
            </div>
          ))}
        </div>
      </div>
    </RenderContainer>
  )
}

export default versions
