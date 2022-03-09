import { Route, Routes } from "react-router-dom";
import "./App.css";
import EmailList from "./components/EmailList";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";


function App() {
  return (

    <div className="app">
      <Header />
      <main className="app_body" >
        <Sidebar />
        <Routes>
          <Route path="/" element={<EmailList/>} />
        </Routes>
      </main>
    </div>

  );
}

export default App;
