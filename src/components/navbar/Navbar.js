import { menus } from "../../data/menus";
function Navbar({ pageActive, changePage }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {menus.map((menu) => (
          <li className="navbar-item" key={menu.id}>
            <button
              className={`navbar-link ${pageActive == menu.id ? "active" : ""}`}
              data-nav-link
              onClick={() => changePage(menu.id)}
            >
              {menu.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
