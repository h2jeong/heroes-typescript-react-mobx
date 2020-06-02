import * as React from "react";
export interface NewItemFromProps {
  isOpen: boolean;
  handleOpen: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const NewItemForm = ({
  isOpen,
  handleOpen,
  handleSubmit,
  handleChange
}: NewItemFromProps) => {
  return (
    <div className="card my-3" style={{ width: "auto" }}>
      {isOpen ? (
        <form onSubmit={handleSubmit} className="card-header">
          <section className="d-flex flex-row">
            <div className="mt-3 mr-3 input-width">
              <label htmlFor="firstName">FirstName</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
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
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </section>
          <label htmlFor="house" className="mt-3">
            House
          </label>
          <input
            type="text"
            id="house"
            name="house"
            className="form-control"
            onChange={handleChange}
          />
          <label htmlFor="knownAs" className="mt-3">
            KnownAs
          </label>
          <input
            type="text"
            id="knownAs"
            name="knownAs"
            onChange={handleChange}
            className="form-control"
          />
          <section className="d-flex flex-row justify-content-start mt-3">
            <button type="submit" className="btn btn-outline-success mx-1">
              <span className="fas fa-plus mr-2 my-lg-0" />
              Save
            </button>
            <button
              type="button"
              onClick={handleOpen}
              className="btn btn-outline-warning mx-1"
            >
              <span className="fas fa-chevron-left mr-2 my-lg-0" />
              Cancle
            </button>
          </section>
        </form>
      ) : (
        <button
          type="button"
          onClick={handleOpen}
          className="btn btn-outline-success mx-1"
        >
          <span className="fas fa-plus mr-2 my-lg-0" />
          Add Item
        </button>
      )}
    </div>
  );
};

export default NewItemForm;
