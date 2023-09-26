import toast, { Toaster } from "react-hot-toast";
import swal from "sweetalert";


const DonationCard = ({ donation }) => {
    const { id, img, title, textColor, description, price } = donation || {};
    
    const handleAddToDonate = () => {

        const addDonateItem = [];

        const donateItem = JSON.parse(localStorage.getItem('donations'))


            if (!donateItem) {
                addDonateItem.push(donation)
                localStorage.setItem("donations", JSON.stringify(addDonateItem));
                // toast("Thank you for donation.");
                swal("Thank you", "Thank you for donation.", "success");
            } else {
                const isExits = donateItem.find(donation => donation.id == id)
                if (!isExits) {
                    addDonateItem.push(...donateItem, donation);
                    localStorage.setItem(
                      "donations",
                      JSON.stringify(addDonateItem)
                    );
                } else {
                    // toast("Thank you. Already Added");
                    swal("Oops!", "The donation already added.", "error");
                }
                
        }
    }
  return (
    <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative">
        <img src={img} alt="img-blur-shadow" className="w-full" />
        <div className="absolute bottom-0 bg-[#0B0B0B80] w-full p-7">
          <button
            className={`bg-[${textColor}] px-3 py-2 w-fit text-white font-semibold`}
            onClick={handleAddToDonate}
          >
            Donate ${price}
          </button>
          <Toaster />
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
