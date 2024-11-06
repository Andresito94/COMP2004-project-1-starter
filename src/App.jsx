import "./App.css";
import GroceriesAppContainer from "./Components/GroceriesAppContainer";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div id="root">
      <NavBar username="Andy, mucho taco" />
      <GroceriesAppContainer />
    </div>
  );
}

export default App;
