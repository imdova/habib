import { helps } from "@/types";

const HelpCard: React.FC<helps> = ({ title, list, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center gap-3 p-4 rounded-lg border">
      <div className="flex justify-center items-center w-24 h-24 ">
        {Icon && <Icon size={40} />}
      </div>
      <h2 className="text-primary font-bold text-2xl">{title}</h2>
      <ul className="pl-3 list-disc ">
        {list.map((elelment, index) => {
          return (
            <li key={index} className="mb-2">
              {elelment}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HelpCard;
