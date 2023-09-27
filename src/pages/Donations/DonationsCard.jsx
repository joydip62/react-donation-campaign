import React from "react";

const DonationsCard = ({ donate }) => {
  const { id, img, category, title, backgroundColor, textColor, price } =
    donate || {};

  return (
    <div>
      <div
        className={`relative flex w-full max-w-[48rem] flex-row rounded-xl bg-[${backgroundColor}] bg-clip-border shadow-md`}
      >
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border">
          <img src={img} alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <h6
            className={`w-fit rounded-lg mb-4 px-3 py-1 block font-sans text-base font-semibold leading-relaxed tracking-normal text-[${textColor}] bg-[${backgroundColor}] antialiased`}
          >
            {category}
          </h6>
          <h4
            className={`mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-[${textColor}] antialiased`}
          >
            {title}
          </h4>
          <p
            className={`mb-5 block font-sans font-semibold text-base leading-relaxed text-[${textColor}] antialiased`}
          >
            ${price}
          </p>
          <button
            className={`bg-[${textColor}] text-white px-3 py-2 rounded-xl`}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationsCard;
