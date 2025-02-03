import "/src/modules/location.css";

const Location = () => {
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          ipsam vel, odit et sunt esse, porro odio officia accusantium repellat
          eum quidem quisquam doloribus architecto soluta consequuntur delectus
          mollitia asperiores?
        </p>
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
