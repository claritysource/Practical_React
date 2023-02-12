import React, { useEffect, useState } from "react"

import Modal from "./Modal"
import "./HelpModal.css"

const HelpModal = ({
  htmlKey,
  hide,
}) => {
  const [html, setHtml] = useState(null)

  useEffect(() => {
    window.addEventListener("click", e => hide(), {
      useCapture: true,
      once: true,
    });
  }, [hide]);

  useEffect(() => {
    const fetchHTML = async () => {
      const data = await fetch(`/Help/${htmlKey}.html`)
      setHtml(await data.text())
    }

    if (!html) {
      fetchHTML()
    }
  }, [html, htmlKey])

  return (
    <Modal>
      <div className="help-modal-container">
        <div
           dangerouslySetInnerHTML={{__html: html}}
        />
      </div>

      <hr className="help-hr"/>

      <div>
        <button
          className="btn-primary help-modal-okay-button"
          onClick={hide}
        >
          Ok
        </button>
      </div>
    </Modal>
  );
};

export default HelpModal