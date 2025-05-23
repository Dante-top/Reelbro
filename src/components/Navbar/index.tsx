import React, { useState, useEffect } from "react";
import styles from "./navbar.module.scss";
import { navbarMenuList } from "../../constant/utils";

// import { ToastErrMsg, ToastSuccessMsg } from "../Toast";
// import { deep_blue_color } from '../../scss/custom.scss';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setStyle(styles.bg_color);
      } else {
        setStyle("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeStyle = () => {
    console.log("open: ", open);
    if (!open) {
      setStyle(styles.bg_color);
    } else {
      if (style === "") {
        setStyle(styles.bg_color);
      } else {
        setStyle("");
      }
    }
  };

  return (
    <header className={styles.header} id="mainHeader">
      <nav
        className={`${styles.navbar} ${style} navbar navbar-expand-lg navbar-light bg-lignt`}
      >
        <div className="container-lg">
          <div className="d-flex gap-1 justify-content-center align-items-center">
            <a href="/" className="navbar-brand ">
              <img
                className={styles.nav_logo}
                src="../../assets/img/logo_1.png"
                alt="Logo"
              />
            </a>
            <h1 className="mt-2 d-none d-lg-block">REELBRO</h1>
          </div>
          <button
            type="button"
            className={`navbar-toggler ml-auto ${styles.responsive_button}`}
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            onClick={() => {
              setOpen(!open);
              changeStyle();
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-center ${
              open ? "show" : ""
            }`}
            id="navbarCollapse"
          >
            <div
              className={`${
                styles.navbar_nav
              } justify-content-center align-items-center navbar-nav ms-auto ${
                open ? `${styles.open} align-items-start` : "align-items-center"
              }`}
            >
              {navbarMenuList.map((item, index) => {
                return (
                  <a
                    href={item.href}
                    className={`nav-item nav-link ${styles.menu}`}
                    onClick={() => {
                      setOpen(false);
                    }}
                    key={index}
                  >
                    {item.menu}
                  </a>
                );
              })}
              <a href="https://bit.ly/3FTCS3V" target="_blank" rel="noreferrer">
                <button
                  className={`${styles.walletConnect}`}
                  onClick={() => {}}
                >
                  BUY&nbsp;NOW!
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
