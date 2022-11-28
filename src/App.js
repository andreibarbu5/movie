import Hero from "./components/Hero";
import LeftSide from "./components/LeftSide";
import Navbar from "./components/Navbar";
import Originals from "./components/Originals";

function App() {
  return (
    <div className="flex bg-slate-900">
      <div className="hidden xl:flex">
        {/* Left Side */}
        <LeftSide />
      </div>

      <div className="w-full xl:w-[85vw] py-3 px-6">
        {/* Navbar */}
        <Navbar />
        {/* Hero */}
        <Hero />
        {/* Originals */}
        <Originals />
        {/* Popular */}
        {/* Footer */}
      </div>

      <div className="h-screen"></div>
    </div>
  );
}

export default App;
