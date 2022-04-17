import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
