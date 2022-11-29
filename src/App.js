import NavBar from './components/NavBar';
import Sitou from './components/Sitou';
import DestiNasi from './components/DestiNasi';
import TopPic from './components/TopPic';
import Footer from './components/Footer';
import View from './assets/view.png';

const imgHome = [
  {
    img : View,
    destinasi : "Destinasi 1",
 },
  {
    img : View,
    destinasi : "Destinasi 2",
 },
  {
    img : View,
    destinasi : "Destinasi 3",
 },
  {
    img : View,
    destinasi : "Destinasi 4",
 },
]

function App() {
  return (
    <div className='w-full h-full '>
      <NavBar/>
      <TopPic/>
      <div className="rounded-xl m-1 py-1 pl-2 font-semibold text-[17px] md:text-[23px]">
        <h1>Destinasi Wisata di Kota Manado</h1>
      </div>
      <div className="md:grid md:grid-cols-2">
        {imgHome.map((data) => (
          <DestiNasi img={data.img} destinasi={data.destinasi}/>
        ))}
      </div>
      <Sitou/>
      <Footer/>
    </div>
  );
}

export default App;
