import React from "react";
import "./index.css";

function Header() {
  return (
    <header className="header">
      <div>
        <a href="https://longwayya.github.io/webScyther/" className="title">
          协议分析器
        </a>

        <a href="./help/help.html" className="a_help">
          帮助文档
        </a>
      </div>
    </header>
  );
}

export default Header;
