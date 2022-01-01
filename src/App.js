import React, { useState } from "react";
import { data } from "./data.js";
import { Review } from "./Reviews.js";
import { Context } from "./Context";

function App() {
  const [actualId, useActualId] = useState(0);
  const GetActualEle = () => {
    return data[actualId];
  };
  const DrawRev = () => {
    useActualId(Math.floor(Math.random() * 4));
  };

  const checkActualId = (num) => {
    if (num < 0) {
      return 3;
    } else if (num > data.length - 1) {
      return 0;
    }
    return num;
  };

  const NextRev = () => {
    useActualId((actualId) => {
      return checkActualId(actualId + 1);
    });
  };

  const PrevRev = () => {
    useActualId(() => {
      return checkActualId(actualId - 1);
    });
  };

  return (
    <Context.Provider value={{ GetActualEle, DrawRev, NextRev, PrevRev }}>
      <section className="container">
        <Review></Review>
      </section>
    </Context.Provider>
  );
}

export default App;
