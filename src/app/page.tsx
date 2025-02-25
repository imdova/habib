"use client";
import Landing_Img from "@/assets/images/landing-1.png";
import Landing_Img_2 from "@/assets/images/landing-2.png";
import Landing_Img_3 from "@/assets/images/landing-3.png";
import Avatar from "@/assets/images/avatar.png";
import Doutes from "@/assets/images/doute.png";
import Image from "next/image";
import { Download, Globe, Linkedin, Phone, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Button from "@/components/Buttons/Button";
import Mainheading from "@/components/headings/MainHeading";
import ExprienceCard from "@/components/ExprienceCard";
import { ExprienceData } from "@/constants/exprience.data";
import { HelpsData } from "@/constants/helps.data";
import HelpCard from "@/components/HelpCard";

export default function Home() {
  return (
    <>
      {/* Section Landing Page */}
      <section className="relative h-[800px]">
        <Image
          className="absolute bottom-1 left-0 object-cover w-full h-full opacity-20"
          src={Landing_Img}
          alt="Landing Img"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-25% from-[#1e2229] to-[#ffb3001c]"></div>
        <div className="container mx-auto px-6 lg:max-w-[1170px] h-full">
          <div className="relative flex items-center justify-center gap-5  h-full ">
            <div className="flex flex-col items-center  flex-1">
              <Image
                className="w-[180px] h-[180px] md:w-[250px] md:h-[250px] rounded-full object-cover mb-6"
                src={Avatar}
                alt="Landing Img"
              />
              <h1 className="text-3xl lg:text-6xl text-white font-bold mb-6 text-center max-w-[600px]">
                Transforming
                <span className="text-primary text-3xl lg:text-6xl mx-1">
                  Ideas
                </span>
                into Scalable
                <span className="text-primary text-3xl lg:text-6xl mx-1">
                  Success
                </span>
              </h1>
              <p className="text-xl text-white mb-4 text-center max-w-[400px] leading-relaxed">
                <span className="text-primary text-xl">Dr. Ahmed Habib</span>,
                help businesses unlock their full potential through strategy.
              </p>
              <Button
                color="primary"
                variant="contained"
                size="lg"
                icon={<Download size={15} />}
                href="#">
                Consulting Profile
              </Button>
              <ul className="flex items-center gap-6 mt-6 p-5 rounded-xl border bg-[#0000008c]">
                <li>
                  <Link className="block px-3" href={"#"}>
                    <Globe size={18} />
                  </Link>
                </li>
                <li>
                  <Link className="block px-3" href={"#"}>
                    <Linkedin size={18} />
                  </Link>
                </li>
                <li>
                  <Link className="block px-3" href={"#"}>
                    <ShoppingBag size={18} />
                  </Link>
                </li>
                <li>
                  <Link className="block px-3" href={"#"}>
                    <Phone size={18} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Section one */}
      <section className="py-16 bg-gradient-to-r  from-80% from-[#1e2229] to-[#ffb3001e]">
        <div className="container mx-auto px-6 lg:max-w-[1170px]">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex justify-center items-center w-full ">
              <div className="relative w-fit rounded-md ">
                <Image
                  className="relative object-cover w-[350px] h-[450px] rounded-lg  m-auto lg:m-0 z-10 "
                  src={Landing_Img_2}
                  alt="Landing Img"
                />
                <Image
                  className="absolute -bottom-5 -left-5 object-cover  "
                  src={Doutes}
                  alt="Landing Img"
                />
                <div className="absolute -top-4 -right-4 w-full h-full rounded-lg border-2 border-primary"></div>
              </div>
            </div>
            <div className="w-full">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-relaxed">
                Failure is the condiment That Gives
                <span className="text-primary text-3xl lg:text-4xl mx-1">
                  Success
                </span>
              </h1>
              <p className="text-lg mb-6">
                Dr. Ahmed Habib is a seasoned consultant with over a decade of
                experience. By combining his expertise in{" "}
                <b>business strategy</b> and <b>digital transformation</b>, he
                provides holistic solutions that drive innovation, efficiency,
                and sustainable success.
              </p>
              <div className="flex gap-4">
                <Button
                  className="w-[250px] h-[50px]  mb-10"
                  variant="outlined"
                  color="primary"
                  href="/contact-us"
                  size="md">
                  Contact Me
                </Button>
                <Button
                  className="w-[250px] h-[50px] mb-10"
                  color="primary"
                  size="md">
                  Ask for a meeting
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section Two  */}
      <section className="relative lg:max-h-[620px]  pb-16 overflow-hidden  bg-gradient-to-r from-80% from-[#1e2229] to-[#ffb3001e]">
        <div className="container mx-auto px-6 lg:max-w-[1170px]">
          <Image
            className="absolute bottom-1 left-0 object-cover w-full h-full opacity-20"
            src={Landing_Img_3}
            alt="Landing Img"
          />
        </div>
        <div className="relative py-16">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary w-[250px] md:w-[600px] h-[0.5px]"></div>
          <div>
            <div className="container mx-auto px-6 lg:max-w-[1170px]">
              <div className="flex justify-between flex-col md:flex-row mb-12">
                {/* main heading  */}
                <Mainheading
                  bgHeading="My Career"
                  smallHeading="My Experience"
                  mainHeadng={{ sliceOne: "Core ", sliceTwo: "Expertise" }}
                />
                <p className="border-l-2 border-primary text-lg max-w-[400px] pl-3 mt-6 md:mt-0 h-fit">
                  Dr. Habib delivers tailored strategies that align with your
                  unique goals and challenges.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                {ExprienceData.map((exprience, index) => {
                  return (
                    <ExprienceCard
                      key={index}
                      title={exprience.title}
                      list={exprience.list}
                      alpha={exprience.alpha}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section three  */}
      <section className="relative py-16 bg-gradient-to-r from-80% from-[#1e2229] to-[#ffb3001e]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary w-[250px] md:w-[600px] h-[0.5px] "></div>
        <svg
          className=" absolute top-5 left-1/2 -translate-x-1/2"
          width="180"
          height="180"
          viewBox="0 0 274 364"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.1">
            <mask
              id="path-1-outside-1_921_3806"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="274"
              height="364"
              fill="black">
              <rect fill="white" width="274" height="364" />
              <path d="M112.283 236.5C112.283 224.833 114.117 214.5 117.783 205.5C121.783 196.5 126.617 188.5 132.283 181.5C138.283 174.5 144.617 168 151.283 162C157.95 156 164.117 150.333 169.783 145C175.783 139.333 180.617 133.5 184.283 127.5C188.283 121.5 190.283 114.833 190.283 107.5C190.283 95.5 185.283 85.8333 175.283 78.5C165.617 71.1667 152.617 67.5 136.283 67.5C120.617 67.5 106.617 70.8333 94.2832 77.5C81.9499 83.8333 71.7832 92.8333 63.7832 104.5L3.2832 69C16.6165 48.6666 35.1165 32.5 58.7832 20.5C82.4499 8.16666 111.117 1.99999 144.783 1.99999C169.783 1.99999 191.783 5.66665 210.783 13C229.783 20 244.617 30.3333 255.283 44C266.283 57.6667 271.783 74.5 271.783 94.5C271.783 107.5 269.783 119 265.783 129C261.783 139 256.617 147.667 250.283 155C243.95 162.333 237.117 169.167 229.783 175.5C222.783 181.833 216.117 188 209.783 194C203.45 200 198.117 206.333 193.783 213C189.783 219.667 187.783 227.5 187.783 236.5H112.283ZM150.283 362C136.283 362 124.783 357.5 115.783 348.5C106.783 339.5 102.283 328.833 102.283 316.5C102.283 303.833 106.783 293.333 115.783 285C124.783 276.333 136.283 272 150.283 272C164.617 272 176.117 276.333 184.783 285C193.783 293.333 198.283 303.833 198.283 316.5C198.283 328.833 193.783 339.5 184.783 348.5C176.117 357.5 164.617 362 150.283 362Z" />
            </mask>
            <path
              d="M112.283 236.5H110.283V238.5H112.283V236.5ZM117.783 205.5L115.956 204.688L115.943 204.716L115.931 204.745L117.783 205.5ZM132.283 181.5L130.765 180.198L130.746 180.22L130.729 180.242L132.283 181.5ZM169.783 145L171.154 146.456L171.156 146.454L169.783 145ZM184.283 127.5L182.619 126.391L182.597 126.423L182.577 126.457L184.283 127.5ZM175.283 78.5L174.074 80.0934L174.087 80.1032L174.1 80.1128L175.283 78.5ZM94.2832 77.5L95.1968 79.2791L95.2156 79.2694L95.2342 79.2594L94.2832 77.5ZM63.7832 104.5L62.771 106.225L64.3786 107.168L65.4327 105.631L63.7832 104.5ZM3.2832 69L1.61071 67.9033L0.458026 69.6611L2.27103 70.725L3.2832 69ZM58.7832 20.5L59.6877 22.2838L59.6976 22.2788L59.7075 22.2736L58.7832 20.5ZM210.783 13L210.063 14.8658L210.077 14.8713L210.092 14.8767L210.783 13ZM255.283 44L253.707 45.2305L253.716 45.2423L253.725 45.254L255.283 44ZM265.783 129L267.64 129.743L265.783 129ZM250.283 155L248.77 153.693L250.283 155ZM229.783 175.5L228.476 173.986L228.459 174.001L228.441 174.017L229.783 175.5ZM209.783 194L211.159 195.452L209.783 194ZM193.783 213L192.106 211.91L192.087 211.94L192.068 211.971L193.783 213ZM187.783 236.5V238.5H189.783V236.5H187.783ZM115.783 348.5L114.369 349.914L115.783 348.5ZM115.783 285L117.142 286.468L117.156 286.454L117.17 286.441L115.783 285ZM184.783 285L183.369 286.414L183.396 286.441L183.424 286.468L184.783 285ZM184.783 348.5L183.369 347.086L183.356 347.099L183.343 347.113L184.783 348.5ZM114.283 236.5C114.283 225.041 116.084 214.972 119.635 206.255L115.931 204.745C112.149 214.028 110.283 224.625 110.283 236.5H114.283ZM119.611 206.312C123.546 197.457 128.291 189.61 133.838 182.758L130.729 180.242C124.942 187.39 120.02 195.543 115.956 204.688L119.611 206.312ZM133.802 182.802C139.747 175.865 146.02 169.427 152.621 163.487L149.945 160.513C143.213 166.573 136.819 173.135 130.765 180.198L133.802 182.802ZM152.621 163.487C159.297 157.478 165.475 151.801 171.154 146.456L168.412 143.544C162.758 148.865 156.603 154.522 149.945 160.513L152.621 163.487ZM171.156 146.454C177.264 140.686 182.216 134.718 185.99 128.543L182.577 126.457C179.017 132.282 174.303 137.98 168.41 143.546L171.156 146.454ZM185.947 128.609C190.17 122.275 192.283 115.221 192.283 107.5H188.283C188.283 114.446 186.396 120.725 182.619 126.391L185.947 128.609ZM192.283 107.5C192.283 94.8382 186.959 84.5824 176.466 76.8872L174.1 80.1128C183.607 87.0842 188.283 96.1618 188.283 107.5H192.283ZM176.492 76.9066C166.375 69.2314 152.903 65.5 136.283 65.5V69.5C152.33 69.5 164.858 73.1019 174.074 80.0934L176.492 76.9066ZM136.283 65.5C120.324 65.5 105.991 68.8982 93.3322 75.7406L95.2342 79.2594C107.242 72.7685 120.909 69.5 136.283 69.5V65.5ZM93.3696 75.7208C80.7348 82.209 70.3175 91.4343 62.1338 103.369L65.4327 105.631C73.2489 94.2323 83.1649 85.4576 95.1968 79.2791L93.3696 75.7208ZM64.7954 102.775L4.29537 67.275L2.27103 70.725L62.771 106.225L64.7954 102.775ZM4.95569 70.0967C18.0802 50.0818 36.3034 34.1406 59.6877 22.2838L57.8787 18.7162C33.9297 30.8593 15.1529 47.2515 1.61071 67.9033L4.95569 70.0967ZM59.7075 22.2736C83.0238 10.1228 111.356 3.99999 144.783 3.99999V-7.62939e-06C110.877 -7.62939e-06 81.8759 6.21048 57.8589 18.7264L59.7075 22.2736ZM144.783 3.99999C169.591 3.99999 191.339 7.63881 210.063 14.8658L211.503 11.1341C192.228 3.6945 169.975 -7.62939e-06 144.783 -7.62939e-06V3.99999ZM210.092 14.8767C228.802 21.7699 243.305 31.9038 253.707 45.2305L256.86 42.7694C245.928 28.7628 230.764 18.2301 211.475 11.1233L210.092 14.8767ZM253.725 45.254C264.4 58.5162 269.783 74.8889 269.783 94.5H273.783C273.783 74.1111 268.167 56.8171 256.841 42.746L253.725 45.254ZM269.783 94.5C269.783 107.297 267.814 118.537 263.926 128.257L267.64 129.743C271.752 119.463 273.783 107.703 273.783 94.5H269.783ZM263.926 128.257C260 138.074 254.943 146.545 248.77 153.693L251.797 156.307C258.29 148.788 263.567 139.926 267.64 129.743L263.926 128.257ZM248.77 153.693C242.5 160.952 235.736 167.717 228.476 173.986L231.09 177.014C238.498 170.617 245.4 163.714 251.797 156.307L248.77 153.693ZM228.441 174.017C221.431 180.36 214.753 186.537 208.408 192.548L211.159 195.452C217.48 189.463 224.135 183.307 231.125 176.983L228.441 174.017ZM208.408 192.548C201.971 198.646 196.533 205.099 192.106 211.91L195.46 214.09C199.7 207.567 204.929 201.354 211.159 195.452L208.408 192.548ZM192.068 211.971C187.854 218.995 185.783 227.196 185.783 236.5H189.783C189.783 227.804 191.712 220.339 195.498 214.029L192.068 211.971ZM187.783 234.5H112.283V238.5H187.783V234.5ZM150.283 360C136.755 360 125.783 355.671 117.197 347.086L114.369 349.914C123.783 359.329 135.811 364 150.283 364V360ZM117.197 347.086C108.559 338.447 104.283 328.284 104.283 316.5H100.283C100.283 329.382 105.007 340.553 114.369 349.914L117.197 347.086ZM104.283 316.5C104.283 304.37 108.566 294.409 117.142 286.468L114.424 283.532C105.001 292.258 100.283 303.297 100.283 316.5H104.283ZM117.17 286.441C125.752 278.177 136.733 274 150.283 274V270C135.834 270 123.815 274.489 114.396 283.559L117.17 286.441ZM150.283 274C164.183 274 175.141 278.186 183.369 286.414L186.197 283.586C177.092 274.481 165.05 270 150.283 270V274ZM183.424 286.468C192.001 294.409 196.283 304.37 196.283 316.5H200.283C200.283 303.297 195.566 292.258 186.142 283.532L183.424 286.468ZM196.283 316.5C196.283 328.284 192.007 338.447 183.369 347.086L186.197 349.914C195.559 340.553 200.283 329.382 200.283 316.5H196.283ZM183.343 347.113C175.109 355.662 164.16 360 150.283 360V364C165.073 364 177.124 359.338 186.224 349.887L183.343 347.113Z"
              fill="#FFB200"
              mask="url(#path-1-outside-1_921_3806)"
            />
          </g>
        </svg>
        <div className="container mx-auto px-6 lg:max-w-[1170px]">
          <div className="flex flex-col items-center mb-12">
            <h1 className="text-4xl text-primary font-bold mb-3">How?</h1>
            <p className="text-lg">
              Dr. Ahmed Habib Helps Startups and SMEs Grow and Scale
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {HelpsData.map((help, index) => {
              return (
                <HelpCard
                  key={index}
                  title={help.title}
                  list={help.list}
                  icon={help.icon}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* sction four  */}
      <section className="relative py-16 bg-gradient-to-r from-80% from-[#1e2229] to-[#ffb3001e]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary w-[250px] md:w-[600px] h-[0.5px] "></div>
        <div className="container mx-auto px-6 lg:max-w-[1170px]">
          <div className="flex justify-between flex-col md:flex-row mb-12">
            {/* main heading  */}
            <Mainheading
              bgHeading="Cooperation"
              smallHeading="Why?"
              mainHeadng={{
                sliceOne: "Work With ",
                sliceTwo: "Dr.Ahmed Habib",
              }}
            />
            <p className="border-l-2 border-primary text-lg max-w-[400px] pl-3 mt-6 md:mt-0 h-fit">
              Dr. Habib delivers tailored strategies that align with your unique
              goals and challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
            <div className="relative p-6">
              <span className="absolute -top-2 -left-2 text-7xl opacity-5">
                01
              </span>
              <h1 className="text-3xl text-primary font-bold">
                Proven Results
              </h1>
              <p className="text-lg ">
                A track record of delivering measurable outcomes for startups
                and SMEs.
              </p>
            </div>
            <div className="relative p-6">
              <span className="absolute -top-2 -left-2 text-7xl opacity-5">
                02
              </span>
              <h1 className="text-3xl text-primary font-bold">
                Holistic Approach
              </h1>
              <p className="text-lg ">
                Combining business strategy with digital innovation to drive
                growth.
              </p>
            </div>
            <div className="relative p-6">
              <span className="absolute -top-2 -left-2 text-7xl opacity-5">
                03
              </span>
              <h1 className="text-3xl text-primary font-bold">
                Tailored Solutions
              </h1>
              <p className="text-lg ">
                A track record of delivering measurable outcomes for startups
                and SMEs.
              </p>
            </div>
            <div className="relative p-6">
              <span className="absolute -top-2 -left-2 text-7xl opacity-5">
                04
              </span>
              <h1 className="text-3xl text-primary font-bold">
                End-to-End Support
              </h1>
              <p className="text-lg ">
                From ideation to execution, Dr. Habib provides comprehensive
                support to ensure your success
              </p>
            </div>
          </div>
          <div className="relative flex flex-col items-center py-16">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary w-[250px] md:w-[600px] h-[0.5px] "></div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-center">
              Let's Transform{" "}
              <span className="text-3xl lg:text-5xl  text-primary">
                Your Business
              </span>
            </h2>
            <p className="text-lg max-w-[600px] text-center">
              Whether you're a startup looking to scale or an SME aiming to
              optimize operations, Dr. Ahmed Habib can help you achieve your
              goals. Contact him today to schedule a consultation and take the
              first step toward sustainable growth.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
