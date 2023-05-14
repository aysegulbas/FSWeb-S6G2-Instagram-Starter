import React from "react";
import Yorum from "./Yorum";
import "./Yorumlar.css";

const Yorumlar = (props) => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { yorumlarAktarım } = props;

  return (
    <div>
      {/* her gönderi yorumları için map'le işleyerek bir Yorum bileşeni döndürün (proplarına dikkat ederek)*/
      yorumlarAktarım.map((y, i) => (
        <Yorum key={i} yorumAktarım={y} />
      ))}
    </div>
  );
};

export default Yorumlar;
