import * as React from "react";
import { rootStoreContext } from "../../stores";
import { useObserver } from "mobx-react";
import { Link } from "react-router-dom";
import NewItemForm from "../../common-components/NewItemForm";
import { useState } from "react";

const Heroes = () => {
  const { heroStore } = React.useContext(rootStoreContext);

  React.useEffect(() => {
    heroStore.getHeroes();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [newHero, setNewHero] = React.useState(heroStore.hero);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const removeItem = (id: string) => {
    heroStore.removeHero(id);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // console.log(e);
    heroStore.addHero(heroStore.hero);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // console.log(e);
    setNewHero({ ...newHero, [name]: value });
    heroStore.setHero(newHero);
  };

  return useObserver(() => (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <NewItemForm
        isOpen={isOpen}
        handleOpen={handleOpen}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      {!heroStore.heroes ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <div
            className="spinner-border"
            style={{ width: "9rem", height: "9rem", color: "purple" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        heroStore.heroes.map(h => (
          <div key={h.id} className="card mt-3" style={{ width: "auto" }}>
            <div className="card-header">
              <h3 className="card-title">
                {h.firstName} {h.lastName}
              </h3>
              <h5 className="card-subtitle mb-2 text-muted"> {h.house}</h5>
              <p className="card-text">{h.knownAs}</p>
            </div>
            <section className="card-body">
              <div className="row">
                <Link
                  to={`/edit-hero/${h.id}`}
                  className="btn btn-primary card-link col text-center"
                >
                  <span className="fas fa-edit mr-2" />
                  Edit
                </Link>
                <button
                  type="button"
                  onClick={() => removeItem(h.id)}
                  className="btn btn-outline-danger card-link col text-center"
                >
                  <span className="fas fa-eraser mr-2" />
                  Remove
                </button>
              </div>
            </section>
          </div>
        ))
      )}
      {heroStore.error && <p>{heroStore.error}</p>}
    </div>
  ));
};

export default Heroes;
