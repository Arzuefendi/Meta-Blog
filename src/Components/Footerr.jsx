import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footerr = () => {
  return (
    <div>
      <div className="footer px-5">
        <footer className=" px-3">
          <div className="row">
            <div className="footer1 col-sm-6 col-md-3 col-lg-3">
              <h5>About</h5>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                </li>
                <li className="nav-item">
                  <a href="#" class="nav-link p-0 ">
                    Email: arzuefendiyeva0@gmail.com
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" class="nav-link p-0">
                    Phone: 077-507-58-10
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer2 col-sm-6 col-md-3 col-lg-3">
              <h5>Quick Link</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" class="nav-link p-0">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" class="nav-link p-0 ">
                    About
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" class="nav-link p-0">
                    Blogs
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" class="nav-link p-0 ">
                    Login
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" class="nav-link p-0">
                    Register
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer3 col-sm-6 col-md-3 col-lg-3">
              <h5>Category</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" class="nav-link p-0">
                    Lifestyle
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" class="nav-link p-0">
                    Technology
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" class="nav-link p-0">
                    Travel
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" class="nav-link p-0 ">
                    Business
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" class="nav-link p-0">
                    Economy
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer4 col-sm-6 col-md-3 col-lg-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex  w-80 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="main-footer d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2024 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <div className="icon">
                    <FaTwitter />
                  </div>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <div className="icon">
                    <FaInstagram />
                  </div>
                </a>
              </li>
              <li className="ms-3">
                <a className="link-body-emphasis" href="#">
                  <div className="icon">
                    <FaFacebook />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footerr;
