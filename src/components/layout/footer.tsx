export default function Footer() {
  return (
    <footer className="bg-[#4a4a4a] text-white text-xs p-5 flex lg:text-base flex-shrink-0">
      <div className="flex flex-col space-y-10">
        <span>@ 2023 Team_16</span>
        <span className="text-[#a4a4a4]">
          Copyright 2023. 왜가? all rights reserved.
        </span>
      </div>
      <div className="border border-[#a4a4a4] w-[1px] mx-3" />
      <div className="space-x-5 flex text-[#a4a4a4]">
        <div className="flex flex-col">
          <span className="text-white mb-2">Front Engineer</span>
          <span>박현석</span>
          <span>소다솜</span>
          <span>안다빈</span>
        </div>
        <div className="flex flex-col">
          <span className="text-white mb-2">Back Engineer</span>
          <span>김신형</span>
          <span>이호세아</span>
          <span>박종식</span>
        </div>
      </div>
    </footer>
  );
}
