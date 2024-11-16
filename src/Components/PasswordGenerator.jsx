import { useState } from "react";
import { Generator } from "./Generator";
import { pwdChars } from "./util";
import { Characters } from "./Characters";

export function PasswordGenerator() {
  const [userChars, setUserChars] = useState([...pwdChars]);

  return (
    <div className="pwd-gen-container">
      <header className="pwd-gen-header">
        <div className="pwd-gen-header-element">Password Generator</div>
      </header>
      <Generator userChars={userChars} />
      <Characters userChars={userChars} setUserChars={setUserChars} />
    </div>
  );
}
