import Banner from "./Components/Banner/Banner";
import CertificationAndCalibration from "./Components/CertificationAndCalibration/CertificationAndCalibration";
import Navbar from "./Components/Navbar/Navbar";
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
    </div>
  );
};

export default App;
