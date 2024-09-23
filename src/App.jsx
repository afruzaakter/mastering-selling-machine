import { Route, Routes } from "react-router-dom";
import MasteringSellingMachineCongratulations from "./components/MasteringSellingMachineCongratulations";
import SellingMachineWelcome from "./components/SellingMachineWelcome";
import WebinarVideo from "./components/WebinarVideo";
import LiveVideoPlayer from "./components/LiveVideoPlayer";

function App() {
  return (
    <div style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
      <Routes>
        <Route path="/" element={<SellingMachineWelcome />} />
        <Route
          path="/msm-congratulations"
          element={<MasteringSellingMachineCongratulations />}
        />
        <Route path="/webiner" element={<WebinarVideo />} />
        {/* razu molla  */}
        <Route path="/live" element={<LiveVideoPlayer />} />
      </Routes>
    </div>
  );
}

export default App;
