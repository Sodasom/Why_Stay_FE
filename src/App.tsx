import { Outlet } from "react-router-dom";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

function App() {
  return (
    <div className="mx-auto min-w-[375px] max-w-[2560px] flex flex-col h-screen">
      <Header />
      <div className="pt-[50px] lg:pt-[80px] flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
