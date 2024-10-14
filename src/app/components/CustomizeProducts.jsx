//Dependencies

//CustomizeProducts
const CustomizeProducts = () => {
  return (
    <div className="flex flex-col gap-8">
      <h4 className="font-medium">Choose Color</h4>
      <ul className="flex items-center gap-6">
        <li className="w-10 h-10 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
          <div className="absolute w-12 h-12 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
        <li className="w-10 h-10 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500">
          <div className="absolute w-12 h-12 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
        <li className="w-10 h-10 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-green-500">
          <div className="absolute w-12 h-12 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
        <li className="w-10 h-10 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-yellow-500">
          <div className="absolute w-12 h-[2px] bg-gray-300 -rotate-45 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
      </ul>
      <h4 className="font-medium">Choose Size</h4>
      <ul className="flex items-center gap-3">
        <li className=" ring-1 ring-ayon text-ayon  rounded-md py-1 px-4 text-xl font-semibold cursor-pointer">
          S
        </li>
        <li className=" ring-1 ring-ayon text-white bg-ayon rounded-md py-1 px-4 text-xl font-semibold cursor-pointer">
          M
        </li>
        <li className=" ring-1 ring-pink-200  text-white bg-pink-200  rounded-md py-1 px-4 text-xl font-semibold cursor-pointer">
          L
        </li>
      </ul>
    </div>
  );
};

export default CustomizeProducts;
