import React, { useState, useEffect } from "react";
import "./ColorBox.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ColorBox = ({ background, name }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let t = setTimeout(() => setCopied(false), 1400);
    return () => {
      clearTimeout(t);
    };
  }, [copied]);

  return (
    <CopyToClipboard text={background} onCopy={() => setCopied(true)}>
      <div style={{ background }} className="ColorBox">
        <div
          style={{ background }}
          className={`copy-overlay ${copied && "show"}`}
        ></div>
        <div className={`copy-overlay-msg ${copied && "show"}`}>
          <h2>Copied {background}</h2>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-btn" onClick={() => setCopied(true)}>
            Copy
          </button>
        </div>
        <span className="more">More</span>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
