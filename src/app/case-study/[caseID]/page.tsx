import NotFoundPage from "@/app/not-found";
import { CasesStudy } from "@/constants/caseStudy.data";
import { Notebook, Snowflake, Swords, User } from "lucide-react";
import { use } from "react";

interface SingleCaseStudyProps {
  params: Promise<{ caseID: string }>;
}

export default function SingleCaseStudy({ params }: SingleCaseStudyProps) {
  const { caseID } = use(params);
  const CaseStudy = CasesStudy.find((CaseStudy) => CaseStudy.id === caseID);
  if (!CaseStudy) return <NotFoundPage />;
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:max-w-[1170px]">
        <div className="mt-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Case{" "}
            <span className="text-3xl md:text-5xl text-primary">Study</span>
          </h1>
          <p className="text-lg md:text-2xl pl-4 h-fit border-l-2 border-l-primary max-w-[500px] ">
            Dr. Ahmed Habib has a proven track record of helping startups and
            SMEs achieve growth
          </p>
        </div>
        <div className="py-16">
          <h1 className="text-3xl md:text-5xl mb-12 ">{CaseStudy.title}</h1>
          <div className="mb-8">
            <div className="flex gap-2 mb-3">
              <User size={25} />
              <span className="text-lg md:text-2xl text-primary">Client</span>
            </div>
            <p className="text-lg md:text-xl">{CaseStudy.clientDetails}</p>
          </div>
          <div className="mb-8">
            <div className="flex gap-2 mb-3">
              <Swords size={25} />
              <span className="text-lg md:text-2xl text-primary">
                Challenge
              </span>
            </div>
            <p className="text-lg md:text-xl">{CaseStudy.challengeDetails}</p>
          </div>
          <div className="mb-8">
            <div className="flex gap-2 mb-3">
              <Snowflake size={25} />
              <span className="text-lg md:text-2xl text-primary">Solution</span>
            </div>
            <ul className="flex flex-col gap-4 list-disc pl-6 md:pl-12">
              {CaseStudy.solution?.map((solution, index) => {
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
              {CaseStudy.results?.map((result, index) => {
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
