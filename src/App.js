import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import EmailList from "./components/EmailList";
import Header from "./components/Header";
import Login from "./components/Login";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail";
import Sidebar from "./components/Sidebar";
import { selectSendMessageIsOpen } from "./features/mail/mailSlice";
import { selectUser } from "./features/user/userSlice";


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);

  if (!user) return <Login />;

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
