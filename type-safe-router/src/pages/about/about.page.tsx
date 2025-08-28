
import { useNavigate } from "react-router";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/")}>
      Home
    </button>
  );
};

export default AboutPage;