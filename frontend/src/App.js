import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Form } from "./Components/Form";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 w-100">
      <NavBar />
      <Form />
    </div>
  );
}

export default App;
