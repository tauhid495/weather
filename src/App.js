
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './pages/Footer';

import Home from './pages/Home';


function App() {

  const handleSearch = (event) => {
    event.preventDefault();
    const searchCity = event.target.name.value;
    // console.log(searchCity);
    setFindCity(searchCity);
  }
  const [findCity, setFindCity] = useState(null);

  return (

    <div className="bg-[url('/src/asset/20.jpg')] bg-cover scrollbar-hide">
      <Navbar handleSearch={handleSearch}>
        <Routes>
          <Route path='/' element={<Home findCity={findCity} />} />
        </Routes>
        <Footer />
      </Navbar>
    </div>

  );
}

export default App;
