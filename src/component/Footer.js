import React from "react";
import style from "../style/Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <p className={style.footerText}>
          &copy; 2024 Pet Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
