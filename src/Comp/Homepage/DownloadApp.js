import React from "react";

export default function DownloadApp() {
  return <>
     <div className="container">
         <div className="row align-items-center">
             <div className="col-12 col-md-6">
                 <div className="b_mobile_box">
                     <img src="img/homescreen/Social media-cuate.svg" width={"100%"} alt="" />
                 </div>
             </div>
             <div className="col-12 col-md-6 my-3"> 
               <p>Download Bensik mobile banking app
                   <br /> for IOS and android. It helps you banking <br />
                   quickly and more smartly.
               </p>
               <div className="b_app_box  d-flex align-items-center p-2 rounded my-3">
               <div className="app_store store_logo">
                   <img src="img/homescreen/app-store-png-logo-33112.png" width={"100%"} alt="" />
          
               </div>
               <h6 className="mx-3 b_heading6">App Store</h6>
               </div>
               <div className="b_app_box  d-flex align-items-center p-2 rounded my-3">
               <div className="app_store store_logo ">
               <img src="img/homescreen/google-play-png-logo-3798.png" width={"100%"} alt="" />
          
               </div>
                  <h6 className="mx-3 b_heading6">Play Store</h6>
               </div>
           
             </div>
         </div>
     </div>
  </>;
}
