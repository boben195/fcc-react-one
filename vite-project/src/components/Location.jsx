import "/src/modules/location.css";

const Location = () => {
  // const hours = new Date().getHours();
  // let timeOfDay;

  // if (hours < 12) {
  //   timeOfDay = "morning";
  // } else if (hours >= 12 && hours < 17) {
  //   timeOfDay = "afternoon";
  // } else if (hours < 21) {
  //   timeOfDay = "evening";
  // } else {
  //   timeOfDay = "night";
  // }

  return (
    <div className="section-container">
      <img className="japan-img" src="/public/svg/japan.jpg" alt="japan" />
      <div className="location-container">
        <img
          src="/public/svg/location.svg"
          alt="Location Icon"
          width="15"
          height="15"
        />

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          maiores?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia cum sit
          eius pariatur sequi sint?
        </p>
      </div>
    </div>
  );
};

export default Location;
