import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from'./pages/Beranda';
import DetailWisata from './pages/DetailWisata';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/detailwisata/:id" element={<DetailWisata />} />
    </Routes>
  );
}

export default App;
