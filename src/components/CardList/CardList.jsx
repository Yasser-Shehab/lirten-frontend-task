import Card from "../Card/Card";
import Create from "../Create/Create";
import axios from "axios";
import "./CardList.scss";
import { useEffect, useState } from "react";
import SkeletonElement from "../Seketon/SkeletonElement";
import { SkeletonCarosel } from "../Seketon/SkeletonCarosel";

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
  if (profiles && profiles.length !== 0) {
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
                  id={profile._id}
                  key={profile._id}
                  firstname={profile.firstname}
                  lastname={profile.lastname}
                  job={profile.jobTitle}
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
  } else {
    return (
      <>
        <div className="cardlist-container">
          <div className="section-title">
            <h1>Professional Profiles</h1>
          </div>
          <div className="skeleton-container">
            <SkeletonCarosel />
          </div>
        </div>
        <Create />
      </>
    );
  }
}

export default CardList;
