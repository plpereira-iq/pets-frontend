import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddPet from './components/AddPet';
import AllPets from "./components/AllPets"
import UpdatePet from './components/UpdatePet';
import OnePet from './components/OnePet';
import './App.module.css';

// import EditPet from './components/EditPet';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  exact path = "/" default element={<AllPets />} />
        <Route  exact path = "/pets" default element={<AllPets />} />
        <Route  exact path = "/pets/new" element = {<AddPet />} />
        <Route  exact path = "/petsUpdate/:id/" element = {<UpdatePet />} />
        <Route  exact path = "/pets/:id/" element = {<OnePet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
