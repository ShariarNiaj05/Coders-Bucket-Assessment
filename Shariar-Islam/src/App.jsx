import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import SafetyShop from "./Components/SafetyShop/SafetyShop";

const App = () => {
  return (
    <div className=" min-h-screen">
      <Navbar />
      <Banner></Banner>
      <SafetyShop></SafetyShop>
    </div>
  );
};

export default App;
