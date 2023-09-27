import { useEffect, useState } from "react";
import DonationsCard from "./DonationsCard";

const Donations = () => {
  const [donations, setDonations] = useState([]);
  const [noFound, setNoFound] = useState("");
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const donateItem = JSON.parse(localStorage.getItem("donations"));
    if (donateItem) {
      setDonations(donateItem);
    } else {
      setNoFound(
        <h2 className="h-[80vh] text-5xl font-extrabold flex justify-center items-center">
          No Data Found
        </h2>
      );
    }
  }, []);

  return (
    <div>
      {noFound ? (
        noFound
      ) : (
        <div>
          <div className="grid grid-cols-2 gap-5 mt-10">
            {isShow
              ? donations.map((donate) => (
                  <DonationsCard
                    key={donate.id}
                    donate={donate}
                  ></DonationsCard>
                ))
              : donations
                  .slice(0, 4)
                  .map((donate) => (
                    <DonationsCard
                      key={donate.id}
                      donate={donate}
                    ></DonationsCard>
                  ))}
          </div>
          {donations.length > 4 && (
            <button
              onClick={() => setIsShow(!isShow)}
              className="px-5 py-2 rounded-lg mt-5 bg-green-600 text-white block mx-auto"
            >
              {isShow ? "See Less" : "See All"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Donations;
