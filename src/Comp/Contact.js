import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    message: "",
  });
  const contactFormHandler = (e) => {
    e.preventDefault();
    var data = {
      data: {
        FirstName: formData.FirstName,
        LastName: formData.LastName,
        email: formData.email,
        message: formData.message,
      },
    };
    fetch("https://floating-meadow-09183.herokuapp.com/api/queries", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        //    if(data.error.status===400){

        //    }
        if (!data.data) {
          toast.error(" Query already send!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.success("Query Submited Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setFormData({
            ...formData,
            FirstName: "",
            LastName: "",
            email: "",
            message: "",
          });
        }
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="container my-3 my-md-5">
      <ToastContainer />
      <h4 className="heading4 text-center">Have a question?</h4>
      <h6 className="b_heading6 text-center">Get in touch!</h6>
      <form onSubmit={contactFormHandler} className="w-75 m-auto mt-2 my-md-4 ">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label htmlFor="fname" className="form-label">
                First Name <span className="text-danger">*</span>
              </label>
              <input
                value={formData.FirstName}
                required
                type="text"
                className="form-control"
                onChange={(e) => {
                  setFormData({ ...formData, FirstName: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mb-3">
              <label htmlFor="fname" className="form-label">
                Last Name <span className="text-danger">*</span>
              </label>
              <input
                value={formData.LastName}
                required
                type="text"
                className="form-control"
                onChange={(e) => {
                  setFormData({ ...formData, LastName: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="mb-3">
              <label htmlFor="fname" className="form-label">
                Email<span className="text-danger">*</span>
              </label>
              <input
                value={formData.email}
                required
                type="text"
                className="form-control"
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="mb-3">
            <label htmlFor="fname" className="form-label">
              Message<span className="text-danger">*</span>
            </label>
            <textarea
              value={formData.message}
              required
              type="text"
              cols={10}
              rows={8}
              className="form-control"
              placeholder="Query must be min 10 words! "
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
              }}
            />
          </div>
        </div>
        <button type="submit"   className={`btn border-0 text-white b_rounded_btn ${formData.message.length<20?"disabled":""}`}>
          Submit
        </button>
      </form>
    </div>
  );
}
