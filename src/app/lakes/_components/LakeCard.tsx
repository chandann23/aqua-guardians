




// type Lake = {
//   id: number
//   name: string
//   location: string
//   ph: number
//   temperature: number
//   tds: number
//   turbidity: number
// }


// export const LakeCard = ({ lake }: { lake: Lake }) => {
//   return (
//   <Card>
//   <CardHeader className="p-2 pt-0 md:p-4">
//     <CardTitle>{lake.name}</CardTitle>
//     <CardDescription>
//       Location: {lake.location}
//     </CardDescription>
//   </CardHeader>
//   <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
//     <div className="space-y-2">
//       <p>pH: {lake.ph}</p>
//       <p>Temperature: {lake.temperature}°C</p>
//       <p>TDS: {lake.tds} mg/L</p>
//       <p>Turbidity: {lake.turbidity} NTU</p>
//     </div>
//     <Button size="sm" className="w-full mt-4">
//       View Details
//     </Button>
//   </CardContent>
// </Card>)

// }

import React from 'react';
import { Button } from "~/components/ui/button"
 import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card"
import { EditLakeDialog } from './EditLakeDialog';
import { Brain } from 'lucide-react';
import Link from 'next/link';



type Lake = {
  id: number
  name: string
  location: string
  ph: number
  temperature: number
  tds: number
  turbidity: number
}

export function LakeCard ({ lake }: { lake: Lake }) {
  return (
<div className="flex flex-wrap justify-center gap-6">
  <Card className="w-80 bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
 { lake.temperature>30 ? <div className="h-12 bg-red-200"></div> : <div className="h-12 bg-green-100"></div> }
  <CardHeader className="p-4">
    <CardTitle className="text-xl font-semibold">{lake.name}</CardTitle>
    <CardDescription className="text-sm text-gray-500">
      {lake.location || "No URL specified"}
    </CardDescription>
  </CardHeader>
  <CardContent className="p-4">
    <p className="text-lg font-bold">pH <span className="text-sm font-normal text-gray-500">{`:${lake.ph}`}</span></p>
    <p className="text-lg font-bold">Temperature <span className="text-sm font-normal text-gray-500">{`:${lake.temperature}°C `}</span></p>
    <p className="text-lg font-bold">TDS <span className="text-sm font-normal text-gray-500">{`:${lake.tds} mg/L`}</span></p>
    <p className="text-lg font-bold">Turbidity <span className="text-sm font-normal text-gray-500">{`:${lake.turbidity} NTU`}</span></p>
    <div className="mt-2 flex space-x-2 justify-between">
     <EditLakeDialog lake={lake} />
     <Link href="/chat" className='mt-3'>
     <Brain />
     </Link>
    </div>

  </CardContent>
</Card>
</div>
  );
}

  // {lakes.map((lake) => (
  //   <Card key={lake.name} className="w-80 bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
  //     <div className="h-12 bg-pattern-houndstooth" style={{backgroundColor: lake.patternColor}}></div>
  //     <CardHeader className="p-4">
  //       <CardTitle className="text-xl font-semibold">{lake.name}</CardTitle>
  //       <CardDescription className="text-sm text-gray-500">
  //         {lake.url || "No URL specified"}
  //       </CardDescription>
  //     </CardHeader>
  //     <CardContent className="p-4">
  //       <p className="text-lg font-bold">{lake.size} <span className="text-sm font-normal text-gray-500">/ 2GB ({lake.percentage})</span></p>
  //       <div className="mt-2 flex space-x-2">
  //         <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Free</span>
  //         <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Shared Quota</span>
  //       </div>
  //     </CardContent>
  //   </Card>
  // ))}
// </div>