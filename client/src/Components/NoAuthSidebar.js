import Wallet from "./Wallet";

function NoAuthSideBar({ messageList, setMessageList }) {
  return (
    <div className="mp__sidebar__right__btn__list">
      <div
        className="mp__sidebar__right__btn__item"
        onClick={() => {
          let arr;
          if (typeof messageList != "undefined") {
            arr = messageList.slice();
          } else {
            arr = [];
          }

          let index;
          if (arr.length == 0) {
            index = 0;
          } else {
            index = arr.length;
          }

          console.log(index);
          let id = Date.now();
          arr.push({
            id: id,
            title: "Comming Soon",
            class: "message__line",
            classItem: "message",
          });
          setMessageList(arr);
          setTimeout(() => {
            arr[index] = {
              id: id,
              title: "Comming Soon",
              class: "message__line message__line--active",
              classItem: "message",
            };
            setMessageList(arr);
            setTimeout(() => {
              arr[index] = {
                id: id,
                title: "Comming Soon",
                class: "message__line message__line--active",
                classItem: "message message--active",
              };
              setMessageList(arr);
              setTimeout(() => {
                setMessageList(
                  arr.filter((message_item) => message_item.id != id)
                );
              }, 500);
            }, 4000);
          }, 100);
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
