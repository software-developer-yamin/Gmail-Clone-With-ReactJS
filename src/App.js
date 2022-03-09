import { Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";


function App() {
  return (

    <div className="app">
      <Header />
      <main className="app_body" >
        <Sidebar />
        <Routes>
        </Routes>
      </main>
    </div>

  );
}

export default App;
