import * as React from "react";
import { Link } from "react-router-dom";
import { rootStoreContext } from "../stores";
import { useObserver } from "mobx-react";

const HeaderNav = () => {
  const { heroStore, villainStore } = React.useContext(rootStoreContext);
  const [navIsCollapse, setNavIsCollapse] = React.useState(false);
  const toggleNavBar = () => {
    setNavIsCollapse(!navIsCollapse);
  };
  return useObserver(() => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">
        <li className="fas fa-cube" />
        &nbsp;React Tour of Heroes
      </span>
      <button
        onClick={toggleNavBar}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls=" navbarSupportedContent"
        aria-expanded="false"
        aria-label=" Toggle navigation"
      >
        <span className=" navbar-toggle-icon" />
      </button>

      <div
        className={
          navIsCollapse ? "collapse navbar-collapse" : "navbar-collapse"
        }
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/heroes">
              Heros
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/villains">
              Villains
            </Link>
          </li>
        </ul>

        <span className="mr-5" style={{ color: "purple", fontSize: "24px" }}>
          Total heroes:{heroStore.heroesCount}
        </span>

        <span className="mr-5" style={{ color: "purple", fontSize: "24px" }}>
          Total villains:{villainStore.villainsCount}
        </span>
      </div>
    </nav>
  ));
};

export default HeaderNav;
