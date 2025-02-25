import Link from "next/link";
import InputFild from "../InputFild";
import { Globe, Linkedin, Mail, MapPin, Phone, PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-secondary py-11">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
          {/* Col 1 */}
          <div className="lg:mx-auto text-left p-4">
            <h4 className="text-2xl text-white font-bold  mb-7">
              Get in <span className="text-2xl text-primary">Touch</span>
            </h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="flex items-start gap-3 mb-6">
                <div className="flex justify-center items-center bg-primary w-12 h-12 rounded-md">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block  text-xl text-primary">E-mail</span>
                  <p className="text-sm">ahmed.habib@example.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3 mb-6">
                <div className="flex justify-center items-center bg-primary w-12 h-12 rounded-md">
                  <Linkedin size={20} />
                </div>
                <div>
                  <span className="block  text-xl text-primary">LinkedIn</span>
                  <p className="text-sm">www.ahmedhabibconsulting.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3 mb-6">
                <div className="flex justify-center items-center bg-primary w-12 h-12 rounded-md">
                  <PhoneCall size={20} />
                </div>
                <div>
                  <span className="block  text-xl text-primary">
                    Get a Call
                  </span>
                  <p className="text-sm">+20 123 456 7890</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative p-4 col-span-2">
            <div className="flex flex-col items-start md:items-center mb-10">
              <h2 className="relative text-white text-2xl  md:text-4xl max-w-[600px] text-center mb-10 font-bold">
                Stay
                <span className="text-primary text-2xl  md:text-4xl ml-2">
                  Connected
                </span>
              </h2>
              <InputFild />
            </div>
            <ul className="flex items-start md:items-center justify-between gap-4 flex-col md:flex-row">
              <li className="flex flex-col items-start md:items-center justify-center">
                <MapPin className="mb-2" size={30} />
                <span className="text-sm">Nasr City ,ELserag Mall</span>
              </li>
              <li className="flex flex-col items-start md:items-center justify-center">
                <Globe className="mb-2" size={30} />
                <span className="text-sm">www.ahmedhabibconsulting.com</span>
              </li>
              <li className="flex flex-col items-start md:items-center justify-center">
                <svg
                  className="mb-2"
                  width="28"
                  height="28"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M42.7136 7.27512C40.4097 4.96039 37.6659 3.12504 34.642 1.87604C31.6181 0.627029 28.3746 -0.0106579 25.1005 0.000134737C11.3819 0.000134737 0.201005 11.1251 0.201005 24.7751C0.201005 29.1501 1.35678 33.4 3.51759 37.15L0 50L13.191 46.55C16.8342 48.525 20.9296 49.575 25.1005 49.575C38.8191 49.575 50 38.45 50 24.8001C50 18.1751 47.4121 11.9501 42.7136 7.27512ZM25.1005 45.375C21.3819 45.375 17.7387 44.375 14.5477 42.5L13.794 42.05L5.95477 44.1L8.0402 36.5L7.53769 35.725C5.47122 32.4427 4.37418 28.6482 4.37186 24.7751C4.37186 13.4251 13.6683 4.17512 25.0754 4.17512C30.603 4.17512 35.804 6.32512 39.6985 10.2251C41.6272 12.1348 43.1556 14.4065 44.195 16.9084C45.2345 19.4104 45.7643 22.0928 45.7538 24.8001C45.804 36.15 36.5075 45.375 25.1005 45.375ZM36.4573 29.9751C35.8291 29.6751 32.7638 28.1751 32.2111 27.9501C31.6332 27.7501 31.2312 27.6501 30.804 28.2501C30.3769 28.8751 29.196 30.2751 28.8442 30.6751C28.4925 31.1001 28.1156 31.1501 27.4874 30.8251C26.8593 30.5251 24.8492 29.8501 22.4874 27.7501C20.6281 26.1001 19.397 24.0751 19.0201 23.4501C18.6683 22.8251 18.9698 22.5001 19.2965 22.1751C19.5729 21.9001 19.9246 21.4501 20.2261 21.1001C20.5276 20.7501 20.6533 20.4751 20.8543 20.0751C21.0553 19.6501 20.9548 19.3001 20.804 19.0001C20.6533 18.7001 19.397 15.6501 18.8945 14.4001C18.392 13.2001 17.8643 13.3501 17.4874 13.3251H16.2814C15.8543 13.3251 15.201 13.4751 14.6231 14.1001C14.0703 14.7251 12.4623 16.2251 12.4623 19.2751C12.4623 22.3251 14.6985 25.2751 15 25.6751C15.3015 26.1001 19.397 32.35 25.6281 35.025C27.1105 35.675 28.2663 36.05 29.1709 36.325C30.6533 36.8 32.01 36.725 33.0905 36.575C34.2965 36.4 36.7839 35.075 37.2864 33.625C37.8141 32.175 37.8141 30.9501 37.6382 30.6751C37.4623 30.4001 37.0854 30.2751 36.4573 29.9751Z"
                    fill="#E6E6E6"
                  />
                </svg>

                <span className="text-sm">+20 123 456 7890</span>
              </li>
            </ul>
          </div>
          {/* End Col */}
          <div className="lg:mx-auto text-left p-4">
            <h4 className="text-2xl text-white font-bold  mb-7">
              Quick <span className="text-2xl text-primary">Links</span>
            </h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="flex items-center gap-3 mb-6">
                <Link className="text-lg hover:text-primary" href={"/"}>
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-3 mb-6">
                <Link className="text-lg hover:text-primary" href={"/"}>
                  About
                </Link>
              </li>
              <li className="flex items-center gap-3 mb-6">
                <Link className="text-lg hover:text-primary" href={"/"}>
                  Projects
                </Link>
              </li>
              <li className="flex items-center gap-3 mb-6">
                <Link className="text-lg hover:text-primary" href={"/"}>
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
