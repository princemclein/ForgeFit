import "../Css/Facilities.css";
import cardioImg from "../assets/facilities/cardio.jpg";
import functionalImg from "../assets/facilities/functional.jpg";
import recoveryImg from "../assets/facilities/recovery.jpg";
import strengthImg from "../assets/facilities/strength.jpg";

const facilities = [
  {
    title: "Strength Training Area",
    description:
      "A fully equipped space for strength training, muscle building, and power development.",
    image: strengthImg,
  },
  {
    title: "Cardio Area",
    description:
      "Stay active and improve your endurance with modern cardio equipment.",
    image: cardioImg,
  },
  {
    title: "Functional Training Area",
    description:
      "An open space for functional workouts, HIIT, mobility, and bodyweight exercises.",
    image: functionalImg,
  },
  {
    title: "Recovery Area",
    description:
      "A comfortable space to stretch, cool down, and recover after your workout.",
    image: recoveryImg,
  },
];

function Facilities() {
  return (
    <section id="facilities">
      <div>
        <p>OUR FACILITIES</p>

        <h2>Everything You Need to Train Better</h2>

        <p>
          From strength training to recovery, our facilities are designed to
          help you reach your fitness goals.
        </p>
      </div>

      <div>
        {facilities.map((facility) => (
          <article key={facility.title}>
            <img src={facility.image} alt={facility.title} />

            <div>
              <h3>{facility.title}</h3>
              <p>{facility.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Facilities;
