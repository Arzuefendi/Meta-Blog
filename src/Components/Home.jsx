import React from "react";
import logo from "../images/Logo (1).png";
import img1 from "../images/Image.png";
import img2 from "../images/Image2.png";
import Card from "./Card";
import img3 from "../images/Img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import img8 from "../images/img8.png";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="main">
        <div className="hero">
          <img src={img1} alt="" />
        </div>
        <div className="box">
          <input type="text" placeholder="Texnology" />
          <h2>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h2>
          <img src={img2} />
          <span> Jason Fransisco August 20, 2022</span>
        </div>
        <section className="text-center">
          <h1>Adversitement</h1>
          <h4>You can place ads</h4>
          <p>750x100</p>
        </section>
      </div>
      <div className="card-box mt-3">
        <div className="container">
          <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4 ">
            <Card
              img={img3}
              name={
                " The Impact of Technology on the Workplace: How Technology is Changing"
              }
            />
            <Card
              img={img4}
              name={
                "The Impact of Technology on the Workplace: How Technology is Changing"
              }
            />
            <Card
              img={img5}
              name={
                "The Impact of Technology on the Workplace: How Technology is Changing"
              }
            />
            <Card
              img={img6}
              name={
                "The Impact of Technology on the Workplace: How Technology is Changing"
              }
            />
            <Card
              img={img7}
              name={
                " The Impact of Technology on the Workplace: How Technology is Changing"
              }
            />
            <Card
              img={img8}
              name={
                " The Impact of Technology on the Workplace: How Technology is Changing"
              }
            />
          </div>
        </div>
      </div>
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

export default Home;
