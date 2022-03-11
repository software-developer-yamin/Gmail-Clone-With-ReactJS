import {
  Apps,
  ArrowDropDown,
  Menu,
  Notifications,
  Search,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/user/userSlice";
import { auth } from "../firebase";
import "../styles/Header.css";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <header className="header">
      <section className="header_left">
        <IconButton>
          <Menu />
        </IconButton>
        <img
          src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt=""
        />
      </section>
      <section className="header_middle">
        <Search />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDown className="header_inputCaret" />
      </section>
      <section className="header_right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <Avatar onClick={logOut} src={user?.photoUrl} />
        </IconButton>
      </section>
    </header>
  );
}

export default Header;
