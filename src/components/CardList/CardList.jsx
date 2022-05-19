import Card from "../Card/Card";
import Create from "../Create/Create";
import "./CardList.scss";

function CardList() {
  return (
    <>
      <div className="cardlist-container">
        <div className="section-title">
          <h1>Professional Profiles</h1>
        </div>
        <div className="card-container">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Create />
    </>
  );
}

export default CardList;
