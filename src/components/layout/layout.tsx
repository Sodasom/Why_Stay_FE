import Banner from "../main/banner";

interface LayoutProps {
  children: React.ReactNode;
  isMain?: boolean;
}

export default function Layout({ children, isMain }: LayoutProps) {
  return (
    <>
      {isMain && <Banner />}
      <div className="px-6">{children}</div>
    </>
  );
}
