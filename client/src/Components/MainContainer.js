import { useState, useEffect } from "react";
import Slider from "../Components/Slider";

function MainContainer({ setSlider, setSliderData }) {
  const [goods, setGoods] = useState();

  useEffect(() => {
    fetch("/goods")
      .then((response) => response.json())
      .then((data) => {
        setGoods(data);
      });
  }, []);
  return (
    <div className="mp__content">
      <div className="mp__main__container">
        <div className="mp__banner">
          <div className="mp__banner__title-div">
            <span className="mp__banner__title">NOVA MIND</span>
            <span className="mp__banner__subtitle">MARKET</span>
          </div>
          <p className="mp__banner__content">
            Many many text many many text many text many many text many text
            many many text many text many many text vany many text many many
            text many text many many text many text many many text many text
            many many text many many text many text many many text many text
            many many text
          </p>
        </div>
        <div className="mp__popular-goods">
          <span className="mp__popular-goods__title">POPULAR GOODS</span>
          <ul className="mp__popular-goods__list">
            {typeof goods != "undefined"
              ? goods
                  .sort((prev, next) => next.orders - prev.orders)
                  .map((good) => {
                    return (
                      <li
                        className="mp__popular-goods__item"
                        onClick={() => {
                          console.log("ok");
                          setSlider(1);
                          setSliderData(good);
                        }}
                      >
                        <div
                          className="mp__popular-goods__item__icon"
                          style={{
                            backgroundImage: `url(/img/marketplace/${good.image_name})`,
                          }}
                        ></div>
                        <div className="mp__popular-goods__item__inner">
                          <div className="mp__popular-goods__item__inner__top">
                            <span className="mp__popular-goods__item__inner__title">
                              {good.title}
                            </span>
                            <p className="mp__popular-goods__item__inner__subtitle">
                              {good.description_short}
                            </p>
                          </div>
                          <div className="mp__popular-goods__item__inner__bottom">
                            <span>{good.price}$Mind</span>
                          </div>
                        </div>
                      </li>
                    );
                  })
              : ""}
          </ul>
        </div>
        <div className="mp__goods">
          <span className="mp__goods__title">GOODS</span>
          <ul className="mp__goods__list">
            {typeof goods != "undefined"
              ? goods.map((good) => {
                  return (
                    <li
                      className="mp__goods__item"
                      onClick={() => {
                        setSlider(1);
                        setSliderData(good);
                      }}
                    >
                      <div className="mp__goods__item__inner">
                        <div
                          className="mp__goods__item__image"
                          style={{
                            backgroundImage: `url(/img/marketplace/${good.image_name})`,
                          }}
                        ></div>
                        <div className="mp__goods__item__inner__info">
                          <span className="mp__goods__item__info__title">
                            {good.title}
                          </span>
                          <p className="mp__goods__item__info__subtitle">
                            {good.description_short}
                          </p>
                        </div>
                        <div className="mp__goods__item__info__bottom">
                          <span>{good.price}$Mind</span>
                        </div>
                      </div>
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
