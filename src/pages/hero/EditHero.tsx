import * as React from "react";
import { rootStoreContext } from "../../stores";
import { useObserver } from "mobx-react";

const EditHero = ({ match }: any) => {
  const { heroStore } = React.useContext(rootStoreContext);
  const [isSuccess, setIsSuccess] = React.useState(false);

  React.useEffect(() => {
    heroStore.getHero(match.params.id);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    heroStore.updateHero(heroStore.hero);
    setIsSuccess(!isSuccess);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updateHero = Object.assign(heroStore.hero);
    updateHero[name] = value;
    heroStore.setHero(updateHero);
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
                value={heroStore.hero.firstName}
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
                value={heroStore.hero.lastName}
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
            value={heroStore.hero.house}
            onChange={handleChange}
            className="form-control"
          />
          <label htmlFor="knownAs">KnownAs</label>

          <input
            type="text"
            id="knownAs"
            name="knownAs"
            value={heroStore.hero.knownAs}
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

export default EditHero;
