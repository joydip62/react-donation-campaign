import { useEffect, useState } from "react";


const Statistics = () => {

    const [totalDonationPrice, setTotalDonationPrice] = useState(0);

    useEffect(() => {
          const donateItem = JSON.parse(localStorage.getItem("donations"));
          const donationPrice = donateItem.reduce(
            (preItem, currItm) => preItem + currItm.price,
            0
          );
          setTotalDonationPrice(donationPrice);

      }, []);
    

    
    return (
      <div>
        <h1 className="block m-auto w-full text-5xl font-semibold">Your Total Donation {totalDonationPrice}</h1>
      </div>
    );
};

export default Statistics;
