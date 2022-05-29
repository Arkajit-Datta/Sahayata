import React from "react";
import GetUserSHG from "../api/hooks/getUserSHG";
import Navbar from "../comps/Navbar";
import SearchResCard from "../comps/SearchResCard";
let shg = [
  {
    phone_number_admin: "968982900773",
    phone_number_members: ["9493786234", "8658322524", "9515617916"],
    name: "RamKrishnan Funds",
    location: "vellore",
    average_annual_income: 404500.0,
    range: "High",
    assurance_rate: 99,
    balance: 8400,
  },
];

function Profile() {
  const user = JSON.parse(localStorage.getItem("signupFormData"));
  user.occupation = "Farming";
  console.log("user from profile page",user);

  const { result,callApi } = GetUserSHG();

  callApi(user.shg_name);


  console.log("INIITAL SGH LOGS", result)

  return (
    <div className="profile-container">
      <Navbar />
      <div className="profile-info">
        <div className="profile-info-header">Your Profile</div>
        <div className="profile-info-details">
          <div className="profile-info-detail">
            Name - &nbsp;&nbsp;
            <div className="profile-info-detail-2">{user.name}</div>
          </div>
          <div className="profile-info-detail">
            Phone Number - &nbsp;&nbsp;
            <div className="profile-info-detail-2">{user.phone_number} </div>
          </div>
          <div className="profile-info-detail">
            Age -&nbsp;&nbsp;
            <div className="profile-info-detail-2">{user.age}</div>
          </div>
          <div className="profile-info-detail">
            Location -&nbsp;&nbsp;
            <div className="profile-info-detail-2">{user.location} </div>
          </div>
          <div className="profile-info-detail">
            Occupation -&nbsp;&nbsp;
            <div className="profile-info-detail-2">
              Farmer
            </div>
          </div>
          <div className="profile-info-detail">
            Annual Income-&nbsp;&nbsp;
            <div className="profile-info-detail-2">{user.annual_income}</div>
          </div>
        </div>
        <div className="profile-info-buttons">
          <div className="profile-info-button">Download Adhaar</div>
          <div className="profile-info-button">Download PAN</div>
        </div>
      </div>
      {console.log(result)}
      {user.admin ===0 ? (
        <div className="profile-shg1">
          Self Help Group Your are part of -
          <div className="profile-shg-cards">
            {user.shg_name === "No Self Help Groups Joined" ? (
              <h6>{user.shg_name}</h6>
            ) : (
              <div class="grid-container">
                
                        <SearchResCard
                          key={1}
                          head={result.name}
                          location={result.location}
                          avgIncome={result.average_annual_income}
                          range={result.range}
                          assurance={result.assurance_rate}
                          text={"Transaction"}
                          
                        />
                    
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="profile-shg1">
          Self Help Group You Created-
          <div className="profile-shg-cards">
            <div class="grid-container">
              {result.length > 0
                ? result.map((val, id) => {
                    console.log(val.description);
                    return (
                      <SearchResCard
                        key={id}
                        head={val.name}
                        location={val.location}
                        avgIncome={val.average_annual_income}
                        range={val.range}
                        assurance={val.assurance_rate}
                        // distance={val.distance}
                      />
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
