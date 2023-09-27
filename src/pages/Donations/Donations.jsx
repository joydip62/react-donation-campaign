import { useEffect, useState } from "react";
import DonationsCard from "./DonationsCard";


const Donations = () => {

    const [donations, setDonations] = useState([]);
    const [noFound, setNoFound] = useState("")

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
    }, [])
    
    return <div>
        {noFound ? noFound :
            <div>
                <div className="grid grid-cols-2 gap-5 mt-10">
                    {donations.map(donate=><DonationsCard key={donate.id} donate={donate}></DonationsCard>)}
            </div>
        </div> }
    </div>;
};

export default Donations;