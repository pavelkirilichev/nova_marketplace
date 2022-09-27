import { useState } from "react";
import Bots from "../Components/Bots";
import MainContainer from "../Components/MainContainer";
import NoAuthSideBar from "../Components/NoAuthSidebar";
import Slider from "../Components/Slider";
import AuthSideBar from "./AuthSideBar";

function Home() {
  const [chapter, setChapter] = useState("Marketplase");

  let content = <MainContainer />;

  if (chapter == "Marketplase") {
    content = <MainContainer />;
  } else if (chapter == "Bots") {
    content = <Bots />;
  }

  let sidebar = <AuthSideBar />;

  return (
    <div className="wrapper">
      <div className="mp__main">
        <Slider />
        <div className="mp__sidebar__left">
          <img src="./img/marketplace/logo.png" className="mp__sidebar__logo" />
          <ul className="mp__sidebar__left__list">
            <li
              className="mp__sidebar__left__item"
              onClick={() => {
                setChapter("Marketplase");
              }}
            >
              <div className="mp__sidebar__left__item__inner">
                <span className="mp__sidebar__left__item__text">
                  Marketplase
                </span>
                <div
                  className={
                    chapter == "Marketplase"
                      ? "mp__sidebar__left__item__border-active"
                      : "mp__sidebar__left__item__border"
                  }
                ></div>
              </div>
            </li>
            <li
              className="mp__sidebar__left__item"
              onClick={() => {
                setChapter("Vendors");
              }}
            >
              <div className="mp__sidebar__left__item__inner">
                <span className="mp__sidebar__left__item__text">Vendors</span>
                <div
                  className={
                    chapter == "Vendors"
                      ? "mp__sidebar__left__item__border-active"
                      : "mp__sidebar__left__item__border"
                  }
                ></div>
              </div>
            </li>
            <li
              className="mp__sidebar__left__item"
              onClick={() => {
                setChapter("Dashboard");
              }}
            >
              <div className="mp__sidebar__left__item__inner">
                <span className="mp__sidebar__left__item__text">Dashboard</span>
                <div
                  className={
                    chapter == "Dashboard"
                      ? "mp__sidebar__left__item__border-active"
                      : "mp__sidebar__left__item__border"
                  }
                ></div>
              </div>
            </li>
            <li
              className="mp__sidebar__left__item"
              onClick={() => {
                setChapter("Support");
              }}
            >
              <div className="mp__sidebar__left__item__inner">
                <span className="mp__sidebar__left__item__text">Support</span>
                <div
                  className={
                    chapter == "Support"
                      ? "mp__sidebar__left__item__border-active"
                      : "mp__sidebar__left__item__border"
                  }
                ></div>
              </div>
            </li>
            <li
              className="mp__sidebar__left__item"
              onClick={() => {
                setChapter("Bots");
              }}
            >
              <div className="mp__sidebar__left__item__inner">
                <span className="mp__sidebar__left__item__text">Bots</span>
                <div
                  className={
                    chapter == "Bots"
                      ? "mp__sidebar__left__item__border-active"
                      : "mp__sidebar__left__item__border"
                  }
                ></div>
              </div>
            </li>
          </ul>
        </div>
        {content}
        <div className="mp__sidebar__right">{sidebar}</div>
      </div>
    </div>
  );
}

export default Home;
