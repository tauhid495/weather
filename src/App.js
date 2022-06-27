
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import GeoLocation from './pages/GeoLocation';
import Home from './pages/Home';


function App() {
  const [findCity, setFindCity] = useState(null);

  const handleSearch = (e) => {
    const searchCity = e.target.value;
    setFindCity(searchCity);
  }

  return (

    <div className="bg-[url('/src/asset/20.jpg')] bg-cover scrollbar-hide">
      <Navbar search={handleSearch}>
        <Routes>
          <Route path='/' element={<Home findCity={findCity} />} />
          <Route path='/geolocation' element={<GeoLocation />} />
        </Routes>
      </Navbar>
    </div>

  );
}

export default App;
