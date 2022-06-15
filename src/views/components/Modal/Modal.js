import React from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../redux/slices/modalSlice";
import stile from "./modal.module.css";

function Modal() {
  const { modal } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className={stile.container}>
      <section className={stile.modal}>
        <span className={stile.icon}>
          <GrClose
            style={{ color: "red" }}
            onClick={() => dispatch(closeModal())}
          />
        </span>

        <span className={stile.message}>
        {modal.message}
        </span>

      </section>
    </div>
  );
}

export default Modal;
