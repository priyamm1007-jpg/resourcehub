import "../styles/featured.css";
import ResourceCard from "./ResourceCard";
import { resources } from "../data/resources";

export default function FeaturedGrid() {
  return (
    <section className="featuredSection">

      <div className="sectionHeader">

        <div>

          <h2>🔥 Featured Resources</h2>

          <p>
            Everything from my latest Instagram reels.
          </p>

        </div>

      </div>

      <div className="featuredGrid">

        {resources.map((resource) => (

          <ResourceCard
            key={resource.id}
            title={resource.title}
            description={resource.description}
            category={resource.category}
            free={resource.free}
          />

        ))}

      </div>

    </section>
  );
}