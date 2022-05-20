import Card from "../Card/Card";
import Create from "../Create/Create";
import axios from "axios";
import "./CardList.scss";
import { useEffect, useState } from "react";

function CardList() {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/profile/all")
      .then((res) => {
        setProfiles(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="cardlist-container">
        <div className="section-title">
          <h1>Professional Profiles</h1>
        </div>
        <div className="card-container">
          {profiles.map((profile) => {
            return (
              <Card
                key={profile.id}
                id={profile.id}
                firstname={profile.firstname}
                lastname={profile.lastname}
                job={profile.job}
                email={profile.email}
                country={profile.country}
                state={profile.state}
              />
            );
          })}
        </div>
      </div>
      <Create />
    </>
  );
}

export default CardList;
