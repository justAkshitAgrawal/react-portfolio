import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data.subject = "Contact Form";
    const { name, email, subject, message } = data;
    reset();
    toastifySuccess();
  };

  const toastifySuccess = () => {
    toast("Form is not working atm!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };
  return (
    <div className="bg-[#F8F8F8] text-[#121212] p-4 lg:w-[50vw] w-full mt-10 lg:mt-0 lg:mx-20">
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-5">
          <input
            type="text"
            name="name"
            {...register("name", {
              required: { value: true, message: "Please enter your name" },
              maxLength: {
                value: 30,
                message: "Please use 30 characters or less",
              },
            })}
            className="p-2 border-b outline-none border-[#121212] bg-transparent "
            placeholder="Your name"
          />
          {errors.name && (
            <span className="text-sm errorMessage">{errors.name.message}</span>
          )}

          <input
            type="email"
            name="email"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            placeholder="Your email address"
            className="p-2 border-b outline-none border-[#121212] bg-transparent "
          />
          {errors.email && (
            <span className="text-sm errorMessage">
              Please enter a valid email address
            </span>
          )}
          <textarea
            rows={3}
            name="message"
            {...register("message", {
              required: true,
            })}
            className="outline-none border-b border-[#121212] bg-transparent p-2"
            placeholder="Message"
          ></textarea>
          {errors.message && (
            <span className="text-sm errorMessage">Please enter a message</span>
          )}

          <button
            type="submit"
            className="bg-[#121212] text-[#F8F8F8] self-end uppercase font-light py-2 px-3"
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default ContactForm;
