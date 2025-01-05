import Image from "next/image";
import Link from "next/link";
import { checkmarkIcon, jiraIcon, pricingBoxImage, slackIcon } from "@/images";

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
          <div className="flex justify-center md:justify-end">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold drop-shadow-md leading-tight">
                Bugwatch Provides Many
                <br /> Features You Can Use
              </h2>
              <p className="mt-4 text-text_light">
                You can explore our features, each designed with its own unique
                functionality, while enjoying the experience.
              </p>
              <ul className="flex flex-col mt-4 space-y-6">
                <li className="flex">
                  <Image
                    width={24}
                    height={24}
                    src={checkmarkIcon}
                    alt="Check Icon"
                  />
                  <span className="ml-2">
                    Automatically identifies and flags bugs in your codebase
                    with advanced AI algorithms.
                  </span>
                </li>
                <li className="flex">
                  <Image
                    width={24}
                    height={24}
                    src={checkmarkIcon}
                    alt="Check Icon"
                  />
                  <span className="ml-2">
                    Monitor bugs as they occur and get instant notifications for
                    critical issues.
                  </span>
                </li>
                <li className="flex">
                  <Image
                    width={24}
                    height={24}
                    src={checkmarkIcon}
                    alt="Check Icon"
                  />
                  <span className="ml-2">
                    Seamlessly integrates with the most popular tools like{" "}
                    <span className="text-blue-700 font-bold">
                      <Image
                        width={24}
                        height={24}
                        src={jiraIcon}
                        alt="Check Icon"
                        className="inline mr-1"
                      />
                      Jira
                    </span>
                    , and{" "}
                    <span className="text-rose-400 font-bold">
                      <Image
                        width={24}
                        height={24}
                        src={slackIcon}
                        alt="Check Icon"
                        className="inline mr-2"
                      />
                      Slack
                    </span>
                    .
                  </span>
                </li>
                <li className="flex">
                  <Image
                    width={24}
                    height={24}
                    src={checkmarkIcon}
                    alt="Check Icon"
                  />
                  <span className="ml-2">
                    Opensource, allowing developers to adapt it to their unique
                    needs.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background_gray">
        <div className="w-full max-w-7xl mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold drop-shadow-md leading-tight">
            Choose Your Plan
          </h2>
          <p className="mt-3 text-text_light">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
          <div className="flex justify-center md:justify-between flex-wrap gap-8 mt-10 md:px-20">
            <div className="flex flex-col justify-between max-w-sm p-8 border rounded-lg shadow-md bg-white">
              <div>
                <div className="flex justify-center mb-4">
                  <Image src={pricingBoxImage} width={130} alt="pricing-box" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">
                  Free Plan
                </h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7.586 7.586a1 1 0 01-1.414 0L3.293 10.293a1 1 0 111.414-1.414L8 12.172l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">
                      Unlimited Bandwidth
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7.586 7.586a1 1 0 01-1.414 0L3.293 10.293a1 1 0 111.414-1.414L8 12.172l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">
                      Encrypted Connection
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7.586 7.586a1 1 0 01-1.414 0L3.293 10.293a1 1 0 111.414-1.414L8 12.172l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">No Traffic Logs</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7.586 7.586a1 1 0 01-1.414 0L3.293 10.293a1 1 0 111.414-1.414L8 12.172l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">
                      Works on All Devices
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-800 mb-3">Free</p>
                <div className="flex justify-center">
                  <Link
                    href="/pricing"
                    className="transition-all duration-300 ease px-6 py-2 text-accent_color border-accent_color border-2 rounded-full hover:bg-accent_color hover:text-white"
                  >
                    Select
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between max-w-sm p-8 border rounded-lg shadow-md bg-white">
              <div>
                <div className="flex justify-center mb-4">
                  <Image src={pricingBoxImage} width={130} alt="pricing-box" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">
                  Standard Plan
                </h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7.586 7.586a1 1 0 01-1.414 0L3.293 10.293a1 1 0 111.414-1.414L8 12.172l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">
                      Unlimited Bandwidth
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7.586 7.586a1 1 0 01-1.414 0L3.293 10.293a1 1 0 111.414-1.414L8 12.172l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">
                      Encrypted Connection
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7.586 7.586a1 1 0 01-1.414 0L3.293 10.293a1 1 0 111.414-1.414L8 12.172l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">No Traffic Logs</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7.586 7.586a1 1 0 01-1.414 0L3.293 10.293a1 1 0 111.414-1.414L8 12.172l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">
                      Works on All Devices
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7.586 7.586a1 1 0 01-1.414 0L3.293 10.293a1 1 0 111.414-1.414L8 12.172l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">
                      Works on All Devices
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-800 mb-3">
                  $9 / <span className="text-text_light">mo</span>
                </p>
                <div className="flex justify-center">
                  <Link
                    href="/pricing"
                    className="transition-all duration-300 ease px-6 py-2 text-accent_color border-accent_color border-2 rounded-full hover:bg-accent_color hover:text-white"
                  >
                    Select
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between max-w-sm p-8 border rounded-lg shadow-md bg-white">
              <div>
                <div className="flex justify-center mb-4">
                  <Image src={pricingBoxImage} width={130} alt="pricing-box" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">
                  Premium Plan
                </h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7.586 7.586a1 1 0 01-1.414 0L3.293 10.293a1 1 0 111.414-1.414L8 12.172l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">
                      Unlimited Bandwidth
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7.586 7.586a1 1 0 01-1.414 0L3.293 10.293a1 1 0 111.414-1.414L8 12.172l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">
                      Unlimited Bandwidth
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7.586 7.586a1 1 0 01-1.414 0L3.293 10.293a1 1 0 111.414-1.414L8 12.172l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">
                      Unlimited Bandwidth
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7.586 7.586a1 1 0 01-1.414 0L3.293 10.293a1 1 0 111.414-1.414L8 12.172l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">
                      Unlimited Bandwidth
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7.586 7.586a1 1 0 01-1.414 0L3.293 10.293a1 1 0 111.414-1.414L8 12.172l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">
                      Encrypted Connection
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7.586 7.586a1 1 0 01-1.414 0L3.293 10.293a1 1 0 111.414-1.414L8 12.172l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">No Traffic Logs</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-7.586 7.586a1 1 0 01-1.414 0L3.293 10.293a1 1 0 111.414-1.414L8 12.172l6.293-6.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2 text-gray-700">
                      Works on All Devices
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-800 mb-3">
                  20$ / <span className="text-text_light">mo</span>
                </p>
                <div className="flex justify-center">
                  <Link
                    href="/pricing"
                    className="transition-all duration-300 ease px-6 py-2 text-accent_color border-accent_color border-2 rounded-full hover:bg-accent_color hover:text-white"
                  >
                    Select
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
