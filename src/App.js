import logo from "./logo.svg";
import { data } from "./data.js";
import { Review } from "./Reviews.js";

function App() {
  return (
    <section className="container">
      {data.map((ele) => {
        return <Review key={ele.id} {...ele}></Review>;
      })}
    </section>
  );
}

export default App;
