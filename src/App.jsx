
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MasteringSellingMachineCongratulations from './assets/Selling-Machine-Page/MasteringSellingMachineCongratulations'
import SellingMachineWelcome from './assets/Selling-Machine-Page/sellingMachineWelcome'

function App() {


  return (
    <div style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>
    <Routes>
    <Route path="/" element={<SellingMachineWelcome />} />
    <Route path="/msm-congratulations" element={<MasteringSellingMachineCongratulations/>} />
    </Routes>     
    </div>
  )
}

export default App
