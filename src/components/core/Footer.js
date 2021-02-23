import React from "react";

export default function Footer(props) {
  return (
    <footer
      id="dk-footer"
      className="dk-footer"
      style={{ backgroundColor: "#8AB5BE" }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3" style={{paddingLeft:"90px"}}>
              <div className="section-heading">
                <h3 style={{ color: "black" }}>Contact Details:</h3>
              </div>
              <i className="fa fa-map-marker-alt d-inline"></i>
              <p className="d-inline font-weight-bolder"> 1138 Yates Street</p>
              <p className="font-weight-bolder">Postal code : v8v 3m8</p>
              <p className="font-weight-bolder">City : Victoria City</p>
              <p className="font-weight-bolder">Province : British Columbia</p>
              <i className="fa fa-phone d-inline font-weight-bolder"></i>
              <p className="d-inline font-weight-bolder">+234 809 555 5132</p>
          </div>
          <div className="col-md-3" style={{paddingLeft:"90px"}}>
              <div className="  section-heading">
                <h3 style={{ color: "black" }}>Customer Services:</h3>
              </div>
              <p className="font-weight-bolder">Contact us</p>
              <p className="font-weight-bolder">Delivery</p>
              <p className="font-weight-bolder">FAQs</p>
              <p className="font-weight-bolder">Return & Refund</p>
          </div>
          <div className="col-md-3" style={{paddingLeft:"90px"}}>
            
              <div className="  section-heading">
                <h3 style={{ color: "black" }}>Information:</h3>
              </div>
              <p className="font-weight-bolder">Privacy policy</p>
              <p className="font-weight-bolder">Terms & Considions</p>
              <a href="#"><i className="fab fa-facebook" style={{fontSize:"50px",backgroundColor:"#87B0B9"}}></i></a>
              <a href="#" style={{paddingLeft:"10px"}}><i className="fab fa-twitter" style={{fontSize:"50px",backgroundColor:"#87B0B9",color:"lightblue"}}></i></a>
              <a href="#" style={{paddingLeft:"10px"}}><i className="fab fa-instagram" style={{fontSize:"50px",backgroundColor:"#87B0B9",color:"red"}}></i></a>
          </div>
          <div className="col-md-3">
            <div className="footer-widget  footer-left-widget">
              <div className="section-heading">
                <h3 style={{ color: "black" }}>Download Kariac :</h3>
              </div>
              <ul>
                <li>
                  <a href="https://play.google.com/store/apps/details?id=com.kariac1.flutterbuyandsell">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/android.svg`}
                      alt="0"
                      width="100%"
                      height="100%"
                      className="  img-thumbnail"
                    />
                  </a>
                </li>
                <li>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/ios.svg`}
                    alt="0"
                    width="100%"
                    height="100%"
                    className="  img-thumbnail"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="copyright text-center"
        style={{ backgroundColor: "#4E8591" }}
      >
        <div className="container font-weight-bolder">
          <span style={{ color: "black " }}>
            Copyright © 2020, All Right Reserved @Kariac
          </span>
        </div>
      </div>
    </footer>
  );
}
// <div className="container-fluid ">
//   <div className="row">
//     <div className="col-md-6">
//       <h3>information</h3>
//       <ul className="w3_footer_grid_list">
//         <li>
//           <a href="events.html">Events</a>
//         </li>
//         <li>
//           <a href="about.html">About Us</a>
//         </li>
//         <li>
//           <a href="products.html">Best Deals</a>
//         </li>
//         <li>
//           <a href="services.html">Services</a>
//         </li>
//         <li>
//           <a href="short-codes.html">Short Codes</a>
//         </li>
//       </ul>
//     </div>
//     <div className="col-md-6">
//       <h3>policy info</h3>
//       <ul className="w3_footer_grid_list">
//         <li>
//           <a href="faqs.html">FAQ</a>
//         </li>
//         <li>
//           <a href="privacy.html">privacy policy</a>
//         </li>
//         <li>
//           <a href="privacy.html">terms of use</a>
//         </li>
//       </ul>
//     </div>
//   </div>
//    <div class="agile_footer_grids">
// 			<div class="col-md-3 w3_footer_grid agile_footer_grids_w3_footer">
// 				<div class="w3_footer_grid_bottom">
// 					<h4>100% secure payments</h4>
// 					<img src="images/card.png" alt=" " class="img-responsive" />
// 				</div>
// 			</div>
// 			<div class="col-md-3 w3_footer_grid agile_footer_grids_w3_footer">
// 				<div class="w3_footer_grid_bottom">
// 					<h5>connect with us</h5>
// 					<ul class="agileits_social_icons">
// 						<li><a href="#" class="facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
// 						<li><a href="#" class="twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
// 						<li><a href="#" class="google"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
// 						<li><a href="#" class="instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
// 						<li><a href="#" class="dribbble"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
// 					</ul>
// 				</div>
// 			</div>
// 		</div> */
//   <div className=" text-center" >
//     <p>
//       © 2016 Grocery Store. All rights reserved | Design by{" "}
//       <a href="http://w3layouts.com/">W3layouts</a>
//     </p>
//   </div>
// </div>
