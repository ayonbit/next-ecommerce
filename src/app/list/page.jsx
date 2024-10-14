//Dependencies
import Image from "next/image";
import Filter from "../components/Filter";
import ProductList from "../components/ProductList";
//List Page
const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        {/* left image */}
        <div className="relative w-1/3 ">
          <Image
            src="/woman.png"
            alt="women"
            fill
            className="object-contain transform scale-x-[-1] "
          />
        </div>
        {/* offer text */}
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[46px] text-gray-700">
            Grab Up to 50% off on Selected Products
          </h1>
          <button className="rounded-3xl bg-ayon  text-white w-max py-3 px-5 text-sm ">
            Buy Now
          </button>
        </div>

        {/* right image */}
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="women" fill className="object-contain" />
        </div>
      </div>
      {/* Filter */}
      <Filter />

      {/* PRODUCT */}
      <h1 className="mt-12 text-xl font-semibold">Product For you</h1>
      <ProductList />
      <h1 className="mt-12 text-xl font-semibold">Popular Products</h1>
      <ProductList />
    </div>
  );
};

export default ListPage;
