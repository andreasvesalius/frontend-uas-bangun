import NavBar from './components/NavBar';
import Sitou from './components/Sitou';
import DestiNasi from './components/DestiNasi';
import TopPic from './components/TopPic';
import Footer from './components/Footer';

// const rowOne = [
//   {
//     logo : "Manjo Pasiar",
//     nav1 : "Home",
//     nav : "About Us",
//  },
// ]

function App() {
  return (
    <div className='w-full h-full'>
      <NavBar/>
      <TopPic/>
      <DestiNasi/>
      <Sitou/>
      <Footer/>
    </div>
  );
}

export default App;
