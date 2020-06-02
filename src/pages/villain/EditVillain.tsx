import * as React from "react";
import { useObserver } from "mobx-react";
import { rootStoreContext } from "../../stores";

const EditVillain = ({ match }: any) => {
  const { villainStore } = React.useContext(rootStoreContext);
  const [isSuccess, setIsSuccess] = React.useState(false);

  React.useEffect(() => {
    villainStore.getVillainById(match.params.id);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    villainStore.updateVillain(villainStore.villain);
    setIsSuccess(!isSuccess);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updateVillain = Object.assign(villainStore.villain);
    updateVillain[name] = value;
    villainStore.setVillain(updateVillain);
  };
  const handleGoBack = () => {
    window.history.back();
  };

  return useObserver(() => (
    <>
      <h2>Edit Hero</h2>
      <div className="card my-3" style={{ width: "auto" }}>
        <form className="card-header" onSubmit={handleSubmit}>
          <section className="d-flex flex-row">
            <div className="mt-3 mr-3 input-width">
              <label htmlFor="firstName">FirstName</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={villainStore.villain.firstName}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mt-3 mr-3 input-width">
              <label htmlFor="lastName">LastName</label>

              <input
                type="text"
                id="lastName"
                name="lastName"
                value={villainStore.villain.lastName}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </section>
          <label htmlFor="house">House</label>

          <input
            type="text"
            id="house"
            name="house"
            value={villainStore.villain.house}
            onChange={handleChange}
            className="form-control"
          />
          <label htmlFor="knownAs">KnownAs</label>

          <input
            type="text"
            id="knownAs"
            name="knownAs"
            value={villainStore.villain.knownAs}
            onChange={handleChange}
            className="form-control"
          />
          <button type="submit" className="btn btn-info mt-3">
            Update
          </button>
          <button
            type="button"
            onClick={handleGoBack}
            className="btn btn-outline-info mt-3 ml-3"
          >
            Back
          </button>
        </form>
      </div>
      {isSuccess && (
        <div className="alert alert-success col-md-e" role="alert">
          This hero has been updated!
        </div>
      )}
    </>
  ));
};

export default EditVillain;
