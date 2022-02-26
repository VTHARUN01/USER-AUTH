import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserLogin } from "./components/UserLogin/UserLogin";
import { Home } from "./components/Home/Home";
import Otp from "./components/Otp/Otp";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/signIn" element={<UserLogin />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
