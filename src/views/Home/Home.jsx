import "./index.scss";

import React, { useState } from "react";

import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";
import { Table } from "../../components/Table/Table";
import { todos } from "../../mock/todos";
import { Modal } from "../../components/Modal/Modal";

export const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);
  const [modalType, setmodalType] = useState("");

  function handleToggleModal() {
    setModalVisible(!modalVisible);
  }

  function showAddTodoModal() {
    handleToggleModal();
    setModalInfo({ title: "", completed: false });
    setmodalType("add");
  }

  function showDropTodoModal(todo) {
    handleToggleModal();
    setModalInfo(todo);
    setmodalType("del");
  }

  function showEditTodoModal(todo) {
    handleToggleModal();
    setModalInfo(todo);
    setmodalType("edit");
  }

  return (
    <div className="full-screen">
      <Header />
      <div className="main-home">
        <Title title="Otimize seu tempo e se organize com o nosso Planejador Diário." />
        {!modalVisible && (
          <Table
            data={todos}
            onPressAddIcon={showAddTodoModal}
            onPressDelIcon={showDropTodoModal}
            onPressEditIcon={showEditTodoModal}
          />
        )}
        {modalVisible && (
          <Modal
            toggleModal={handleToggleModal}
            type={modalType}
            info={modalInfo}
          />
        )}
      </div>
    </div>
  );
};
