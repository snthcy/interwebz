import Link from "next/link";
import Container from "../components/Container";
import ProjectCard from "../components/Card";
import SocialLinks from "../components/Socials";
import NowPlaying from "../components/NowPlaying";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto">
        <div className="h-full w-full flex flex-col max-w-3xl mx-auto mb-16 sm:px-0">
          <h1 className="transition duration-300 ease-in-out font-bold text-3xl md:text-5xl tracking-tight mb-4 text-white dark:text-black inline">
            Hey, I'm norman.
          </h1>
          <p className="transition duration-300 ease-in-out text-gray-400 dark:text-gray-600 mb-8 max-w-md mt-2">
            14 year old aspiring front end software developer and graphic
            designer. I do cool manager stuff at{" "}
            <Link href="https://auraside.com">
              <a className="font-bold focus:outline-none mr-10 transition duration-300 ease-in-out hover:text-pink-300 dark:font-bold hover:text-pink-300">
                AuraSide.
              </a>
            </Link>
          </p>
          <div className="transition duration-300 ease-in-out text-gray-400 dark:text-gray-600 max-w-md">
            <NowPlaying />
          </div>
          <div className="grid grid-flow-col w-60 text-lg">
            <SocialLinks className="" />
          </div>
        </div>
        <h4 className="transition duration-300 ease-in-out font-bold text-2xl md:text-4xl tracking-tight mb-4 text-white dark:text-black">
          Check these out
        </h4>
        <ProjectCard
          title="Mantle.gg"
          description="Mantle is the awesome cape system which works with your favorite clients."
          href="https://mantle.gg"
          icon="mantle"
        />
        <ProjectCard
          title="Hone.gg"
          description="Hone is the free desktop app that optimizes your PC to increase FPS, reduce input lag, and improve network performance."
          href="https://hone.gg"
          icon="hone"
        />
      </div>
    </Container>
  );
}
