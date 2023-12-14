import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import {Routes, Route} from "react-router-dom";
import BookingPage from './components/BookingPage';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/booking' element={<BookingPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
