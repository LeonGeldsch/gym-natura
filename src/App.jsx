import "./App.css";
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Members from "./components/members/Members";
import Footer from "./components/nav/Footer";
import Programs from "./components/programs/Programs";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Members />
      <Footer />
    </>
  );
}

export default App;
