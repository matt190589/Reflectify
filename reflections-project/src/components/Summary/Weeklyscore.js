import "./Weeklyscore.css";

const Weeklyscore = ({ Weeklyscore }) => {
  return (
    <div className="weekly-score">
      <p>Topic: {Weeklyscore.street.name}</p>
      <p>Weekly score: {Weeklyscore.city}</p>
      <p>Improvement: {Weeklyscore.country}</p>
    </div>
  );
};

export default Weeklyscore;
