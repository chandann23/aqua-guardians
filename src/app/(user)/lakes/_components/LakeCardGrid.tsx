import React from 'react';
import { LakeCard } from './LakeCard'; // Assume this is your individual card component

// Define the type for a lake object
// interface Lake {
//   id: number;
//   name: string;
//   location: string;
  // Add other properties as needed


// Define the props for LakeCardGrid
// interface LakeCardGridProps {
//   lakes: Lake[];
// }

type Lake = {
  id: number
  name: string
  location: string
  ph: number
  temperature: number
  tds: number
  turbidity: number
  locationUrl: string
}

export function LakeCardGrid({ lakes }: { lakes: Lake[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {lakes.map(lake => (
        <LakeCard key={lake.id} lake={lake} />
      ))}
    </div>
  );
}
