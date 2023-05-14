// Bu dosyayı değiştirmenize gerek yok
import React from "react";

const Yorum = (props) => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { yorumAktarım } = props;

  return (
    <div className="comment-text">
      <span className="user">{yorumAktarım.username}</span>{" "}
      <span className="comment">{yorumAktarım.text}</span>
    </div>
  );
};

export default Yorum;
