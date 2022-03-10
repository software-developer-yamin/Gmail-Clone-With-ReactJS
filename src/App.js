import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import EmailList from "./components/EmailList";
import Header from "./components/Header";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail";
import Sidebar from "./components/Sidebar";
import { selectSendMessageIsOpen } from "./features/mail/mailSlice";


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  return (
    <div className="app">
      <Header />
      <main className="app_body" >
        <Sidebar />
        <Routes>
          <Route path="/" element={<EmailList />} />
          <Route path="/mail" element={<Mail />} />
        </Routes>
      </main>
      {sendMessageIsOpen && <SendMail />}
    </div>

  );
}

export default App;
