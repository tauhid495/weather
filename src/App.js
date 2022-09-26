


import { Route, Routes } from 'react-router-dom';
import Home from './Components/VersionTwo/Pages/Home';


import Footer from './pages/Footer';



function App() {
  

  return (

    <div className="bg-[url('/src/asset/20.jpg')] bg-cover scrollbar-hide text-white">

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
    </div>

  );
}

export default App;
