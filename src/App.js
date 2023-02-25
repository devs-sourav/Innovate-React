import Navbar from "./components/navbar/Navbar";
import"./all.min.css"
import"./style.css"
import Banner from "./components/banner/Banner";
import Digital from "./components/digital/Digital";
import Work from "./components/work/Work";
import Count from "./components/count/Count";
import Trust from "./components/trust/Trust";
import Customer from "./components/customer/Customer";
import Project from "./components/project/Project";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Digital/>
      <Work/>
      <Count/>
      <Trust/>
      <Customer/>
      <Project/>
      <Footer/>
    </>
  );
}

export default App;
