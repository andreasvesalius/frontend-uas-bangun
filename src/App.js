import { Routes, Route } from "react-router-dom";
import Beranda from'./pages/Beranda';
import DetailWisata from './pages/detailWisata';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/detailWisata" element={<DetailWisata />} />
    </Routes>
  );
}

export default App;
