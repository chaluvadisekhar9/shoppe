import "./App.css";
import Banner from "./components/Banner";
import BrandOfWeek from "./components/BrandOfWeek";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Footernav from "./components/Footernav";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Promotions from "./components/Promotions";

function App() {
  return (
    <div className="container-fluid p-0">
      <div className="row myClass">
        <Banner />
      </div>
      <div className="">
        <div>
          <Header />
        </div>
        <div>
          <Navbar />
        </div>
        <hr className="m-0 p-0"></hr>
        <div>
          <Promotions />
        </div>
      </div>
      <div className="offset-md-1 col-md-10 px-0 mf-0 d-flex">
        <BrandOfWeek />
      </div>
      <div className="offset-md-1 col-md-10 px-0 py-3 mf-0 d-flex justify-content-around">
        <Cards />
      </div>
      <div>
        <Footernav/>
      </div>
      <div className="col-md-12 myClass">
        <Footer />
      </div>
    </div>
  );
}

export default App;
