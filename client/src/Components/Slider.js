function Slider({ slider, setSlider, sliderData }) {
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
      {slider > 0 ? (
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
            <div className="slider__left">
              <div
                className="slider__main__slide"
                style={{
                  backgroundImage: `url(/img/marketplace/${sliderData.image_name})`,
                }}
              ></div>
            </div>
            <div className="slider__form">
              <div className="slider__form__inner">
                <div className="slider__form__item">
                  <span>Adress 1</span>
                  <input type="text" />
                </div>
                <div className="slider__form__item">
                  <span>Adress 1</span>
                  <input type="text" />
                </div>
                <div className="slider__form__item">
                  <span>Adress 1</span>
                  <input type="text" />
                </div>
                <div className="slider__form__item">
                  <span>Adress 1</span>
                  <input type="text" />
                </div>
                <div className="slider__form__item">
                  <span>Adress 1</span>
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="slider__info">
            <p className="slider__info__text">{sliderData.description}</p>
            <div className="slider__info__border"></div>
            <div className="slider__info__right">
              <div className="slider__info__checkout">
                <div className="slider__info__checkout__inner">Checkout</div>
                <div className="slider__info__checkout__count">1</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Slider;
