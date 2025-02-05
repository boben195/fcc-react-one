import "/src/modules/location.css";

const Location = () => {
  return (
    <div className="section-container">
      {/* <article className="lorny">
        <div className="main-image-container">
          <img className="main-image" src="/public/svg/japan.jpg" alt="" />
        </div>
        <span>Japan</span>
        <a href="https://maps.app.goo.gl/KdjQLRzWFwArXPzB8">View on Google</a>
      </article> */}
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          cupiditate suscipit culpa dicta officiis sunt asperiores dolor totam
          quia, qui rem officia eveniet eum itaque nesciunt fuga eos incidunt!
          Suscipit.
        </p>
      </div>
    </div>
  );
};

export default Location;
