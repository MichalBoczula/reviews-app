import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export const Review = ({ name, job, image, text }) => {
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
        <FaChevronLeft className="cardBtn" />
        <FaChevronRight className="cardBtn" />
      </div>
      <div className="cardRandomBtnContainer">
        <button className="randomBtn">Random review</button>
      </div>
    </article>
  );
};
