import { latters, numbers, pwdChars } from "./util";

export function Characters({ userChars, setUserChars }) {
  const handlePwdChars = pwdChars.map((char, index) => {
    return (
      <p
        className="handle-char"
        key={index}
        onClick={() => {
          if (userChars.includes(char)) {
            const index = userChars.indexOf(char);
            setUserChars([
              ...userChars.slice(0, index),
              ...userChars.slice(index + 1),
            ]);
          } else {
            setUserChars([...userChars, char]);
          }
        }}
      >
        {char}
      </p>
    );
  });

  return (
    <div className="characters-container">
      <h2>Here you can see character which we will use for your password:</h2>
      <div className="characters-container-length">
        <div className="characters-container-length-current">(current length: {userChars.length})</div>
        <button
          onClick={() => setUserChars([...latters.join("").toUpperCase()])}
        >
          Capital
        </button>
        <button onClick={() => setUserChars([...latters])}>Small</button>
        <button
          onClick={() =>
            setUserChars([...latters.join("").toUpperCase(), ...latters])
          }
        >
          Capital and Small
        </button>
        <button onClick={() => setUserChars([...numbers])}>Numbers</button>
        <button
          onClick={() =>
            setUserChars([...latters.join("").toUpperCase(), ...numbers])
          }
        >
          Capital and numbers
        </button>
        <button onClick={() => setUserChars([...latters, ...numbers])}>
          Small and numbers
        </button>
        <button
          onClick={() =>
            setUserChars([
              ...latters.join("").toUpperCase(),
              ...latters,
              ...numbers,
            ])
          }
        >
          {" "}
          Capital, small and numbers
        </button>
        <button onClick={() => setUserChars([])}>CLEAR</button>
        <button onClick={() => setUserChars([...pwdChars])}>USE ALL</button>
      </div>
      <div className="characters-container-user-chars">{userChars.length > 0 ? userChars : "Empty"}</div>
      <h4 className="characters-container-default-chars-header">
        We will use this base characters (click for off/on char in your
        password):
      </h4>
      <div className="characters-container-default-chars">{handlePwdChars}</div>
    </div>
  );
}
