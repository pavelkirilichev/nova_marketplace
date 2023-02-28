import { useState, useEffect } from "react";
import Bots from "../Components/Bots";
import MainContainer from "../Components/MainContainer";
import Message from "../Components/Message";
import NoAuthSideBar from "../Components/NoAuthSidebar";
import Slider from "../Components/Slider";
import AuthSideBar from "./AuthSideBar";

import { useMemo } from "react";
import { clusterApiUrl } from "@solana/web3.js";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  CoinbaseWalletAdapter,
  GlowWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

require("@solana/wallet-adapter-react-ui/styles.css");

function Home() {
  const network = WalletAdapterNetwork.Mainnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new CoinbaseWalletAdapter(),
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network]
  );

  const [slider, setSlider] = useState(0);
  const [sliderData, setSliderData] = useState({});
  const [chapter, setChapter] = useState("Marketplase");

  let content;

  if (chapter == "Marketplase") {
    content = (
      <MainContainer setSlider={setSlider} setSliderData={setSliderData} />
    );
  } else if (chapter == "Bots") {
    content = <Bots />;
  }
  const [messageList, setMessageList] = useState([]);

  let sidebar = (
    <NoAuthSideBar messageList={messageList} setMessageList={setMessageList} />
  );

  function removeMessage(id) {
    setMessageList(messageList.filter((message_item) => message_item.id != id));
  }

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="wrapper">
            <div className="messages">
              {messageList.length != 0
                ? messageList.map((message) => (
                    <Message item={message} removeMessage={removeMessage} />
                  ))
                : ""}
            </div>
            <Slider
              slider={slider}
              setSlider={setSlider}
              sliderData={sliderData}
            />
            <div className="mp__main">
              <div className="mp__sidebar__left">
                <img
                  src="./img/marketplace/logo.png"
                  className="mp__sidebar__logo"
                  onClick={() => {
                    setChapter("Marketplase");
                  }}
                />
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
                      <span className="mp__sidebar__left__item__text">
                        Vendors
                      </span>
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
                      setChapter("Bots");
                    }}
                  >
                    <div className="mp__sidebar__left__item__inner">
                      <span className="mp__sidebar__left__item__text">
                        Dashboard
                      </span>
                      <div
                        className={
                          chapter == "Bots"
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
                      <span className="mp__sidebar__left__item__text">
                        Support
                      </span>
                      <div
                        className={
                          chapter == "Support"
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
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default Home;
