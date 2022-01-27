import React from "react";

export default function HeaderBanner() {
  return (
    <div className="container-fluid p-0 m-0">
      <div className="hero_banner">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6 col-12 ">
              <h1 className="b_heding1 ">
                Life Should <br /> Be Easy.
              </h1>
              <p>
                financial transictions remotely using a mobile device such as{" "}
                <br />a smartphone or tablet.
              </p>
              <button className="btn b_signup text-white">Get Started</button>
            </div>
            <div className="col-md-6 col-12">
              <img src="img/header/Mobile Marketing-bro.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
