import { AddUnitForm } from "./components/AddUnitForm";
import { CarrierList } from "./components/CarrierList";
import { CarrierProfile } from "./components/CarrierProfile";
import { ListOfUnits } from "./components/ListOfUnits";
import { LoginForm } from "./components/LoginForm";
import { Navbar } from "./components/Navbar";
import { RegisterForm } from "./components/RegisterForm";
import { SearchBar } from "./components/SearchBar";

import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/search-page" element={<CarrierList />} />
      </Routes>

    </div>

  );
}

export default App;
