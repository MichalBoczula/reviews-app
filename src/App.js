import React, { useState } from "react";
import { data } from "./data.js";
import { Review } from "./Reviews.js";

function App() {
  const [actualId, useActualId] = useState(0);
  const ele = data[actualId];

  const DrawReview = () => {
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
    <section className="container">
      <Review
        key={ele.id}
        {...ele}
        drawRev={DrawReview}
        nextRev={NextRev}
        prevRev={PrevRev}
      ></Review>
      ;
    </section>
  );
}

export default App;
