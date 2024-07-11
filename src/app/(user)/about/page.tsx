import Link from 'next/link';
import React from 'react';
import { Button } from '~/components/ui/button';

const Aboutpage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About AquaGuardians</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          At AquaGuardians, we&apos;re dedicated to preserving and protecting our precious water resources. Our mission is to empower communities, researchers, and policymakers with real-time, accurate data on lake water quality, fostering informed decision-making and environmental stewardship.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
        <p className="text-gray-700 mb-4">
          We provide a comprehensive platform for monitoring and analyzing lake water quality. Our network of advanced sensors continuously collects data on key parameters such as pH, temperature, total dissolved solids (TDS), and turbidity. This data is then processed, visualized, and made accessible through our user-friendly interface.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Enabling early detection of water quality issues</li>
          <li>Supporting scientific research on aquatic ecosystems</li>
          <li>Assisting in the development of effective water management policies</li>
          <li>Raising public awareness about the importance of water quality</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="text-gray-700 mb-4">
          AquaGuardians brings together a diverse team of environmental scientists, data analysts, software engineers, and community outreach specialists. Our passion for environmental conservation and technological innovation drives us to continually improve our services and expand our reach.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Join Us in Protecting Our Lakes</h2>
        <p className="text-gray-700 mb-4">
          Whether you&apos;re a concerned citizen, a researcher, or a policymaker, your involvement is crucial in our mission to safeguard our water resources. Explore our data, participate in our community initiatives, or reach out to learn how you can contribute to lake water quality monitoring in your area.
        </p>
        <div className="flex space-x-4">
          <Link href="/sign-in">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Get Involved
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Aboutpage;
