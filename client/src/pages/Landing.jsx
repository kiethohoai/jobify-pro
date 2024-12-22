// images
import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';

// styles ONLY
import Wrapper from '../assets/wrappers/LandingPage';

// Landing
export default function Landing() {
  return (
    <Wrapper>
      {/* logo */}
      <nav>
        <img className="logo" src={logo} alt="jobify" />
      </nav>

      {/* content */}
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            A job tracking app helps users manage tasks, deadlines, and
            progress. It enables efficient organization, assignment of
            responsibilities, and real-time updates, boosting productivity,
            accountability, and collaboration for smoother project management
            and task completion.
          </p>
          <button className="btn btn-hero register-link">Register</button>
          <button className="btn btn-hero">Login / Demo User</button>
        </div>

        {/* image */}
        <img className="img main-img" src={main} alt="job hunt" />
      </div>
    </Wrapper>
  );
}
