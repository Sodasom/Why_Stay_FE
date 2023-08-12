import { Swiper, SwiperSlide } from "swiper/react";
import BedIcon from "../components/icons/bed_icon";
import BusinessIcon from "../components/icons/business_icon";
import FlightIcon from "../components/icons/flight_icon";
import Layout from "../components/layout/layout";
import Search from "../components/layout/search";
import CategoryCard from "../components/main/category_card_";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const SWIPER_OPTIONS = {
  slidesPerView: 1,
};

const BREAKPOINTS = {
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
};

export default function Main() {
  const categoryData = [
    {
      href: `/category/travel`,
      icon: <FlightIcon />,
      title: "여행",
      hashTag: ["#일상탈출", "#욜로"],
      url: "/imgs/travel.jpg",
    },
    {
      href: `/category/business`,
      icon: <BusinessIcon />,
      title: "워캉스",
      hashTag: ["#비지니스", "#미팅룸"],
      url: "/imgs/work.jpg",
    },
    {
      href: `/category/residence`,
      icon: <BedIcon />,
      title: "한달살이",
      hashTag: ["#레지던스", "#장기투숙"],
      url: "/imgs/longStay.jpg",
    },
  ];
  return (
    <Layout isMain>
      <Search />
      <div className="flex flex-col items-center space-y-1 lg:items-start">
        <h2 className="font-semibold lg:text-2xl md:text-xl">내가 묵는 이유</h2>
        <span className="text-xs lg:text-base md:text-sm text-[#999]">
          숙박 목적을 선택해 주세요.
        </span>
      </div>
      <section className="py-5 lg:py-10">
        <Swiper
          {...SWIPER_OPTIONS}
          breakpoints={BREAKPOINTS}
          spaceBetween={30}
          pagination
          modules={[Pagination]}
        >
          {categoryData &&
            categoryData.map((category, index) => (
              <SwiperSlide key={index}>
                <div className="border rounded-xl">
                  <CategoryCard
                    href={category.href}
                    title={category.title}
                    hashTag={category.hashTag}
                    icon={category.icon}
                    url={category.url}
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
      <section className="py-5 lg:py-10">
        <Link
          className="w-full flex text-white rounded-md items-center justify-center text-sm py-2 md:py-3 md:text-base lg:py-4 lg:text-lg bg-[#20b2aa] hover:bg-[#25837e]"
          to={`/category/all`}
        >
          숙소 리스트 전체 보기
        </Link>
      </section>
    </Layout>
  );
}
