import { IoLogoGithub } from "react-icons/io";
import Link from "components/link";
import Logo from "components/logo";

export default function Footer() {
  var todaysDate = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <footer className="px-6 pt-12 pb-12 sm:pt-16">
      <div className="flex flex-col flex-wrap items-center justify-between max-w-4xl mx-auto sm:items-start sm:flex-row">
        <div className="flex flex-col items-center mb-6 sm:block sm:mb-0">
          <Logo className="mb-3" />
          <p className="text-sm font-medium text-gray-600 dark:text-gray-200">
            👋 Have a great {days[todaysDate.getDay()]}!
          </p>
        </div>
        <div className="flex gap-20 mb-8">
          <div className="flex flex-col sm:items-start sm:text-left">
            <h2 className="mb-1.5 text-sm font-semibold text-black dark:text-white">
              Get in Touch
            </h2>
            <ol className="flex flex-col gap-2 sm:gap-1">
              <li>
                <Link
                  subtle
                  size="sm"
                  href="https://github.com/ChristianJHughes"
                  newTab
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  subtle
                  size="sm"
                  href="https://www.linkedin.com/in/christianjhughes/"
                  newTab
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  subtle
                  size="sm"
                  href="https://twitter.com/codes_io"
                  newTab
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  subtle
                  size="sm"
                  href="mailto:christian.hughes@hey.com"
                  newTab
                >
                  Email
                </Link>
              </li>
            </ol>
          </div>
          <div className="flex flex-col sm:text-left sm:items-start">
            <h2 className="mb-1.5 text-sm font-semibold text-black dark:text-white">
              Other Stuff
            </h2>
            <ol className="flex flex-col gap-2 sm:gap-1">
              <li>
                <Link subtle size="sm" href="/resume" newTab>
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  subtle
                  size="sm"
                  href="https://github.com/ChristianJHughes/devTools"
                  newTab
                >
                  Dev Tools
                </Link>
              </li>
              <li>
                <Link
                  subtle
                  size="sm"
                  href="https://github.com/ChristianJHughes/advent-of-code"
                  newTab
                >
                  Advent of Code
                </Link>
              </li>
            </ol>
          </div>
        </div>
        <p className="flex-shrink-0 w-full mb-2 text-sm font-semibold leading-relaxed text-center text-gray-800 dark:text-gray-200">
          Built with{" "}
          <Link href="https://nextjs.org/" newTab>
            Next.js
          </Link>{" "}
          &amp;{" "}
          <Link href="https://tailwindcss.com/" newTab>
            Tailwind
          </Link>{" "}
          on{" "}
          <a
            href="https://github.com/ChristianJHughes/christiancodes.io"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoGithub className="inline-block w-5 h-5 hover:text-blue-700 dark:hover:text-blue-400" />
          </a>
          . Deployed on{" "}
          <Link href="https://vercel.com/" className="whitespace-nowrap" newTab>
            ▲ Vercel
          </Link>
          .
        </p>
        <p className="flex-shrink-0 w-full text-sm font-normal text-center text-gray-500 dark:text-gray-400">
          &copy; {todaysDate.getFullYear()} Christian Hughes.
        </p>
      </div>
    </footer>
  );
}
