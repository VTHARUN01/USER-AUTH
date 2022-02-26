import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Otp = (props) => {
  const [otpUser, setOtp] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/user/Otp", { Otp: otpUser })
      .then((otp) => {
        if (otp.data.success) {
          navigate("/home");
        } else {
          console.log(otp.data)
          navigate("/otp");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="otp">Enter the OTP</label>
          <input
            type="number"
            name="otp"
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <div>
          <button>Resend</button>
        </div>
        <div>
          <button type="Submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Otp;
