import React from "react";
import "./Timeline.css";

const Timeline = () => {
  const milestones = [
    { date: "Feb 14, 2022", event: "We met and sparks flew!" },
    { date: "June 5, 2022", event: "Our first adventure together." },
    { date: "Oct 12, 2023", event: "Celebrated our first anniversary." },
  ];

  return (
    <div id="timeline" className="timeline">
      <h2>Our Story</h2>
      <div className="timeline-container">
        {milestones.map((item, index) => (
          <div key={index} className="timeline-item">
            <h3>{item.date}</h3>
            <p>{item.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
