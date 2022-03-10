import { Close } from "@mui/icons-material";
import { Button, IconButton, Input } from "@mui/material";
import "../styles/SendMail.css";

function SendMail() {
  return (
    <section className="sendMail">
      <header className="sendMail_header">
        <h3>New Message</h3>
        <IconButton>
          <Close className="sendMail_close" />
        </IconButton>
      </header>
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        
        <div className="sendMail_options">
          <Button>Send</Button>
        </div>
      </form>
    </section>
  );
}

export default SendMail;
