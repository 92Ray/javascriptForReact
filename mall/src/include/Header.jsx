import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
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
            <div className="nav-dropdown">
              <button className="dropdown-toggle" onClick={toggleDropdown}>
                TODO <span className="arrow">▾</span>
              </button>

              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/todo/list" className="nav-link">
                      list
                    </Link>
                  </li>
                  <li>
                    <Link to="/todo/add" className="nav-link">
                      ADD
                    </Link>
                  </li>
                  <li>
                    <Link to="/todo/read/{20}" className="nav-link">
                      READ
                    </Link>
                  </li>
                  <li>
                    <Link to="/todo/modify/" className="nav-link">
                      MODIFY
                    </Link>
                  </li>

                  <li className="divider"></li>
                  <li>
                    <Link to="#" className="nav-link">
                      예비용
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
          {/* 드롭다운 영역 product */}
          <div className="nav-dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              TODO <span className="arrow">▾</span>
            </button>

            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/todo/list" className="nav-link">
                    list
                  </Link>
                </li>
                <li>
                  <Link to="/todo/add" className="nav-link">
                    ADD
                  </Link>
                </li>
                <li>
                  <Link to="/todo/read/{20}" className="nav-link">
                    READ
                  </Link>
                </li>
                <li>
                  <Link to="/todo/modify/" className="nav-link">
                    MODIFY
                  </Link>
                </li>

                <li className="divider"></li>
                <li>
                  <Link to="#" className="nav-link">
                    예비용
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="nav-right">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </div>
      </nav>
    </>
  );
}
