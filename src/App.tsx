import { Outlet } from "react-router-dom";

import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";

const App = () => {
  return (
    <div className="">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
