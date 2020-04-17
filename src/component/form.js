import { useForm } from "react-hook-form";
import React from "react";

function LoginForm(props) {
  const { onSubmit } = props;
  const { register, handleSubmit, errors } = useForm();

  const onFormSubmit = (data) => {
    onSubmit(data.fullName);
  };

  return (
    <div>
      <h1> Welcome to Reactjs Quiz App</h1>
      <form onSubmit={handleSubmit(onFormSubmit)} className="form-style">
        <input
          type="text"
          placeholder=" Enter your Full Name"
          name="fullName"
          ref={register({
            minLength: {
              value: 5,
              message: "Full Name is required at least 5 characters",
            },
          })}
        />
        {errors.fullName && (
          <p className="warning-text">{errors.fullName.message}</p>
        )}
        <button type="submit">Start</button>
      </form>
    </div>
  );
}
export default LoginForm;
