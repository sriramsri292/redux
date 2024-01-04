import './App.css';
import Cart from './components/cart';
import Home from './components/home';
import { Route,Routes} from 'react-router-dom';



function App() 
{
  
 
  return (



    <div> 
   
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
     
     
     
     
      </Routes>
   
     </div>
  );
}

export default App;
