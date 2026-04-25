import { useState } from "react";

export default function FormLayout() {

    let formObject={
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    terms: false,
  }


  const [formData, setFormData] = useState(formObject);

  const [errors, setErrors] = useState({});

  // validation function

  const validate = (data) => {
    let newErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!data.email.includes("@")) {
      newErrors.email = "Invalid email";
    }

    if (!data.password) {
      newErrors.password = "Password is required";
    } else if (data.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    if (!data.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!data.gender) {
      newErrors.gender = "Select gender";
    }

    return newErrors;
  };

  // handle change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const updatedData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };

    setFormData(updatedData);

    // live validation
    setErrors(validate(updatedData));
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);

      alert("Registration Successful");
      console.log(formData);

  };

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-600 p-5">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg w-[320px]"
      >
        <h2 className="text-xl font-bold text-center mb-4">
          Registration Form
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-1 border rounded-md"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-1 border rounded-md mt-2"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 mb-1 border rounded-md mt-2"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

        {/* Confirm Password */}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full p-2 mb-1 border rounded-md mt-2"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
        )}

        {/* Gender */}
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full p-2 mb-1 border rounded-md mt-2"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}

        {/* Terms */}
        <label className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          Accept Terms & Conditions
        </label>

        {/* Button */}
        <button className="w-full mt-3 p-2 rounded-md text-white bg-sky-500 hover:bg-sky-600" >
          Register
        </button>
      </form>

        <div className="w-[400px] h-[200px] border p-2 bg-white font-semibold    ">
          <p><span className="text-sky-500">Name</span> : {formData.name}</p>
          <p><span className="text-sky-500">Email</span>  : {formData.email}</p>
          <p><span className="text-sky-500">Password</span>  : {formData.password}</p>
          <p><span className="text-sky-500">Gender</span>  : {formData.gender}</p>
        </div>





    </div>
  );
}
