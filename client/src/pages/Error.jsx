import { Link, useRouteError } from 'react-router-dom';

function Error() {
  const err = useRouteError();
  console.log(`🚀CHECK > err:`, err);

  return (
    <div>
      <h1>Error !!!</h1>
      <Link to="/dashboard">Back to Homepage</Link>
    </div>
  );
}
export default Error;
