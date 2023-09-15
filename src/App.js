import { ListOfUnits } from "./components/ListOfUnits";
import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";



function App() {
  return (
    <>
      <Navbar/>
      <SearchBar />
      <ListOfUnits />
    </>
  );
}

export default App;
