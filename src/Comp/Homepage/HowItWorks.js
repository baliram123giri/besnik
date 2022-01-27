import React from "react";

export default function HowItWorks() {
  return (
    <>
      <div className="container my-3 my-md-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>How it works</h1>
            <p>
              Mobile banking differs from mobile payments, which <br /> involves
              the use of mobile devices.
            </p>
          </div>
        </div>
        {/* --card start -- */}
        <div className="row">
          <div className="col-12 col-md-4 ">
            <div className="b_card_box  shadow rounded-3 p-3 text-center">
              <div className="b_img_box m-auto">
                <img src="img/homescreen/Payment Information-bro.svg" width={"100%"} alt="" />
              </div>
              <h5 className="fw-bold my-2">Add Cards </h5>
              <p className="b_desc">
               Add multiple cards and track  <br /> your daily expense with quality interface.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 ">
            <div className="b_card_box shadow rounded-3 p-3 text-center">
              <div className="b_img_box m-auto">
                <img src="img/homescreen/Project Stages-bro.svg" width={"100%"} alt="" />
              </div>
              <h5 className="fw-bold my-2">Data Secure </h5>
              <p className="b_desc">
                Sending money faster & easier with <br /> end to end encryption.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 ">
            <div className="b_card_box shadow rounded-3 p-3 text-center">
              <div className="b_img_box m-auto">
                <img src="img/homescreen/Exams-bro.svg" width={"100%"} alt="" />
              </div>
              <h5 className="fw-bold my-2">Information </h5>
              <p className="b_desc">
              Enter your information ensure your details <br /> safe and more
                secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
