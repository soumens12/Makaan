import React from 'react';
import PropertyAgentCard from './PropertyAgentCard';

import team1 from "./team/team-1.jpg";
import team2 from "./team/team-2.jpg";
import team3 from "./team/team-3.jpg";
import team4 from "./team/team-4.jpg";

function PropertyAgent() {
  return (
    <div>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                    <h1 className="mb-3">Property Agents</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4">
                    <PropertyAgentCard image={team1} title="Team 1" fullname="Full Name" designation="Designer"></PropertyAgentCard>
                    <PropertyAgentCard image={team2} title="Team 1" fullname="Full Name" designation="Developer"></PropertyAgentCard>
                    <PropertyAgentCard image={team3} title="Team 1" fullname="Full Name" designation="Designer"></PropertyAgentCard>
                    <PropertyAgentCard image={team4} title="Team 1" fullname="Full Name" designation="Developer"></PropertyAgentCard>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropertyAgent