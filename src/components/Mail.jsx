import {
  ArrowBack,
  CheckCircle,
  Delete,
  Email,
  Error,
  ExitToApp,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  Print,
  UnfoldMore,
  WatchLater,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectOpenMail } from "../features/mail/mailSlice";
import "../styles/Mail.css";

function Mail() {
  const navigate = useNavigate();

  const selectedMail = useSelector(selectOpenMail);

  return (
    <section class="mail">
      <header class="mail_tools">
        <section class="mail_toolsLeft">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <Error />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Email />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircle />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </section>
        <section className="mail_toolsRight">
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </section>
      </header>
      <main className="mail_body">
        <header className="mail_bodyHeader">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportant className="mail_ImportantIcon" />
          <p>{selectedMail?.title}</p>
          <p className="mail_time">{selectedMail?.time}</p>
        </header>
        <section className="mail_message">
          <p>{selectedMail?.description}</p>
        </section>
      </main>
    </section>
  );
}

export default Mail;
