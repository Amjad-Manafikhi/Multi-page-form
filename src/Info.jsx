import React from "react";
import { useForm } from "react-hook-form";
import "./Info.css";

export default function Info({setCheckedValue}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }, 
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setCheckedValue(2)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Personal Info</h1>
      <p>Please provide your name, email address, and phone number.</p>

      <label htmlFor="name">Name</label>
      <input
        {...register("name", {
          required: "Name is required",
        })}
        type="text"
        id="name"
        placeholder="e.g. Amajd Manafikhi"
      />
      {errors.name && <div className="error-message">{errors.name.message}</div>}

      <label htmlFor="email">Email</label>
      <input
        {...register("email", {
          required: "Email is required",
          validate: (value) =>
            value.includes("@") || "Email must include @",
        })}
        type="email"
        id="email"
        placeholder="e.g. amjad@gmail.com"
      />
      {errors.email && <div className="error-message">{errors.email.message}</div>}

      <label htmlFor="phone">Phone Number</label>
      <input
        {...register("phone", {
          required: "Phone number is required",
        })}
        type="tel"
        id="phone"
        placeholder="e.g. 123-456-7890"
      />
      {errors.phone && <div className="error-message">{errors.phone.message}</div>}

      <button type="submit" className="submit-button">
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
    </form>
  );
}
