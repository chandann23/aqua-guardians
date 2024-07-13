// import React from 'react'
// import { getAuthSession } from '~/lib/auth'
// import { AccessLevel } from '@prisma/client'
// import MobileNav from './_components/Mobile-Nav'


// const page = async () => {
//   const user = await getAuthSession()
//   console.log(user?.user.access)
//   return (
//     <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
//       <div className="p-5">
//         <MobileNav />
//       </div>
//     </div>
//   )
// }

// export default page
import React from 'react';

const ngoData = {
  "NGOs": [
    {"name": "WeWater", "url": "https://www.wewater.org/"},
    {"name": "Water.org", "url": "https://water.org/"},
    {"name": "WaterAid India", "url": "https://www.wateraid.org/in/"},
    {"name": "Swades", "url": "https://swadesfoundation.org/water-and-sanitation/"},
    {"name": "Water for People", "url": "https://www.waterforpeople.org/india"},
    {"name": "Jaldhaara", "url": "http://jaldhaara.org/"},
    {"name": "Wash Institute", "url": "https://www.washinstitute.org/"},
    {"name": "Biome Environmental Trust", "url": "https://biometrust.org/"},
    {"name": "Water is Life", "url": "https://www.waterislife.com/"},
    {"name": "Jaljeevika", "url": "https://jaljeevika.org/"},
    {"name": "Clean Water Action", "url": "https://cleanwater.org/"},
    {"name": "Project WET", "url": "https://www.projectwet.org/"},
    {"name": "World Water Council", "url": "https://www.worldwatercouncil.org/en"},
    {"name": "Wort", "url": "https://wotr.org/about-us/"},
    {"name": "Jal Bhagirathi Foundation", "url": "https://jalbhagirathi.org/"},
    {"name": "India Water Foundation", "url": "https://www.indiawaterfoundation.org/"},
    {"name": "Jal Seva Charitable Foundation", "url": "https://waterforpeopleindia.org/"},
    {"name": "Sankalpa Rural Development Society", "url": "https://srdsindia.org/"},
    {"name": "Arghyam", "url": "https://arghyam.org/"},
    {"name": "Watershed Organisation Trust", "url": "https://wotr.org/"},
    {"name": "Development Alternatives", "url": "https://www.devalt.org/"},
    {"name": "The Water Project", "url": "https://thewaterproject.org/"},
    {"name": "Lifewater International", "url": "https://lifewater.org/"},
    {"name": "Global Water Partnership", "url": "https://www.gwp.org/"},
    {"name": "Aqua for All", "url": "https://aquaforall.org/"},
    {"name": "World Water Council", "url": "https://www.worldwatercouncil.org/en"}
  ]
};

const NGOCard: React.FC<{ name: string; url: string }> = ({ name, url }) => (
  <div className="bg-white rounded-lg shadow-md p-6 w-64 text-center transition-transform duration-300 hover:-translate-y-1">
    <h3 className="text-xl font-semibold text-blue-600 mb-4">{name}</h3>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
    >
      Visit Website
    </a>
  </div>
);

const NGOCardsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Aqua Guardian - Partner NGOs
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {ngoData.NGOs.map((ngo, index) => (
          <NGOCard key={index} name={ngo.name} url={ngo.url} />
        ))}
      </div>
    </div>
  );
};

export default NGOCardsPage;
