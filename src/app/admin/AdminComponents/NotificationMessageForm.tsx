import React from "react";

const NotificationMessageForm = () => {
  return (
    <form className="notificationForm my-4">
      <input type="text" placeholder="User Id" name="userId" />
      <input type="text" placeholder="Username" name="userName" />
      <input
        type="text"
        placeholder="Type  (warning, blocked, or Achevments)"
        name="messageType"
      />
      <textarea rows={5} cols={23} placeholder="message" name="message" />
      <button type="submit">Update Query</button>
    </form>
  );
};

export default NotificationMessageForm;
