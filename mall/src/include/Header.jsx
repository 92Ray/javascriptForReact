import React, { useState } from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const loginState = useSelector((state) => state.loginSlice);

  //변수선언

  //이벤트 핸들러
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsProductDropdownOpen(false);
  };
  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <nav className="custom-navbar">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/" className="nav-link">
              MAIN
            </Link>
            <Link to="/about" className="nav-link">
              ABOUT
            </Link>

            {/* 드롭다운 영역 */}
            {loginState.email ? (
              <>
                <div className="nav-dropdown">
                  <button className="dropdown-toggle" onClick={toggleDropdown}>
                    TODO <span className="arrow">▾</span>
                  </button>

                  {isDropdownOpen && (
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/todo/list">LIST</Link>
                      </li>
                      <li>
                        <Link to="/todo/add">ADD</Link>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <a href="#">예비용</a>
                      </li>
                    </ul>
                  )}
                </div>
                {/* 드롭다운 영역 */}
                <div className="nav-dropdown">
                  <button
                    className="dropdown-toggle"
                    onClick={toggleProductDropdown}
                  >
                    PRODUCT <span className="arrow">▾</span>
                  </button>

                  {isProductDropdownOpen && (
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/product/list">LIST</Link>
                      </li>
                      <li>
                        <Link to="/product/add">ADD</Link>
                      </li>
                      <li className="divider"></li>
                      <li>
                        <a href="#">예비용</a>
                      </li>
                    </ul>
                  )}
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="nav-right">
            {!loginState.email ? (
              <Link to="/member/login" className="login-link">
                Login
              </Link>
            ) : (
              <Link to="/member/logout" className="login-link">
                Logout
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
