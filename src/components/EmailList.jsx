import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import "../styles/EmailList.css";
import EmailRow from "./EmailRow";
import Section from "./Section";

function EmailList() {
  return (
    <section className="emailList">
      <header className="emailList_settings">
        <div className="emailList_settingLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList_settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </header>
      <section className="emailList_sections">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73E8" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </section>
      <main className="emailList_list">
        <EmailRow
          title="Title"
          subject="Subject"
          description="Description"
          time="Time"
        />
        <EmailRow
          title="Title"
          subject="Subject"
          description="Description"
          time="Time"
        />
        <EmailRow
          title="Title"
          subject="Subject"
          description="Description"
          time="Time"
        />
      </main>
    </section>
  );
}

export default EmailList;
