import React from "react";
import "./SubmitInfo.scss";

const SubmitInfo = () => {
  return (
    <div className="sidebar__submit-info submit-info">
      <h1 className="submit-info__title">Заявка принята</h1>
      <p className="submit-info__notice">Держите телефон под рукой.</p>
      <p className="submit-info__notice">Скоро с Вами свяжется наш менеджер.</p>
    </div>
  );
};
export default SubmitInfo;
