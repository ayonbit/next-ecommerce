"use client";
//Dependencies
import Image from "next/image";
import { useRouter } from "next/navigation";

//SearchBar
const SearchBar = () => {
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const search = formData.get("search");
    if (search) {
      router.push(`/list?search=${search}`);
    }
  };
  return (
    <form
      className="flex ic justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1 "
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="search"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <Image src="/search.png" alt="search" width={16} height={16} />
      </button>
    </form>
  );
};

export default SearchBar;
