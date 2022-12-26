import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const handelToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer">
      <span onClick={handelToTop} className="go_top">
        <FaArrowUp />
      </span>
      <div className="footer_first">
        <img src="images/memory.png" alt="Memory Game" />
        <div className="footer_btn_title_box">
          <p>
            بازی کارت حافظه که با Vanilla js نوشته شده را نیز میتوانید از این
            لینک تجربه کنید.
          </p>
          <a
            target={"_blank"}
            href="https://mohammadyousefvand.github.io/Memory-Card-Game/"
            className="btn_link_to_game"
            rel="noreferrer"
          >
            بزن بریم
          </a>
          <a
            target={"_blank"}
            href="https://github.com/mohammadyousefvand/Memory-Card-Game"
            className="btn_link_to_game"
            rel="noreferrer"
          >
            سورس کد
          </a>
        </div>
      </div>
      <div className="footer_last">
        <span>دسترسی سریع</span>
        <div className="footer_link_box">
          <Link to={"/basket"}>سبد خرید</Link>
          <Link to={"/favorite"}>علاقه مندی ها</Link>
          <a
            target={"_blank"}
            href="https://github.com/mohammadyousefvand/Shoping-card-react"
            rel="noreferrer"
          >
            دیدن سورس کد پروژه در گیت هاب
          </a>
        </div>
      </div>
    </footer>
  );
}
