//Dependencies
import Add from "../components/Add";
import CustomizeProducts from "../components/CustomizeProducts";
import ProductImages from "../components/ProductImages";

//SingleProductPage component
const SingleProductPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* INFO */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Product Description: Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Pariatur voluptatum perferendis temporibus. Nesciunt
          officia, explicabo ea dicta ut molestiae magni. Veniam illum hic
          reiciendis esse cupiditate quisquam ducimus ad delectus.
        </p>
        <div className="h-[2px] bg-gray-100"></div>
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through ">$59.99</h3>
          <h2 className="font-medium text-2xl">$49.99</h2>
        </div>
        <div className="h-[2px] bg-gray-100"></div>
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100"></div>
        <div className="text-sm">
          <h4 className=" font-bold mb-4 uppercase">Product Info</h4>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            porro, suscipit labore assumenda dolore dolorem minima nulla iste
            corporis sapiente error eos architecto ipsa cupiditate repellat vel
            natus magni magnam deserunt perferendis repellendus ad! Omnis nulla
            provident unde reiciendis corrupti.
          </p>
        </div>
        <div className="text-sm">
          <h4 className=" font-bold mb-4 uppercase">Return & Refund Policy</h4>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            porro, suscipit labore assumenda dolore dolorem minima nulla iste
            corporis sapiente error eos architecto ipsa cupiditate repellat vel
            natus magni magnam deserunt perferendis repellendus ad! Omnis nulla
            provident unde reiciendis corrupti.
          </p>
        </div>
        <div className="text-sm">
          <h4 className=" font-bold mb-4 uppercase">Shipping</h4>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            porro, suscipit labore assumenda dolore dolorem minima nulla iste
            corporis sapiente error eos architecto ipsa cupiditate repellat vel
            natus magni magnam deserunt perferendis repellendus ad! Omnis nulla
            provident unde reiciendis corrupti.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
