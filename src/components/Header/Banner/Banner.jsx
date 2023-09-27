

const Banner = () => {
    return (
      <div>
        <div className="h-[80vh] relative w-full">
          <img
            className="w-full h-full object-cover opacity-25"
            src="./img/banner.png"
            alt="Banner"
          />

          <div className="absolute w-full top-1/3">
            <h1 className="text-5xl font-extrabold m-auto text-center pb-5">
              I Grow By Helping People In Need
            </h1>
            <div className="text-center">
              <input
                type="text"
                className="w-2/4 bg-white p-2 rounded-lg border-2	border-gray-300"
              />
              <button className="bg-red-600 text-white font-semibold px-4 py-2 rounded-lg">Search</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;