import "./styles.css";

export default function ClientTestimonials({
  avatar,
  description,
  name,
  role,
}) {
  return (
    <div className="clients">
      <div className="clients-wrapper">
        <img src={avatar} alt={`${name} profile`} />
        <p> {description} </p>
        <div>
          <h4> {name} </h4>
          <span> {role} </span>
        </div>
      </div>
    </div>
  );
}
