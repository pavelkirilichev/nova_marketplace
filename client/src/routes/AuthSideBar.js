import { useState } from "react";

function AuthSideBar() {
  const [historyActive, setHistoryActive] = useState("");
  const [inventoryActive, setInventoryActive] = useState("");

  return (
    <div className="authSide__main">
      <div className="authSide__main__heading">
        <div className="authSide__main__heading__container">
          <img
            className="authSide__main__heading__icon"
            src="./img/marketplace/authside/icon_frame.svg"
          />
          <span className="authSide__main__heading__title">Glowsee</span>
        </div>

        <div className="authSide__main__heading__content">
          <img src="./img/marketplace/authside/wallet.svg" />
          <span className="authSide__main__heading__content__name">SOL:</span>
          <span>155.2</span>
        </div>
      </div>
      <div
        className="authSide__main__header"
        onClick={() => {
          if (historyActive == "") {
            setHistoryActive(" authSide__main__list-active");
          } else if (historyActive == " authSide__main__list-active") {
            setHistoryActive(" authSide__main__list-disable");
            setTimeout(() => {
              setHistoryActive("");
            }, 500);
          }
        }}
      >
        <span className="authSide__main__header__title">History</span>
        <img src="./img/marketplace/authside/cursor.svg" />
      </div>
      <div className={"authSide__main__list" + historyActive}>
        <div className="authSide__main__list__item">
          <div className="authSide__main__list__item__left">
            <span className="authSide__main__list__item__left__title">
              Discord account
            </span>
            <div className="authSide__main__list__item__left__item">
              <span className="authSide__main__list__item__left__items">
                Date: 16.05.2022
              </span>
              <span className="authSide__main__list__item__left__items">
                Quantity:4
              </span>
            </div>
          </div>
          <div className="authSide__main__list__item__count">
            <span>-155.2</span>
            <span className="authSide__main__heading__content__name">
              $MIND
            </span>
          </div>
        </div>
        <div className="authSide__main__list__item">
          <div className="authSide__main__list__item__left">
            <span className="authSide__main__list__item__left__title">
              Discord account
            </span>
            <div className="authSide__main__list__item__left__item">
              <span className="authSide__main__list__item__left__items">
                Date: 16.05.2022
              </span>
              <span className="authSide__main__list__item__left__items">
                Quantity:4
              </span>
            </div>
          </div>
          <div className="authSide__main__list__item__count">
            <span>-155.2</span>
            <span className="authSide__main__heading__content__name">
              $MIND
            </span>
          </div>
        </div>
        <div className="authSide__main__list__item">
          <div className="authSide__main__list__item__left">
            <span className="authSide__main__list__item__left__title">
              Discord account
            </span>
            <div className="authSide__main__list__item__left__item">
              <span className="authSide__main__list__item__left__items">
                Date: 16.05.2022
              </span>
              <span className="authSide__main__list__item__left__items">
                Quantity:4
              </span>
            </div>
          </div>
          <div className="authSide__main__list__item__count">
            <span>-155.2</span>
            <span className="authSide__main__heading__content__name">
              $MIND
            </span>
          </div>
        </div>
        <div className="authSide__main__list__item">
          <div className="authSide__main__list__item__left">
            <span className="authSide__main__list__item__left__title">
              Discord account
            </span>
            <div className="authSide__main__list__item__left__item">
              <span className="authSide__main__list__item__left__items">
                Date: 16.05.2022
              </span>
              <span className="authSide__main__list__item__left__items">
                Quantity:4
              </span>
            </div>
          </div>
          <div className="authSide__main__list__item__count">
            <span>-155.2</span>
            <span className="authSide__main__heading__content__name">
              $MIND
            </span>
          </div>
        </div>
        <div className="authSide__main__list__item">
          <div className="authSide__main__list__item__left">
            <span className="authSide__main__list__item__left__title">
              Discord account
            </span>
            <div className="authSide__main__list__item__left__item">
              <span className="authSide__main__list__item__left__items">
                Date: 16.05.2022
              </span>
              <span className="authSide__main__list__item__left__items">
                Quantity:4
              </span>
            </div>
          </div>
          <div className="authSide__main__list__item__count">
            <span>-155.2</span>
            <span className="authSide__main__heading__content__name">
              $MIND
            </span>
          </div>
        </div>
        <div className="authSide__main__list__item">
          <div className="authSide__main__list__item__left">
            <span className="authSide__main__list__item__left__title">
              Discord account
            </span>
            <div className="authSide__main__list__item__left__item">
              <span className="authSide__main__list__item__left__items">
                Date: 16.05.2022
              </span>
              <span className="authSide__main__list__item__left__items">
                Quantity:4
              </span>
            </div>
          </div>
          <div className="authSide__main__list__item__count">
            <span>-155.2</span>
            <span className="authSide__main__heading__content__name">
              $MIND
            </span>
          </div>
        </div>
        <div className="authSide__main__list__item">
          <div className="authSide__main__list__item__left">
            <span className="authSide__main__list__item__left__title">
              Discord account
            </span>
            <div className="authSide__main__list__item__left__item">
              <span className="authSide__main__list__item__left__items">
                Date: 16.05.2022
              </span>
              <span className="authSide__main__list__item__left__items">
                Quantity:4
              </span>
            </div>
          </div>
          <div className="authSide__main__list__item__count">
            <span>-155.2</span>
            <span className="authSide__main__heading__content__name">
              $MIND
            </span>
          </div>
        </div>
      </div>
      <div
        className="authSide__main__header"
        onClick={() => {
          if (inventoryActive == "") {
            setInventoryActive(" authSide__main__list-active");
          } else if (inventoryActive == " authSide__main__list-active") {
            setInventoryActive(" authSide__main__list-disable");
            setTimeout(() => {
              setInventoryActive("");
            }, 500);
          }
        }}
      >
        <span className="authSide__main__header__title">Inventory</span>
        <img src="./img/marketplace/authside/cursor.svg" />
      </div>
      <div className={"authSide__main__list" + inventoryActive}>
        <div className="authSide__main__down__list__item">
          <img src="./img/marketplace/authside/discord_icon.svg" />
          <div className="authSide__main__down__list__item__content">
            <span className="authSide__main__list__item__left__title">
              Discord account
            </span>
            <div className="authSide__main__list__item__down">
              <span className="authSide__main__down__title">
                Login:Glowsee1
              </span>
              <span className="authSide__main__down__title">
                Password:324234erkgme
              </span>
            </div>
          </div>
        </div>
        <div className="authSide__main__down__list__item">
          <img src="./img/marketplace/authside/discord_icon.svg" />
          <div className="authSide__main__down__list__item__content">
            <span className="authSide__main__list__item__left__title">
              Discord account
            </span>
            <div className="authSide__main__list__item__down">
              <span className="authSide__main__down__title">
                Login:Glowsee1
              </span>
              <span className="authSide__main__down__title">
                Password:324234erkgme
              </span>
            </div>
          </div>
        </div>
        <div className="authSide__main__down__list__item">
          <img src="./img/marketplace/authside/discord_icon.svg" />
          <div className="authSide__main__down__list__item__content">
            <span className="authSide__main__list__item__left__title">
              Discord account
            </span>
            <div className="authSide__main__list__item__down">
              <span className="authSide__main__down__title">
                Login:Glowsee1
              </span>
              <span className="authSide__main__down__title">
                Password:324234erkgme
              </span>
            </div>
          </div>
        </div>
        <div className="authSide__main__down__list__item">
          <img src="./img/marketplace/authside/discord_icon.svg" />
          <div className="authSide__main__down__list__item__content">
            <span className="authSide__main__list__item__left__title">
              Discord account
            </span>
            <div className="authSide__main__list__item__down">
              <span className="authSide__main__down__title">
                Login:Glowsee1
              </span>
              <span className="authSide__main__down__title">
                Password:324234erkgme
              </span>
            </div>
          </div>
        </div>
        <div className="authSide__main__down__list__item">
          <img src="./img/marketplace/authside/discord_icon.svg" />
          <div className="authSide__main__down__list__item__content">
            <span className="authSide__main__list__item__left__title">
              Discord account
            </span>
            <div className="authSide__main__list__item__down">
              <span className="authSide__main__down__title">
                Login:Glowsee1
              </span>
              <span className="authSide__main__down__title">
                Password:324234erkgme
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthSideBar;
