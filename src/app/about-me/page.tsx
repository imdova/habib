import MainHeading from "@/components/headings/MainHeading";
import Landing_Img_2 from "@/assets/images/landing-2.png";
import Effect from "@/assets/images/effect.png";
import Image from "next/image";
import { GraduationCap, Sparkle, University } from "lucide-react";
import ExperienceContent from "@/components/ExperienceContent";
export default function AboutMe() {
  return (
    <>
      {/*Landing section*/}
      <section className="relative h-[1000px] md:h-[800px] ">
        <Image
          className="absolute top-20 right-20 object-cover w-[100px] opacity-40 "
          src={Effect}
          alt="Landing Img"
        />
        <div className="container mx-auto px-6 lg:max-w-[1170px] h-full">
          <div className="relative flex items-center justify-center gap-5  h-full ">
            <div className="flex items-center w-full pt-12 md:pt-0">
              <div>
                <MainHeading
                  bgHeading="Who Am I"
                  smallHeading="Get to Know Me"
                  mainHeadng={{ sliceOne: "About Me ", sliceTwo: "" }}
                />

                <div className="flex justify-center flex-col md:flex-row  w-full gap-16 mt-12">
                  <div className="relative w-fit rounded-md  m-auto lg:m-0 ">
                    <Image
                      className="relative object-cover w-[350px] h-[350px] rounded-lg z-10 "
                      src={Landing_Img_2}
                      alt="Landing Img"
                    />
                    <Image
                      className="absolute -bottom-16 -left-16 object-cover opacity-40"
                      src={Effect}
                      alt="Landing Img"
                    />
                    <div className="absolute -top-4 -right-4 w-full h-full rounded-lg border-2 border-primary"></div>
                  </div>
                  <ul className="w-full  border-l-4 border-primary pl-6 h-fit">
                    <li className="text-lg md:text-xl mb-4 pb-4">
                      - Dr. Ahmed Habib is a dynamic entrepreneur and seasoned
                      business consultant with over a decade of experience in
                      driving organizational growth, innovation, and operational
                      excellence.
                    </li>
                    <li className="text-lg md:text-xl mb-4 py-4">
                      - With a proven track record of delivering strategic
                      solutions, Dr. Habib has helped startups, SMEs, and large
                      corporations achieve sustainable success in competitive
                      markets. 
                    </li>
                    <li className="text-lg md:text-xl mb-4 py-4">
                      - His expertise spans business strategy, market expansion,
                      digital transformation and leadership development
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section one */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:max-w-[1170px] h-full">
          <h2 className="text-3xl lg:text-5xl font-bold mb-12">
            Key{" "}
            <span className="text-3xl lg:text-5xl  text-primary">
              Achievements
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-3 p-3 border rounded-lg bg-[#48494D33]">
              <div className="flex justify-between items-center">
                <span>Recognized as</span>
                <Sparkle className="text-primary" size={25} />
              </div>
              <h2 className="text-xl font-bold">
                Top Business Consultant 2022
              </h2>
              <p className="text-primary">
                -by Global Business Leaders Magazine.
              </p>
            </div>
            <div className="flex flex-col gap-3 p-3 border rounded-lg bg-[#48494D33]">
              <div className="flex justify-between items-center">
                <span>Authored</span>
                <Sparkle className="text-primary" size={25} />
              </div>
              <h2 className="text-xl font-bold">
                A Guide for Entrepreneurs in Emerging Markets
              </h2>
              <p className="text-primary">
                -a best-selling book on business growth strategies.
              </p>
            </div>
            <div className="flex flex-col gap-3 p-3 border rounded-lg bg-[#48494D33]">
              <div className="flex justify-between items-center">
                <span>Spearheaded a $5M</span>
                <Sparkle className="text-primary" size={25} />
              </div>
              <h2 className="text-xl font-bold">
                Digital transformation project
              </h2>
              <p className="text-primary">
                -for a retail conglomerate, increasing operational efficiency by
                40%.
              </p>
            </div>
            <div className="flex flex-col gap-3 p-3 border rounded-lg bg-[#48494D33]">
              <div className="flex justify-between items-center">
                <span>Mentored 100+</span>
                <Sparkle className="text-primary" size={25} />
              </div>
              <h2 className="text-xl font-bold">
                entrepreneurs through accelerator programs
              </h2>
              <p className="text-primary">
                -helping them secure over $15M in funding.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* section Two */}
      <section className="relative py-16">
        <Image
          className="absolute top-0 left-12 object-cover w-[150px] opacity-40 "
          src={Effect}
          alt="Landing Img"
        />
        <Image
          className="absolute bottom-0 right-12 object-cover w-[80px] opacity-40 "
          src={Effect}
          alt="Landing Img"
        />
        <div className="container mx-auto px-6 lg:max-w-[1170px] h-full">
          <h2 className="relative text-3xl lg:text-5xl font-bold mb-12 m-auto border-b border-secondary-light w-fit pb-6 before:absolute before:h-[1px] before:w-[150px] before:bottom-0 before:bg-primary before:left-1/2 before:-translate-x-1/2">
            Core{" "}
            <span className="text-3xl lg:text-5xl text-primary">
              Competencies
            </span>
          </h2>
          <ExperienceContent />
        </div>
      </section>
      {/* section Three */}
      <section className="relative py-16">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-20% from-[#1e2229] to-[#ffb3001c]"></div>
        <div className="relative container mx-auto px-6 lg:max-w-[1170px] h-full">
          <h2 className="relative text-3xl lg:text-5xl font-bold mb-12 m-auto border-b border-secondary-light w-fit pb-6 before:absolute before:h-[1px] before:w-[80px] before:bottom-0 before:bg-primary before:left-1/2 before:-translate-x-1/2">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col items-center gap-3 p-4 border rounded-lg bg-[#48494D33]">
              <div>
                <University className="text-primary" size={40} />
              </div>
              <h2 className="text-xl text-primary text-center font-semibold">
                Doctorate of Business Administration
              </h2>
              <p>(DBA - Strategic Management)</p>
              <p className="text-center ">
                Arab Academy for Science, Technology and Maritime Transport,
                Egypt
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 border rounded-lg bg-[#48494D33]">
              <div>
                <University className="text-primary" size={40} />
              </div>
              <h2 className="text-xl text-primary text-center font-semibold">
                Master of Business Administration
              </h2>
              <p>(MBA - Strategic Management)</p>
              <p className="text-center ">
                Arab Academy for Science, Technology and Maritime Transport,
                Egypt
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 border rounded-lg bg-[#48494D33]">
              <div>
                <GraduationCap className="text-primary" size={40} />
              </div>
              <h2 className="text-xl text-primary text-center font-semibold">
                Bachelor of Science in Business Administration
              </h2>
              <p className="text-center ">
                Bachelor of Science in Business Administration
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
