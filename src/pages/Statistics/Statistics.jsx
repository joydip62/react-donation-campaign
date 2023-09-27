/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const donations = useLoaderData();
  const [totalDonationPrice, setTotalDonationPrice] = useState(0);
  const [noFound, setNoFound] = useState("");
  
  const totalPrice = donations
    .map((donation) => donation.price)
    .reduce((acc, crrPrice) => acc + crrPrice, 0);

  useEffect(() => {
    const donateItem = JSON.parse(localStorage.getItem("donations"));

    if (donateItem) {
      const donationPrice = donateItem.reduce(
        (preItem, currItm) => preItem + currItm.price,
        0
      );
      setTotalDonationPrice(donationPrice);
    } else {
      setNoFound(
        <h2 className="h-[80vh] text-5xl font-extrabold flex justify-center items-center">
          No Data Found
        </h2>
      );
    }
  }, []);

  const data = [
    ["Donation", "Calculate donation"],
    ["Total Donation", totalPrice],
    ["Your Donation", totalDonationPrice],
  ];

  return (
    <div>
      {noFound ? (
        noFound
      ) : (
        <div>
          <h1 className="block m-auto w-full text-5xl font-semibold">
            Your Total Donation {totalDonationPrice}
          </h1>
          <Chart
            chartType="PieChart"
            data={data}
            width={"100%"}
            height={"400px"}
          />
        </div>
      )}
    </div>
  );
};

export default Statistics;
