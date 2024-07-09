// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "~/components/ui/button";

// export default function HomePage() {
//   return (
//     <div className="relative h-screen w-full">
      {/* <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/aqua-guardians.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      {/* <Image src="/aqua-guardian.png" alt="Aqua Guardians" width={1000} height={1000} />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <Button asChild className="mt-16">
          <Link href="/dashboard">Dashboard</Link>
        </Button>
      </div>
    </div>
  );
} */}


import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function HomePage() {


  return (
    <div className="relative h-screen w-full">
      <Image
        src="/aqua-guardians.png"
        alt="Aqua Guardians background"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <Button variant="default">
          <Link href="/dashboard" className="text-white">Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}

