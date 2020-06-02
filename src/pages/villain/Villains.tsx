import * as React from "react";
import { useObserver } from "mobx-react";
import NewItemForm from "../../common-components/NewItemForm";
import { Link } from "react-router-dom";
import { rootStoreContext } from "../../stores";

const Villains = () => {
  const { villainStore } = React.useContext(rootStoreContext);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    villainStore.getAllVillains();
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const removeItem = (id: string) => {
    villainStore.removeVillain(id);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    villainStore.addVillain(villainStore.villain);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newVillain = Object.assign(villainStore.villain);
    newVillain[name] = value;
    villainStore.setVillain(newVillain);
  };
  return useObserver(() => (
    <>
      <NewItemForm
        isOpen={isOpen}
        handleOpen={handleOpen}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      {!villainStore.villains ? (
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
        villainStore.villains.map(h => (
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
                  to={`/edit-villain/${h.id}`}
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
      {villainStore.error && <p>{villainStore.error}</p>}
    </>
  ));
};

export default Villains;
