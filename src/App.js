import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import {Routes, Route} from "react-router-dom";
import BookingPage from './components/BookingPage';
import BookingConfirmation from './components/BookingConfirmation';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/booking' element={<BookingPage />}></Route>
        <Route path='/booking-confirmation' element={<BookingConfirmation />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
