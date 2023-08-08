import React from "react";
import "./mostread.css";
import warplane from "../../assests/war-planes.jpeg";
const MostRead = () => {
  return (
    <div className="section__padding mostRead__wrapper">
      <div className="mostRead_dropdowns">
        <h1 className="mostRead__heading">Most Read</h1>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                War
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Plot to assassinate Zelenskiy foiled, says Ukraine security
                service; Russia strikes residential building in Pokrovsk,
                killing five. Russia-Ukraine war - latest news updates
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Economy
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Latest From Economy Need to Hire Workers in a Hot Job Market?
                Let Them Do Some Remote Work Employers offering flexible work
                options are hiring at a faster pace than those requiring
                full-time.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Travel
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Latest Travel & Tourism News | TravelPulse Latest Travel &
                Tourism News Today's Top Stories
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="mostRead__img" src={warplane} alt="most read" />
    </div>
  );
};

export default MostRead;
