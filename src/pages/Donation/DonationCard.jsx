const DonationCard = ({ donation }) => {
  const { id, img, title, textColor, description, price } =
    donation || {};
  return (
    <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative">
        <img src={img} alt="img-blur-shadow" className="w-full" />
        <div className="absolute bottom-0 bg-[#0B0B0B80] w-full p-7">
          <button
            className={`bg-[${textColor}] px-3 py-2 w-fit text-white font-semibold`}
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DonationCard;
