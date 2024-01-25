import Banner from "./Components/Banner/Banner";
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
    </div>
  );
};

export default App;
