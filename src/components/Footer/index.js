
import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

 
function Footer() {

        const year = new Date().getFullYear();

  return (
    <footer>
        © Copyright {`${year}`} Jonnovative Designs
    </footer>
  );
}

export default Footer;