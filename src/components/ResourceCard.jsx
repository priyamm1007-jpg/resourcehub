import "../styles/card.css";
export default function ResourceCard({
  title,
  description,
  category,
  website,
  reel,
  free
}) {
  return (
    <div className="resourceCard">

      <div className="cardHeader">

        <div>

          <span className="categoryBadge">
            {category}
          </span>

          <h3>{title}</h3>

          <p>{description}</p>

        </div>

        {free && (
          <span className="freeBadge">
            FREE
          </span>
        )}

      </div>

      <div className="cardButtons">

        <a
          href={website}
          target="_blank"
          rel="noreferrer"
          className="primaryBtn"
        >
          ↗ Open
        </a>

        <a
          href={reel}
          target="_blank"
          rel="noreferrer"
          className="secondaryBtn"
        >
          ▶ Reel
        </a>

      </div>

    </div>
  );
}