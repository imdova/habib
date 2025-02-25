import { Urbanist } from "next/font/google";

const urbanistSans = Urbanist({
  variable: "--font-urbanist-sans",
  subsets: ["latin"],
});
type HeadingProps = {
  bgHeading: string;
  smallHeading: string;
  mainHeadng: {
    sliceOne: string;
    sliceTwo: string;
  };
};
const MainHeading: React.FC<HeadingProps> = ({
  bgHeading,
  smallHeading,
  mainHeadng,
}) => {
  return (
    <div className="relative min-w-[250px] lg:min-w-[400px]">
      <div
        className={`absolute -top-5 ${urbanistSans.variable} text-secondary text-5xl lg:text-7xl font-bold  opacity-5`}
        style={{
          textShadow:
            "1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white",
        }}>
        {bgHeading}
      </div>
      <h2 className="text-xl">{smallHeading}</h2>
      <h1 className="text-3xl lg:text-5xl font-bold max-w-[400px]">
        {mainHeadng.sliceOne}{" "}
        <span className="text-3xl lg:text-5xl  text-primary ">
          {mainHeadng.sliceTwo}
        </span>
      </h1>
    </div>
  );
};

export default MainHeading;
