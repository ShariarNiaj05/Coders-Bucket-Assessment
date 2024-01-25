import Banner from "./Components/Banner/Banner";
import CertificationAndCalibration from "./Components/CertificationAndCalibration/CertificationAndCalibration";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import QuickLinks from "./Components/QuickLinks/QuickLinks";
import SafetyShop from "./Components/SafetyShop/SafetyShop";

const App = () => {
  return (
    <div className=" min-h-screen">
      <Navbar />
      <Banner></Banner>
      <SafetyShop></SafetyShop>
      <QuickLinks></QuickLinks>
      <CertificationAndCalibration></CertificationAndCalibration>
      {/* <Products></Products> */}
      <Footer></Footer>
    </div>
  );
};

export default App;
