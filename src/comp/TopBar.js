import "./TopBar.css";
import lake from "../Images/SunsetbyLake.jpg";
function TopBar() {
  return (
    <div className="header">
      <div>
        <img src={lake} alt="Logo" />
        <h2>Page Name</h2>
      </div>
    </div>
  );
}

export default TopBar;
