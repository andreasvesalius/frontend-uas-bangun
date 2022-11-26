import NavBar from './components/NavBar';
import Sitou from './components/Sitou';
import TopPic from './components/TopPic';

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
    </div>
  );
}

export default App;
