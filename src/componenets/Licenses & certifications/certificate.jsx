import React from "react";
import "./certificate.css";
import Cloud from '../../assets/cloud.jpg'
import De from '../../assets/dev.jpg'
import da from '../../assets/data.jpg'
import python from '../../assets/thoin.jpg'
import sec from '../../assets/sec.jpg'

export default function Certificates() {
  return (
    <section id="certificates">
      <h2>My Certificates</h2>
      <div className="certificate_container">
        <div className="certificate">
          <div className="certificate_card">
            <img src={Cloud} alt="" />
            <h4></h4>
          </div>
          <div className="certificate_card">
            <img src={De} alt="" />
            <h4></h4>
          </div>
          <div className="certificate_card">
            <img src={sec} alt="" />
            <h4></h4>
          </div>
          <div className="certificate_card">
            <img src={python} alt="" />
            <h4></h4>
          </div>
          <div className="certificate_card">
            <img src={da} alt="" />
            <h4></h4>
          </div>
        </div>
      </div>
    </section>
  );
};

