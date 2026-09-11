import { useState } from "react";
import Reveal from "./Reveal.jsx";

const TEAM = [
  {
    name: "Arun Kumar Nathan",
    role: "CFO / Navigator",
    photo: "/assets/team-arun.png",
    bio: "Arun brings vast 40+ years of experience in leading large multi-national corporations and brings the edge of corporate thinking to an otherwise largely unorganized industry. An alumnus of Birla Institute of Technology, Mesra and IIM Ahmedabad, besides having participated in several other technical and management training programs, he brings a wealth of managerial and leadership experience through his multiple domain knowledge and wide network of acquaintances. He was in senior managerial positions in SIEMENS across Germany, Iran and India, and later CEO of the Indian subsidiary of the German MNC RITTAL, and later served as Advisor and Member of the Board of several other MNCs established in India. Besides being skilled in all aspects of management, Arun is also widely travelled across the globe and is fluent in many languages including German.",
  },
  {
    name: "Rahul Nathan",
    role: "Navigator",
    photo: "/assets/team-rahul.png",
    bio: "Rahul brings about 21+ years of industry experience in the Hospitality, Information Technology, entrepreneurship and Entertainment industry. He has produced a movie, done casting for a few advertisements and been part of several entertainment ventures. Currently an active part of the proprietary foods industry, Internet of Things and Entertainment industry, customer satisfaction and customer-focused solutioning is always on his mind. Currently he has business stakes in several companies like Aloe Plus, Indo Bio Organics, Riot Labz and now Unruffled Feathers.",
  },
];

function TeamRow({ member, index }) {
  const [expanded, setExpanded] = useState(false);
  const reversed = index % 2 === 1;

  return (
    <div className={`team-row ${reversed ? "team-row-reverse" : ""}`}>
      <Reveal variant={reversed ? "right" : "left"} className="team-row-photo">
        <div className="team-photo">
          <div className="team-photo-frame">
            <img src={member.photo} alt={member.name} />
          </div>
        </div>
      </Reveal>

      <Reveal
        variant={reversed ? "left" : "right"}
        delay={120}
        className="team-row-info"
        data-index={String(index + 1).padStart(2, "0")}
      >
        <h3>{member.name}</h3>
        <span className="team-role">{member.role}</span>
        <p className={`team-bio ${expanded ? "expanded" : ""}`}>{member.bio}</p>
        <button className="team-more" onClick={() => setExpanded((v) => !v)}>
          {expanded ? "Read less" : "Read more"}
        </button>
      </Reveal>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Our Team</span>
          <h2 className="section-title">
            The people behind the <em>platform</em>
          </h2>
          <p className="section-lead">
            Decades of combined leadership across corporate strategy,
            entrepreneurship and human resources — guiding Unruffled
            Feathers forward.
          </p>
        </Reveal>

        <div className="team-rows">
          {TEAM.map((member, i) => (
            <TeamRow key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
