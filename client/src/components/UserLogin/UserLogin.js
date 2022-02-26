import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const UserLogin = () => {
  const [FullName, setFullName] = useState("");
  const [UserName, setUserName] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState(null);
  const [Email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/user/signIn", {
        UserName,
        FullName,
        PassWord,
        PhoneNumber,
        Email,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    navigate("/otp");
  };
  return (
    <div>
      <form method="POST" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">FULL NAME</label>
          <input
            id="fullname"
            onChange={(e) => setFullName(e.target.value)}
            autoComplete="off"
            type="text"
            name="fullname"
          />
        </div>
        <div>
          <label htmlFor="username">USER NAME</label>
          <input
            id="username"
            onChange={(e) => setUserName(e.target.value)}
            autoComplete="off"
            type="text"
            name="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            onChange={(e) => setPassWord(e.target.value)}
            autoComplete="off"
            type="password"
            name="password"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            onChange={(e) => setPhoneNumber(parseInt(e.target.value))}
            name="phoneNumber"
            id="phoneNumber"
            autoComplete="off"
            type="tel"
            pattern="[0-9]{10}"
          />
        </div>
        <div>
          <label htmlFor="email">Email Id</label>
          <input
            name="email"
            id="email"
            autoComplete="off"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
