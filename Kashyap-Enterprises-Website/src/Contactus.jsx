import React from "react";
import "./index.css";
const Contactus = () => {
  return (
    <div className="ms-5 mb-5 me-5">
      <h1 className="fw-bolder text-center contacthead border-bottom">
        Contact Us
      </h1>
      <form className="mt-5 formbg contactshadow">
        <div className="row g-3 container mt-3">
          <div className='col-md-6 formdivider'>
          <div className="row ">
  <div className="col">
    <label htmlFor="Fullname" className="form-label  fs-4 fw-bold mb-3 contacthead">Fullname</label>
    <input type="text" className="form-control" placeholder="Fullname" aria-label="Fullname"/>
  </div>
  <div className="col">
    <label htmlFor="Email" className="form-label  fs-4 fw-bold mb-3 contacthead">Email</label>
    <input type="text" className="form-control" placeholder="Email" aria-label="Email"/>
  </div>
</div>

          
          <div className="col-md-12">
            <label
              htmlFor="subject"
              className="form-label  fs-4 fw-bold mb-3 contacthead"
            >
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              id="subject"
            />
          </div>
          
          <div className="col-md-12">
            <label
              htmlFor="Textarea"
              className="form-label  fs-4 fw-bold mb-3 contacthead"
            >
              Message
            </label>
            <textarea
              className="form-control mb-5"
              placeholder="Message"
              id="floatingTextarea"
              style={{ height: "200px" }}
            ></textarea>
          </div>
          </div>
          <div className="col-md-6 map">
            <iframe
			title='Map'
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1797822.3090129504!2d77.295588!3d28.34761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x355bca5e6d36e2c2!2sKashyap%20Enterprises%20%7C%20Defoamer%20Manufacturer%20%7C%20Silicone%20Defoamer%20Manufacturer%20%7C%20Antifoaming%20Agent%20Manufacturer%20%7C%20Silicone%20Emulsion%20Manufacturer!5e0!3m2!1sen!2sus!4v1632737799165!5m2!1sen!2sus"
              width="250"
              height="420"
              allowfullscreen="yes"
              loading="lazy"
			  className='col-md-12 mt-3 d-flex align-items-stretch'
            ></iframe>
          </div>
        </div>
        <button className="btn btn-sm modalbtn text-white ms-3 mb-5 fw-bold mt-3">
          Submit
        </button>
        <div class="row">
							<div class="col-md-3">
								<div class="dbox w-100 text-center">
			        		<div class="icon d-flex align-items-center justify-content-center">
			        			<span class="fa fa-3x  	fas fa-map-marker-alt addressicon"></span>
			        		</div>
			        		<div class="text">
				            <p className='fw-bold fs-6 text-dark text-decoration-none'><span className='fs-3 fw-bold contacthead'>Address: <br/></span> 566, Sector-55, 121004, Faridabad, Haryana, India</p>
				          </div>
			          </div>
							</div>
							<div class="col-md-3">
								<div class="dbox w-100 text-center">
			        		<div class="icon d-flex align-items-center justify-content-center">
			        			<span class="fa fa-3x fa-phone telicon"></span>
			        		</div>
			        		<div class="text">
				            <p><span className='fs-3 fw-bold contacthead'>Phone: <br/></span> <a className='fw-bold fs-6 text-dark text-decoration-none' href="tel:+91 7019 797 893">+91 7019 797 893</a></p>
				            <p><span></span> <a className='fw-bold fs-6 text-dark text-decoration-none' href="tel:+91 9811 407 452">+91 9811 407 452</a></p>
				          </div>
			          </div>
							</div>
							<div class="col-md-3">
								<div class="dbox w-100 text-center">
			        		<div class="icon d-flex align-items-center justify-content-center">
			        			<span class="fa fa-3x fa-paper-plane emailicon"></span>
			        		</div>
			        		<div class="text">
				            <p><span className='fs-3 fw-bold contacthead'>Email:</span> <br /> <a className='fw-bold fs-6 text-dark text-decoration-none' href="mailto:sales@kashyapenterprises.com">sales@kashyapenterprises.com</a></p>
				            <p><span></span> <a className='fw-bold fs-6 text-dark text-decoration-none' href="mailto:info@kashyapenterprises.com">info@kashyapenterprises.com</a></p>
				          </div>
			          </div>
							</div>
							<div class="col-md-3">
								<div class="dbox w-100 text-center">
			        		<div class="icon d-flex align-items-center justify-content-center">
			        			<span class="fa fa-3x fa-globe websiteicon"></span>
			        		</div>
			        		<div class="text">
				            <p><span className='fs-3 fw-bold contacthead'>Website</span> <a className='fw-bold fs-6 text-dark text-decoration-none' href="www.kashyapenterprises.com">www.kashyapenterprises.com</a></p>
				          </div>
			          </div>
							</div>
						</div>
      </form>
    </div>
  );
};

export default Contactus;
