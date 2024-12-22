import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;

  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`;

export default Wrapper;
