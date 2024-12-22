import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

function Error() {
  const err = useRouteError();

  if (err.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="Error Image" />
          <h3>Error !!!</h3>
          <p>{`We can't seem to find the page you are looking for`}</p>
          <Link to="/dashboard">Back Home</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <h3>Something went wrong!</h3>
      </div>
    </Wrapper>
  );
}
export default Error;
