import React from "react";
import "../CSS/SendMail.css";
import { Button, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useForm } from "react-hook-form";

const SendMail = () => {
  const { register, handleSubmit, watch, formState: {errors} } = useForm();

  function onSubmit(data){
    console.log(data)
  }

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <IconButton className="sendMail__close">
          <Close />
        </IconButton>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="text"
          {...register('to',{ required: true })}
          />
          { errors.to && <p className="sendMail__error">asdfasd</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register('subject',{ required: true })}
          />
          { errors.subject && <p className="sendMail__error">asdfasd</p>}
        <input
          name="message"
          placeholder="Message..."
          type="text"
          className="sendMail__message"
          {...register('message', {required: true})}
          />
          { errors.message && <p className="sendMail__error">asdfasd</p>}
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
