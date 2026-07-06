import "../styles/card.css";
import { motion } from "framer-motion";

export default function ResourceCard({
  title,
  description,
  category,
  website,
  reel,
  thumbnail
}) {
  return (
    <motion.article
      className="resourceCard"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -8 }}
    >

      {thumbnail && (
        <img
          src={thumbnail}
          alt={title}
          className="cardThumbnail"
        />
      )}

      <span className="categoryBadge">
        {category.toUpperCase()}
      </span>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="cardButtons">

        <a
          href={website}
          target="_blank"
          rel="noreferrer"
          className="primaryBtn"
        >
          Visit Site ↗
        </a>

        <a
          href={reel}
          target="_blank"
          rel="noreferrer"
          className="secondaryBtn"
        >
          Watch Reel →
        </a>

      </div>

    </motion.article>
  );
}
