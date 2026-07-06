import "../styles/home.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ResourceCard from "../components/ResourceCard";

export default function Home() {

  const [resources, setResources] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    fetch(
      "https://docs.google.com/spreadsheets/d/1i-ZXpmY7kMCvRsxSnaNS8wDvDfWZA_t3vZwVivi2Fwk/gviz/tq?tqx=out:json"
    )
      .then((res) => res.text())
      .then((text) => {

        const json = JSON.parse(
          text.substring(47).slice(0, -2)
        );

        const rows = json.table.rows;

        const formattedData = rows.map((row) => ({
  id: row.c[0]?.v || "",
  title: row.c[1]?.v || "",
  description: row.c[2]?.v || "",
  category: row.c[3]?.v || "",
  website: row.c[4]?.v || "",
  reel: row.c[5]?.v || "",
  thumbnail: row.c[6]?.v || "",
  featured: row.c[7]?.v || false,
  visibility: row.c[8]?.v || "",
}));

        setResources(formattedData);

      });

  }, []);

  const filteredResources = resources.filter((resource) => {

    const query = search.toLowerCase();

    return (
      resource.title.toLowerCase().includes(query) ||
      resource.description.toLowerCase().includes(query) ||
      resource.category.toLowerCase().includes(query)
    );

  });

  return (
    <>
      <Navbar />

      <Hero
        search={search}
        setSearch={setSearch}
        resources={resources}
      />

      <section className="resourceWrapper">

        <div className="sectionHeader">

          <span className="sectionTag">
            EXPLORE
          </span>

          <h2 className="sectionTitle">
            Useful Resources
          </h2>

          <p className="sectionSubtitle">
            Websites, AI tools, coding roadmaps and everything I've shared.
          </p>

        </div>

        {filteredResources.length === 0 ? (

          <div
            style={{
              textAlign: "center",
              color: "#888",
              padding: "60px 0",
              fontSize: "18px"
            }}
          >
            😕 No resources found.
          </div>

        ) : (

          filteredResources.map((resource, index) => (

  <motion.div
    key={resource.id}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: index * 0.08,
      duration: 0.45,
      ease: "easeOut",
    }}
  >
    <ResourceCard
      title={resource.title}
      description={resource.description}
      category={resource.category}
      website={resource.website}
      reel={resource.reel}
      thumbnail={resource.thumbnail}
      free={resource.featured}
    />
  </motion.div>

))

        )}

      </section>

    </>
  );

}
