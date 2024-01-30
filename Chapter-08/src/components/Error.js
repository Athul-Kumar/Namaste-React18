import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="error-container">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred!</p>
      <p>
        <i>
          {error.status} {error.statusText}{" "}
        </i>
      </p>
    </div>
  );
};

export default Error;
