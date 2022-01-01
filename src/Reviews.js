import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { useContext } from "react";
import { Context } from "./Context";

export const Review = () => {
  const { GetActualEle, DrawRev, NextRev, PrevRev } = useContext(Context);
  const { name, job, image, text } = GetActualEle();
  return (
    <article className="card">
      <div className="cardImgContainer">
        <img src={image} alt={name}></img>
        <div className="cardImgQuotesContaner">
          <FaQuoteRight className="cardImgQuotes"></FaQuoteRight>
        </div>
      </div>
      <div className="cardContentContainer">
        <h1 className="cardContentName">{name}</h1>
        <h2 className="cardContentJob">{job}</h2>
        <p className="cardContentText">{text}</p>
      </div>
      <div className="cardBtnContainer">
        <FaChevronLeft className="cardBtn" onClick={() => PrevRev()} />
        <FaChevronRight className="cardBtn" onClick={() => NextRev()} />
      </div>
      <div className="cardRandomBtnContainer">
        <button className="randomBtn" onClick={() => DrawRev()}>
          Random review
        </button>
      </div>
    </article>
  );
};
