
import { useNavigate } from "react-router";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/about")}>
      About
    </button>
  );
};

export default HomePage;