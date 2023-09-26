import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
          <h1 className="text-5xl font-extrabold block">This page not found</h1>
          <br />
          <Link to={-1}>
            <button className="bg-green-600 px-7 py-3 font-semibold text-2xl rounded-2xl">Back</button>
          </Link>
    </div>
  );
};

export default ErrorPage;
