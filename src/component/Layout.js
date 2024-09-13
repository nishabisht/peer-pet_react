import React from "react";
import Footer from "./Footer";

//  to add footer to everypage
const Layout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
