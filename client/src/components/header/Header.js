import React from "react";
import "./Header.css";
import { motion } from "framer-motion";
import t_logo from "../t.png";

export default function Header() {
  return (
    <div className="header">
      <div id="headerBody">
        <h3>
          <a href="/">The Traveller</a>
        </h3>
      </div>
      <img src={t_logo}></img>
    </div>
  );
}
