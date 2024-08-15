import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="mt-10 mx-auto container text-center">
      <h1 className="text-2xl font-bold">404:</h1>
      <h2 className="text-xl font-medium">Page not found</h2>
      <Link to="/" className="text-blue-500">
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
