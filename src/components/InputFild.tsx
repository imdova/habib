const InputFild: React.FC = () => {
  return (
    <div className="relative max-w-[400px] lg:w-[500px] bg-gray-100 rounded-2xl shadow-md p-1.5 transition-all duration-150 ease-in-out  hover:shadow-lg">
      <input
        type="text"
        className="w-full pl-8 pr-24 py-3 text-base text-gray-700 bg-transparent rounded-lg focus:outline-none"
        placeholder="Email Address"
      />
      <button className="absolute right-1 top-1 bottom-1 px-6 bg-primary text-white font-medium rounded-xl focus:outline-none ">
        Send Now
      </button>
    </div>
  );
};
export default InputFild;
