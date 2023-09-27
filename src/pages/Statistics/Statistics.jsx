/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const donations = useLoaderData();

    const totalPrice = donations
      .map((donation) => donation.price)
      .reduce((acc, crrPrice) => acc + crrPrice, 0);
 

  const [totalDonationPrice, setTotalDonationPrice] = useState(0);

  useEffect(() => {
    const donateItem = JSON.parse(localStorage.getItem("donations"));
    const donationPrice = donateItem.reduce(
      (preItem, currItm) => preItem + currItm.price,
      0
    );
    setTotalDonationPrice(donationPrice);
  }, []);

   const data = [
     ["Donation", "Calculate donation"],
     ["Total Donation", totalPrice],
     ["Your Donation", totalDonationPrice],
   ];

  return (
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
  );
};

export default Statistics;
