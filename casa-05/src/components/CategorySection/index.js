import "./styles.css";

export default function CategorySection({ title, description, classe }) {
  return (
    <div className={`${classe ? classe : ""} category-content`}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
