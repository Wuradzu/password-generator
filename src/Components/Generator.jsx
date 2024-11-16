import { useEffect, useState } from "react";

export function Generator({ userChars }) {
  const MIN = 8;
  const MAX = 25;

  const [pwd, setPwd] = useState("");
  const [pwdLength, setPwdLength] = useState(MIN);
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    userChars.length < pwdLength
      ? setErrMessage(`You use too less chars, must be ${pwdLength} or more`)
      : setErrMessage("");
  }, [pwdLength, userChars]);

  function handlePwdLength(e) {
    e.preventDefault();
    if (!e.target.value || e.target.value > MAX) {
      setPwdLength(MIN);
      return;
    }
    setPwdLength(e.target.value);
  }

  function uniqueGenerate(e) {
    e.preventDefault();
    let newPwd = [];
    while (newPwd.length < pwdLength && userChars.length >= pwdLength) {
      const number = Math.floor((Math.random() * 10 * userChars.length) / 6);
      if (number < userChars.length && !newPwd.includes(userChars[number])) {
        newPwd.push(userChars[number]);
      }
    }
    newPwd.length > 0 && setPwd(newPwd.join(""));
  }

  function generate(e) {
    e.preventDefault();
    let newPwd = [];
    while (newPwd.length < pwdLength && userChars.length >= pwdLength) {
      const number = Math.floor((Math.random() * 10 * userChars.length) / 6);
      if (number < userChars.length) {
        newPwd.push(userChars[number]);
      }
    }
    newPwd.length > 0 && setPwd(newPwd.join(""));
  }

  function pwdCopy(e) {
    e.preventDefault();
    navigator.clipboard.writeText(pwd)
  }

  return (
    <div className="generator-container">
      <div className="generator-container-err">{errMessage}</div>
      <div className="generator-container-content">
        <div className="generator-container-content-pwd">
          <input
            type="number"
            value={pwdLength}
            min={MIN}
            max={MAX}
            onInput={handlePwdLength}
            className="generator-container-content-pwd-length"
          />
          <div className="generator-container-content-pwd-generated-password">{pwd}</div>
          <button onClick={pwdCopy}>Copy</button>
        </div>
        <div className="generator-container-content-generate">
          <button className="generator-container-content-generate-btn" onClick={uniqueGenerate}>Unique Generate</button>
          <button className="generator-container-content-generate-btn" onClick={generate}>Generate</button>
        </div>
      </div>
    </div>
  );
}
