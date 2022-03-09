import { Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <IconButton>
        <Menu />
      </IconButton>
    </header>
  );
}

export default Header;
