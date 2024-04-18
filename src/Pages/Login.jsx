import React from "react";
import LeftLoginSide from "../Components/LeftLoginSide";
import "../assets/login.css"
import { useState } from "react";
import axios from "axios";

function Login() {
// const [email, setEmail] = useState("");
const [formData,setFormData] = useState({
  Name:'',
  userName:'',
  password:'',
  email:''
})

const BaseUrl = "https://discoveremailapp-backend.onrender.com";

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.post(`${BaseUrl}/api/createUser`, formData, {
      headers: { "Content-Type": "application/json" },
    });
    // setFormData()
    // console.log(formData)
    alert("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    alert("Error sending email");
  }
};

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setFormData({ ...formData, [name]: value });
};


  return (
    <div className="h-full flex flex-row">
      <aside className="leftPortion h-screen">
        <LeftLoginSide />
      </aside>
      <div className="flex flex-col rightPortion">
        <div className="alignSelfRight">
          Already a member?{" "}
          <a className="text-blue-800 underline" href="">
            Sign In
          </a>
        </div>
        <main className="flex flex-col rightInner">
          <div style={{ padding: "10px" }}>
            <h1 style={{ padding: "10px 0px" }} className="font-bold">
              Sign Up to Discover
            </h1>
          </div>
          <article>
            <form onSubmit={handleSubmit} className="flex flex-col formTag">
              <div className="flex flex-row inputGroup">
                <div className="flex flex-col">
                  <label>Name*</label>
                  <input
                    value={formData.Name}
                    className="inputTag"
                    type="text"
                    name="Name"
                    placeholder="Ex: John"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label>Username*</label>
                  <input
                    value={formData.userName}
                    className="inputTag"
                    type="text"
                    name="userName"
                    placeholder="Ex: John"
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <label style={{ marginTop: "20px" }}>Email*</label>
              <input
                value={formData.email}
                name="email"
                className="inputTag"
                type="email"
                placeholder="Ex: account@refero.design"
                onChange={handleInputChange}
                required
              />

              <label style={{ marginTop: "20px" }}>Password*</label>
              <input
                value={formData.password}
                className="inputTag"
                name="password"
                type="text"
                placeholder="6+ characters"
                onChange={handleInputChange}
                required
              />

              <div className="flex" style={{ gap: "15px", marginTop: "20px" }}>
                <input
                  style={{ marginTop: "-70px" }}
                  type="checkbox"
                  // required
                />
                <p>
                  *Creating an account means you're okay with our
                  <p style={{ color: "blue" }}>
                    Terms of Services, Privacy Policy,
                  </p>
                  and our default
                  <p style={{ color: "blue" }}>Notification Settings</p>
                </p>
              </div>

              <button type="submit" className="inputTag btn">
                Create Account
              </button>
            </form>
          </article>
        </main>
        <section
          style={{
            display: "flex",
          }}
        >
          <p style={{ textAlign: "center" }}>
            This site is protected by reCAPTCHA and the Google
            <a style={{ color: "blue" }}> Privacy policy</a> and
            <a style={{ color: "blue" }}> Terms of Services</a> apply.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Login;
