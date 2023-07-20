import React, { Image, useEffect } from "react";

import CheckBoxChecked from "../../assets/check-checked.png";
import CheckBoxNotChecked from "../../assets/check-notchecked.png";
import TrashIcon from "../../assets/trash.png";
import PenIcon from "../../assets/pen.png";
import AddIcon from "../../assets/plus.png";

import "./index.scss";

export const Table = ({
  data,
  onPressAddIcon,
  onPressDelIcon,
  onPressEditIcon,
}) => {
  return (
    <table className="table">
      <thead>
        <th>Tarefa</th>
        <th>Status</th>
        <th>Opções</th>
      </thead>
      <tbody>
        {data.map((todo) => (
          <tr key={todo.id}>
            <td>
              <div>{todo.title}</div>
            </td>
            <td>
              {todo.completed ? (
                <div>
                  <img src={CheckBoxChecked} alt="Checkbox Checked" />
                </div>
              ) : (
                <div>
                  <img src={CheckBoxNotChecked} alt="Checkbox Checked" />
                </div>
              )}
            </td>
            <td>
              <div>
                <img
                  src={PenIcon}
                  alt="Checkbox Checked"
                  onClick={() => {
                    onPressEditIcon({
                      title: todo.title,
                      completed: todo.completed,
                    });
                  }}
                />
                <img
                  src={TrashIcon}
                  alt="Checkbox Checked"
                  onClick={() => {
                    onPressDelIcon({
                      title: todo.title,
                      completed: todo.completed,
                    });
                  }}
                />
              </div>
            </td>
          </tr>
        ))}
        <tr>
          <td className="italic-text">Nova tarefa ...</td>
          <td></td>
          <td>
            <div>
              <img
                src={AddIcon}
                alt="Checkbox Checked"
                onClick={onPressAddIcon}
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
