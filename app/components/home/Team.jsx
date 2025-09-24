import { teamMembers2 } from "@/data/team";
import React from "react";
import Image from "next/image";
export default function Team() {
  return (
    <div className="container">
      <div className="row mb-70 mb-sm-50">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
          <h2 className="section-title mb-30 mb-sm-20">
            <span className="text-gray">Our</span> Team
            <span className="text-gray">.</span>
          </h2>

          <div className="text-gray mb-30 mb-sm-20">
            <p className="mb-0">
              At <strong>Treasure Global Decor</strong>, our team is a blend of
              creative thinkers, cultural storytellers, and detail-driven
              professionals. We understand that colors, textures, and styles
              speak differently across cultures so we listen, we learn, and we
              design with intention.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-n40">
        {/* Team item */}
        {teamMembers2.map((member, index) => (
          <div key={index} className="col-md-4 mt-40">
            <div className="team-item">
              <div className="team-item-image">
                <Image
                  src={member.image}
                  width={625}
                  height={767}
                  className="wow scaleOutIn"
                  data-wow-duration="1.2s"
                  alt={`Image of ${member.name}`}
                />
                
              </div>
              <div className="team-item-descr">
                <div className="team-item-name">{member.name}</div>
                <div className="team-item-role">{member.role}</div>
              </div>
            </div>
          </div>
        ))}
        {/* End Team item */}
      </div>
    </div>
  );
}
