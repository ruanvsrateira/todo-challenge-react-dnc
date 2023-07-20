import React, { useEffect, useState } from "react";

import "./index.scss";
import { Input } from "../Input/Input";

export const Modal = ({ toggleModal, type, info }) => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setTitle(info.title);
    setCompleted(info.completed);
  }, []);

  if (type == "add")
    return (
      <div className="modal">
        <h1>Deseja Adicionar este item ?</h1>
        <Input
          placeholder="Titulo da tarefa"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Input
          placeholder={"Completada?"}
          type="checkbox"
          value={completed}
          onChange={(event) => setCompleted(event.target.checked)}
        />
        <div className="button-container">
          <button onClick={() => toggleModal()}>Não</button>
          <button onClick={() => toggleModal()}>Sim</button>
        </div>
      </div>
    );
  if (type == "edit")
    return (
      <div className="modal">
        <h1>Deseja Editar este item ?</h1>
        <Input
          placeholder="Titulo da tarefa"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Input
          placeholder={"Completada?"}
          type="checkbox"
          value={completed}
          onChange={(event) => setCompleted(event.target.checked)}
        />
        <div className="button-container">
          <button onClick={() => toggleModal()}>Não</button>
          <button onClick={() => toggleModal()}>Sim</button>
        </div>
      </div>
    );
  if (type == "del")
    return (
      <div className="modal">
        <h1>Deseja Deletar este item ?</h1>
        <h3>
          <span>Titulo:</span> {title}
        </h3>
        <h3>
          <span>Completada:</span> {String(completed)}
        </h3>
        <div className="button-container">
          <button onClick={() => toggleModal()}>Não</button>
          <button onClick={() => toggleModal()}>Sim</button>
        </div>
      </div>
    );
};
