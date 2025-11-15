import "./Navbar.css";
function Navbar({ darkMode, isDark }) {
  return (
    <>
      <div className="navbar">
        <h1 className="title">🛒</h1>
        {/* <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul> */}
        <button onClick={darkMode}>
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </>
  );
}

export default Navbar;
