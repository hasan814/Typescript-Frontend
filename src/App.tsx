import { Outlet } from "react-router-dom";

import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";

const App = () => {
  return (
    <div className="max-w-[1100px] mx-auto flex flex-col justify-between min-h-screen">
      <Header />
      <main className="px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
