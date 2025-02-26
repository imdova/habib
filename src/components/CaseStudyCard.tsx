import { CaseStudyType } from "@/types";
import Button from "./Buttons/Button";
import { CircleChevronRight, Share2 } from "lucide-react";

const CaseStudyCard: React.FC<CaseStudyType> = ({
  id,
  title,
  client,
  challenge,
}) => {
  return (
    <div className="relative flex flex-col justify-between shadow-md border rounded-lg p-6 bg-[#A7C6FF1A] ">
      <h2 className="text-xl font-bold mb-3 h-[60px] ">{title}</h2>
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
          href={`/case-study/${id}`}>
          Explore Case Study
        </Button>
        <button className="hover:text-primary link-smooth">
          <Share2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CaseStudyCard;
