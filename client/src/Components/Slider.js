function Slider({ slider, setSlider }) {
  let slider_class;
  if (slider == 0) {
    slider_class = "slider__section ";
  } else if (slider == 1) {
    slider_class = "slider__section slider__section--active";
  } else {
    slider_class = "slider__section slider__section--disable";
  }
  return (
    <div
      className={slider_class}
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          setSlider(2);
          setTimeout(() => {
            setSlider(0);
          }, 250);
        }
      }}
    >
      <div className="slider__container">
        <img
          src="/img/marketplace/slider/close.svg"
          className="slider__close"
          onClick={() => {
            setSlider(2);
            setTimeout(() => {
              setSlider(0);
            }, 250);
          }}
        />
        <div className="slider__main">
          <div className="slider__main__slide">
            <img src="./img/marketplace/slider/cli.svg" />
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
