import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-10 md:mt-20">
        <div>
          <h1 className="text-5xl font-bold drop-shadow-md leading-tight">
            <b>Bugwatch</b>
            <br /> Where AI Hunts Bugs, <br />
            So You Don't Have To.
          </h1>
          <p className="mt-4 text-text_light">
            Bugwatch is an open-source, AI-powered bug tracking system designed
            to streamline your development workflow. Detect, track, and resolve
            bugs effortlessly, so you can focus on building great software.
          </p>
          <Link
            href="/about"
            className="inline-block font-bold bg-accent_color text-white rounded-md py-3 px-10 mt-8"
          >
            Get Started
          </Link>
        </div>
        <div className="relative min-h-[250px]">
          <Image
            src="/bugwatch-illustration-1.png"
            alt="Bugwatch Illustration"
            fill={true}
          />
        </div>
      </div>
      <div className="bg-background w-full max-w-7xl mx-auto drop-shadow-sm shadow-lg py-10 rounded-md grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mt-10 md:mt-20 translate-y-8">
        <div className="flex gap-4 justify-center">
          <Image
            width={48}
            height={48}
            src="/user.svg"
            alt="Bugwatch Illustration"
          />
          <div>
            <p className="text-foreground font-bold text-2xl">90+</p>
            <p className="text-lg">Users</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <Image
            width={48}
            height={48}
            src="/location.svg"
            alt="Bugwatch Illustration"
          />
          <div>
            <p className="text-foreground font-bold text-2xl">10+</p>
            <p className="text-lg">Locations</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <Image
            width={48}
            height={48}
            src="/server.svg"
            alt="Bugwatch Illustration"
          />
          <div>
            <p className="text-foreground font-bold text-2xl">50+</p>
            <p className="text-lg">Servers</p>
          </div>
        </div>
      </div>
      <div className="bg-background_gray">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 pt-28 pb-4 px-4">
          <div className="relative min-h-[250px]">
            <Image
              src="/bugwatch-illustration-2.png"
              alt="Bugwatch Illustration"
              fill={true}
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold drop-shadow-md leading-tight">
              <b>Bugwatch</b>
              <br /> Where AI Hunts Bugs, <br />
              So You Don't Have To.
            </h1>
            <p className="mt-4 text-text_light">
              Bugwatch is an open-source, AI-powered bug tracking system
              designed to streamline your development workflow. Detect, track,
              and resolve bugs effortlessly, so you can focus on building great
              software.
            </p>
            <Link
              href="/about"
              className="inline-block font-bold bg-accent_color text-white rounded-md py-3 px-10 mt-8"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
