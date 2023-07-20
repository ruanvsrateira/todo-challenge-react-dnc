import React from "react";

import "./index.scss";

export const Header = () => {
  return (
    <header className="header">
      <ul>
        <li>Organização</li>
        <li className="selected-tab">Tarefas</li>
      </ul>
    </header>
  );
};
