import React, { useState, useEffect } from "react";

import WhosThatPokemon from "./components/WhosThatPokemon";
import caterpiesil from "./img/caterpiesil.png";
import koffingsil from "./img/koffingsil.png";
import pikachusil from "./img/pikachusil.png";
const App = () => {
  const [imgSrc, setImgSrc] = useState("");

  const silhouettes = [caterpiesil, koffingsil, pikachusil];

  const randPokemon = silhouettes[Math.floor(Math.random() * 3)];

  useEffect(() => {
    if (randPokemon) {
      setImgSrc(randPokemon);
    }
  }, [randPokemon]);

  return (
    <div>
      <WhosThatPokemon randImg={imgSrc} />
    </div>
  );
};

export default App;
