import { Exprience } from "@/types";

const ExprienceCard: React.FC<Exprience> = ({ title, list, alpha }) => {
  return (
    <div className="relative bg-gradient-to-b to-50% from-[#ffb3004f] to-[#1e2229] shadow-md rounded-lg p-6  flex flex-col justify-between space-y-4">
      <span className="absolute -top-8 left-3 text-[8rem] opacity-10 text-primary">
        {alpha}
      </span>
      <h1 className="text-xl text-primary font-bold mb-6">{title}</h1>
      <ul className="pl-4 list-disc">
        {list.map((element, index) => {
          return (
            <li key={index} className="mb-2">
              {element}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExprienceCard;
