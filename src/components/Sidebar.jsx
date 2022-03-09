import { Add, Inbox, } from "@mui/icons-material";
import { Button } from "@mui/material";
import "../styles/Sidebar.css";
import HeaderOption from "./SidebarOption";

function Sidebar() {
  return (
    <section className="sidebar">
      <Button startIcon={<Add fontSize="large" />} className="sidebar_compose">
        Compose
      </Button>
      <HeaderOption Icon={Inbox} title="Inbox" number={54} />
    </section>
  );
}

export default Sidebar;
