import { useState } from "react";

function Message({ item, removeMessage }) {
  const [message, setMessage] = useState(item);

  setTimeout(() => {
    setMessage({ ...item, classItem: "message message--active" });
  }, 1000);
  return (
    <div className={message.classItem} key={item.id}>
      <span className="message__title">{message.title}</span>
      <div className="message__line__block ">
        <div className="message__line message__line--active"></div>
      </div>
    </div>
  );
}

export default Message;
