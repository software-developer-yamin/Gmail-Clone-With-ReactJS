import {
  AccessTime,
  Add,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Star,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import "../styles/Sidebar.css";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <section className="sidebar">
      <Button startIcon={<Add fontSize="large" />} className="sidebar_compose">
        Compose
      </Button>
      <SidebarOption Icon={Inbox} title="Inbox" number={54} selected />
      <SidebarOption Icon={Star} title="Starred" number={46} />
      <SidebarOption Icon={AccessTime} title="Snoozed" number={34} />
      <SidebarOption Icon={LabelImportant} title="Important" number={78} />
      <SidebarOption Icon={NearMe} title="Sent" number={64} />
      <SidebarOption Icon={Note} title="Drafts" number={58} />
      <SidebarOption Icon={ExpandMore} title="More" number={48} />
    </section>
  );
}

export default Sidebar;
