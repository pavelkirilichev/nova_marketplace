import Wallet from "./Wallet";

function NoAuthSideBar({ messageList, setMessageList }) {
  return (
    <div className="mp__sidebar__right__btn__list">
      <div
        className="mp__sidebar__right__btn__item"
        onClick={() => {
          let arr = messageList.slice();
          if (messageList.length == 15) {
            console.log("over");
            setMessageList(
              messageList.filter((message_item) => message_item.id != 0)
            );
            messageList = [];
          }

          if (arr.length == 0) {
            console.log(0);
            arr.push({
              id: Date.now(),
              title: "Comming Soon",
              class: "message__line message__line--active",
              classItem: "message",
            });
            setMessageList(arr);
          } else {
            setMessageList([
              ...messageList,
              {
                id: Date.now(),
                title: "Comming Soon",
                class: "message__line message__line--active",
                classItem: "message",
              },
            ]);
          }
        }}
      >
        <img src="./img/marketplace/discord_icon.png" />
        <span>Connect discord</span>
      </div>
      <Wallet style={{ with: "100%" }} />
    </div>
  );
}

export default NoAuthSideBar;
