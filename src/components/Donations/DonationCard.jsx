/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  const { id, img, category, title, backgroundColor, textColor } = donation || {};

    return (
      <Link to={`/donation/${id}`}>
        <div
          className={`relative flex flex-col rounded-xl bg-[${backgroundColor}] bg-clip-border shadow-md`}
        >
          <img src={img} alt="Donation" />
          <div className="p-6">
            <small
              className={`bg-${backgroundColor} text-[${textColor}] w-fit p-2 rounded-lg`}
            >
              {category}
            </small>
            <h5
              className={`mb-2 mt-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-[${textColor}] antialiased`}
            >
              {title}
            </h5>
          </div>
        </div>
      </Link>
    );
};

export default DonationCard;
