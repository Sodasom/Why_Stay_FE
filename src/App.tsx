import { Outlet } from "react-router-dom";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

function App() {
  return (
    <div className="mx-auto min-w-[375px] max-w-[2560px]">
      <Header />
      <div className="pt-[50px] lg:pt-[80px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
