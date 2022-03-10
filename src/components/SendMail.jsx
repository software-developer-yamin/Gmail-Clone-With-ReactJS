import { Close } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mail/mailSlice";
import "../styles/SendMail.css";

function SendMail() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section onSubmit={handleSubmit(onSubmit)} className="sendMail">
      <header className="sendMail_header">
        <h3>New Message</h3>
        <IconButton onClick={() => dispatch(closeSendMessage())}>
          <Close className="sendMail_close" />
        </IconButton>
      </header>
      <form>
        <input
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && <span className="sendMail_error">To is required!</span>}
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.to && (
          <span className="sendMail_error">Subject is required!</span>
        )}
        <input
          className="sendMail_message"
          placeholder="Message..."
          type="text"
          {...register("message", { required: true })}
        />
        {errors.to && (
          <span className="sendMail_error">Message is required!</span>
        )}
        <div className="sendMail_options">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="sendMail_send"
          >
            Send
          </Button>
        </div>
      </form>
    </section>
  );
}

export default SendMail;
