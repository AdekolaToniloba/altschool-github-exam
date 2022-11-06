import React, { Component } from "react";
import "./error.css";
import Scarecrow from "./Scarecrow.png";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div class="container">
          <div class="head">
            <h3>Error 404</h3>
          </div>

          <div class="flex">
            <div class="scarecrow">
              <img src={Scarecrow} alt="Error 404 Scarecrow" />
            </div>
            ;
            <div class="errorMessage">
              <h1>I have bad news for you</h1>
              <p>
                The page you are looking for might be removed or is temporarily
                unavailable.
              </p>
              <div class="button">
                <Link className=" grow" to="/">
                  {" "}
                  BACK TO HOMEPAGE
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
