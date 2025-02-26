import { projectType } from "@/types";
import Image from "next/image";
import Button from "./Buttons/Button";
import { CircleChevronRight, Share2 } from "lucide-react";

const ProjectCard: React.FC<projectType> = ({
  id,
  title,
  name,
  client,
  challenge,
  image,
}) => {
  return (
    <div className="relative flex flex-col justify-between shadow-md border rounded-lg p-6 bg-[#A7C6FF1A] ">
      <div className="mb-4">
        <Image
          className="object-cover w-full h-[180px] rounded-md"
          src={image}
          alt="project image"
          width={300}
          height={300}
        />
      </div>
      <h2 className="text-xl font-semibold mb-3">
        {title}
        <span className="text-xl text-primary ml-1">{name}</span>
      </h2>
      <div>
        <p className="text-lg font-medium">
          <span className="text-lg text-primary">Client: </span>
          {client}
        </p>
        <p className="text-lg font-medium">
          <span className="text-lg text-primary">Challenge: </span>
          {challenge}
        </p>
      </div>
      <div className="flex justify-between items-center mt-6">
        <Button
          variant="contained"
          icon={<CircleChevronRight size={18} />}
          href={`/projects/${id}`}>
          Explore Full Project
        </Button>
        <button className="hover:text-primary link-smooth">
          <Share2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
