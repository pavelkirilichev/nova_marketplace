import Wallet from "./Wallet";

function NoAuthSideBar() {
  return (
    <div className="mp__sidebar__right__btn__list">
      <div className="mp__sidebar__right__btn__item">
        <img src="./img/marketplace/discord_icon.png" />
        <span>Connect discord</span>
      </div>
      <Wallet />
    </div>
  );
}

export default NoAuthSideBar;
