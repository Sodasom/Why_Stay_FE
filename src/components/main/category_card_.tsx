import { Link } from "react-router-dom";

interface CategoryCardProps {
  href: string;
  icon: JSX.Element;
  title: string;
  hashTag: string[];
  url: string;
}

export default function CategoryCard({
  href,
  icon,
  title,
  hashTag,
  url,
}: CategoryCardProps) {
  return (
    <Link to={href}>
      <div className="p-5 space-y-10">
        <div className="flex space-x-3 items-center">
          <span>{icon}</span>
          <h3 className="text-2xl font-semibold lg:text-3xl">{title}</h3>
        </div>
        <div className="space-x-1 text-sm text-[#a4a4a4] lg:text-base">
          {hashTag.map((hash, index) => (
            <span key={index}>{hash}</span>
          ))}
        </div>
      </div>
      <div className="h-[300px]">
        <img
          className="rounded-b-xl h-full object-cover w-full"
          src={url}
          alt=""
        />
      </div>
    </Link>
  );
}
