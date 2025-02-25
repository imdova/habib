"use client";
import { commonLinks } from "@/constants/header";
import useScrollDetection from "@/hooks/useScrollDetection";
import { BaseHeaderProps } from "@/types";
import { isCurrentPage } from "@/util";
import Link from "next/link";
import { useState } from "react";
import Button from "../Buttons/Button";
const FullHeader: React.FC<BaseHeaderProps> = ({ pathname }) => {
  const isScrolled = useScrollDetection();
  const [isActive, setIsActive] = useState(false);

  return (
    <header
      className={`${
        isScrolled ? "shadow-xl " : ""
      } bg-secondary left-0 top-0 fixed z-50 w-full transition-all  duration-300`}>
      <div className="absolute overflow-hidden h-24"></div>
      <div className="container mx-auto px-6 lg:max-w-[1170px]">
        <div className="flex h-[70px] justify-between items-center">
          <div className="flex gap-3 items-center">
            <Link className="relative" href="/">
              <ul className="flex gap-2 items-center text-white font-bold">
                <li className="text-lg first-letter:text-primary">Ahmed</li>
                <li className="text-lg first-letter:text-primary">Habib</li>
              </ul>
            </Link>
          </div>
          <div className="hidden text-main items-center space-x-4 lg:space-x-8  md:flex text-white ">
            {commonLinks.map((link) => {
              const isPage = isCurrentPage(pathname, link.url);
              return (
                <Link
                  key={link.title}
                  href={link.url}
                  className={`font-medium capitalize link-smooth hover:text-primary  ${
                    isScrolled
                      ? isPage
                        ? "text-primary"
                        : "text-white hover:text-primary "
                      : isPage
                      ? "text-primary"
                      : ""
                  }  `}>
                  {link.title}
                </Link>
              );
            })}
          </div>
          <div className="hidden md:flex items-center gap-3 ">
            <Button
              variant="outlined"
              color="primary"
              size="md"
              href="/contact-us">
              Contact Me
            </Button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() =>
                isActive ? setIsActive(false) : setIsActive(true)
              }
              className=" group h-6 w-6">
              <div className="grid justify-items-center gap-1.5">
                <span
                  className={`h-[2px] w-full rounded-full bg-white transition ${
                    isActive ? " rotate-45 translate-y-2.5" : ""
                  }`}></span>
                <span
                  className={`h-[2px] w-full rounded-full bg-white  ${
                    isActive ? "scale-x-0" : ""
                  } transition`}></span>
                <span
                  className={`h-[2px] w-full rounded-full bg-white ${
                    isActive ? "-rotate-[40deg] -translate-y-[7px]" : ""
                  } `}></span>
              </div>
            </button>
          </div>
        </div>
        <div
          className={`absolute top-full left-0 md:hidden flex-col p-4 shadow-lg w-full overflow-hidden bg-secondary text-black ${
            isActive ? "flex animate-fadeInDown" : "hidden"
          }`}>
          {commonLinks.map((link) => {
            const isPage = isCurrentPage(pathname, link.url);
            return (
              <Link
                key={link.title}
                href={link.url}
                className={`font-medium capitalize rounded-md link-smooth p-3 mb-2 text-white${
                  isPage ? "bg-primary text-white" : ""
                } ${
                  isScrolled
                    ? "hover:bg-primary hover:text-white"
                    : "hover:bg-primary"
                }   `}>
                {link.title}
              </Link>
            );
          })}
          <div className="flex items-center gap-3 mt-8">
            <Button
              variant="contained"
              className="w-full"
              color="primary"
              size="md"
              href="/contact-us">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FullHeader;
