import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
// import { useForm } from "react-hook-form";

const SendMail = () => {
  //   const { register, handleSubmit, watch, errors } = useForm();

  //   const onSubmit = (formData) => {
  //     console.log(formData);
  //   };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close" />
      </div>
      {/* onSubmit={handleSubmit(onSubmit)} */}
      <form action="#">
        <input
          name="to"
          placeholder="To"
          type="text"
          //   ref={register({ required: true })}
        />
        {/* {errors.to && <p className="sendMail__error">Required field.</p>} */}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          //   ref={register({ required: true })}
        />
        {/* {errors.subject && <p className="sendMail__error">Required field.</p>} */}
        <input
          //   ref={register({ required: true })}
          name="message"
          placeholder="Message.."
          type="text"
          className="sendMail__message"
        />
        {/* {errors.message && <p className="sendMail__error">Required field.</p>} */}
        <div className="sendMail__options">
          <Button
            type="submit"
            color="primary"
            variant="contained"
            className="sendMail__send"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
