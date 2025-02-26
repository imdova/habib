import NotFoundPage from "@/app/not-found";
import { projects } from "@/constants/projects.data";
import { Notebook, Snowflake, Swords, User } from "lucide-react";
import { use } from "react";

interface SingleProjectProps {
  params: Promise<{ projectID: string }>;
}

export default function SingleProject({ params }: SingleProjectProps) {
  const { projectID } = use(params);
  const Project = projects.find((project) => project.id === projectID);
  if (!Project) return <NotFoundPage />;

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:max-w-[1170px]">
        <div className="mt-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Business{" "}
            <span className="text-3xl md:text-5xl text-primary">
              Consultant
            </span>
          </h1>
          <p className="text-lg md:text-2xl pl-4 h-fit border-l-2 border-l-primary max-w-[500px] ">
            Previous Projects as a Business and Digital Transformation
            Consultant
          </p>
        </div>
        <div className="py-16">
          <h1 className="text-3xl md:text-5xl mb-12 ">
            {Project.title} {Project.name}
          </h1>
          <div className="mb-8">
            <div className="flex gap-2 mb-3">
              <User size={25} />
              <span className="text-lg md:text-2xl text-primary">Client</span>
            </div>
            <p className="text-lg md:text-xl">{Project.clientDetails}</p>
          </div>
          <div className="mb-8">
            <div className="flex gap-2 mb-3">
              <Swords size={25} />
              <span className="text-lg md:text-2xl text-primary">
                Challenge
              </span>
            </div>
            <p className="text-lg md:text-xl">{Project.challengeDetails}</p>
          </div>
          <div className="mb-8">
            <div className="flex gap-2 mb-3">
              <Snowflake size={25} />
              <span className="text-lg md:text-2xl text-primary">Solution</span>
            </div>
            <ul className="flex flex-col gap-4 list-disc pl-6 md:pl-12">
              {Project.solution?.map((solution, index) => {
                return (
                  <li className="text-sm md:text-xl" key={index}>
                    {solution}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mb-8">
            <div className="flex gap-2 mb-3">
              <Notebook size={25} />
              <span className="text-lg md:text-2xl text-primary">Results</span>
            </div>
            <ul className="flex flex-col gap-4 list-disc pl-6 md:pl-12">
              {Project.results?.map((result, index) => {
                return (
                  <li className="text-sm md:text-xl" key={index}>
                    {result}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
