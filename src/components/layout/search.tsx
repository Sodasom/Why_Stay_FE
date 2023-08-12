import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../icons/search_icon";

export default function Search() {
  const navigate = useNavigate();
  const [userValue, setUserValue] = useState<string>("");

  const handleUserValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserValue(e.target.value);
  };

  const handleNavigate = () => {
    navigate(`/search?search=${userValue}`, { state: userValue });
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleNavigate();
    }
  };
  return (
    <form className="relative w-3/4 mx-auto flex items-center justify-end py-10 md:py-12 lg:py-16">
      <input
        type="text"
        placeholder="원하는 숙소명을 검색해주세요."
        value={userValue}
        onChange={handleUserValue}
        onKeyDown={handleOnKeyDown}
        className="w-full p-2 md:p-3 lg:p-4 placeholder:text-xs placeholder:md:text-sm placeholder:lg:text-base rounded-xl border text-xs placeholder:text-center focus:placeholder:text-transparent"
      />
      <div className="absolute right-2" onClick={handleNavigate}>
        <SearchIcon />
      </div>
    </form>
  );
}
