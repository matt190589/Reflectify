import './SocialCard.css';

const StatsCard = ({ userData }) => {
  return (
    <div className="card">
      <div className="card-title">{userData.name.first}</div>
      <div className="card-body">
        <div className="card-image">
          <img src={userData.picture.medium} />
        </div>
      </div>
    </div>
  );
};
export default StatsCard;
