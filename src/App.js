import "./App.css";
import Menubar from "./components/Menubar";
import Products from "./components/Products";
import Banner from "./components/Banner";
import BestElectronics from "./components/BestElectronics";
import BeautyFoodsToys from "./components/BeautyFoodsToys";
import SportsHealthCare from "./components/SportsHealthCare";
import Suggest from "./components/Suggest";
import TopSellings from "./components/TopSellings";
import TopStories from "./components/TopStories";

function App() {
  return (
    <>
      <Menubar />
      <Products />
      <Banner />
      <BestElectronics />
      <BeautyFoodsToys />
      <SportsHealthCare />
      <Suggest />
      <TopSellings />
      <TopStories />
    </>
  );
}

export default App;
