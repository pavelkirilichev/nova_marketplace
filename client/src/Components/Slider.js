function Slider() {
  return (
    <div className="slider__section">
      <div className="slider__container">
        <div className="slider__main">
          <div className="slider__main__slide">
            <div className="slider__main__slide__arrow slider__arrow-left">
              <img src="./img/marketplace/slider/arrow.svg" />
            </div>
            <img src="./img/marketplace/slider/cli.svg" />
            <div className="slider__main__slide__arrow">
              <img src="./img/marketplace/slider/arrow.svg" />
            </div>
          </div>
        </div>
        <div className="slider__info">
          <p className="slider__info__text">
            Many many text many many text many text many many text many text
            many many text many text many many text vany many text many many
            text many text many many text many text many many text many text
            many many text many many text many text many many text many text
            many many text
          </p>
          <div className="slider__info__border"></div>
          <div className="slider__info__right">
            <div className="slider__info__checkout">
              <div className="slider__info__checkout__inner">Checkout</div>
              <div className="slider__info__checkout__count">1</div>
            </div>
            <span className="slider__info__stock">Stock: 1000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
