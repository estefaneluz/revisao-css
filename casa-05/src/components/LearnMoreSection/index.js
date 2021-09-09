import "./styles.css";

export default function LearnMoreSection({ title, description, img, classe }) {
  return (
    <div className={`${classe ? classe : ""} learn-more-container`}>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="/">Learn More</a>
      </div>
      <div className="half-img">
        <img src={img} alt={`Ilustração de ${title}`} />
      </div>
    </div>
  );
}
