import { ArrowDropDown, Menu, Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "../styles/Header.css";

function Header() {
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
        <input placeholder="Search Mail" type="text" />
        <ArrowDropDown className="header_inputCaret" />
      </section>
    </header>
  );
}

export default Header;
