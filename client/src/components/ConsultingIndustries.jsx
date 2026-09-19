import Reveal from "./Reveal.jsx";

const INDUSTRIES = [
  {
    title: "Hotel Business Consulting",
    tag: "Hospitality",
    image: "/assets/industry-hotel.jpg",
    items: [
      "Revenue management & dynamic pricing",
      "Guest experience design",
      "F&B concept development",
      "Staff training & SOPs",
      "OTA strategy & direct-booking growth",
    ],
  },
  {
    title: "Coffee Consulting",
    tag: "Food & Beverage",
    image: "/assets/industry-coffee.jpg",
    items: [
      "Sourcing & bean-quality evaluation",
      "Café concept & menu engineering",
      "Barista training & service SOPs",
      "Roastery setup & equipment selection",
      "Retail & franchise rollout",
    ],
  },
  {
    title: "Indian Premium Foods Consulting",
    tag: "Food & Beverage",
    image: "/assets/industry-food.jpg",
    items: [
      "Product development for premium/organic lines",
      "Speciality-ingredient sourcing & supply chain",
      "Regulatory & food-safety compliance (FSSAI)",
      "Packaging & shelf strategy",
      "Export readiness",
    ],
  },
  {
    title: "Aviation Consulting",
    tag: "Aviation",
    image: "/assets/industry-aviation.jpg",
    items: [
      "Ground handling & passenger-experience design",
      "Staffing, training & SOPs",
      "Vendor & partner onboarding",
      "Technology enablement for operations",
    ],
  },
  {
    title: "Automobiles Software Consulting",
    tag: "Mobility",
    image: "/assets/industry-automobiles.jpg",
    items: [
      "Dealer management system (DMS) selection & implementation",
      "CRM & lead management for auto retail",
      "Telematics & fleet-data integration",
      "Digital showroom & online sales enablement",
    ],
  },
];

export default function ConsultingIndustries() {
  return (
    <section id="industries" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Consulting Beyond Technology</span>
          <h2 className="section-title">
            Hands-on experience, <em>industry by industry</em>
          </h2>
          <p className="section-lead">
            Our consultants bring hands-on operating experience across
            hospitality, food, aviation and mobility — applying the same
            structured, data-informed approach to each industry's specific
            challenges.
          </p>
        </Reveal>

        <div className="opportunity-grid">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 100} variant="zoom" className="opportunity-card">
              {ind.image && (
                <div className="opportunity-card-photo">
                  <img src={ind.image} alt="" />
                </div>
              )}
              <span className="tag">{ind.tag}</span>
              <h3>{ind.title}</h3>
              <ul>
                {ind.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
