import React from "react";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#f2f2f2", padding: 20, textAlign: "center" }}
    >
      <p>
        &copy; {new Date().getFullYear()} Online Store. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
