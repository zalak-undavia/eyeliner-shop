import "./Landing.css";

import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/brands");
  };
  return (
    <div className="background-image">
      <div className="landing-page">
        <div className="glass-container">
          <h1>Stories Arabia | Eyeliner Store</h1>
          <button onClick={handleRedirect} className="explore-btn">
            Explore
          </button>
        </div>
        <div class="air air1"></div>
        <div class="air air2"></div>
        <div class="air air3"></div>
        <div class="air air4"></div>
      </div>
      <div id="block"></div>
    </div>
  );
}
