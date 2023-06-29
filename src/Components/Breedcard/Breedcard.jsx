const Breedcard = ({ breeds }) => {
  console.log(breeds);
  const { id, image, breed, origin, size, temperament } = breeds;
  return (
    <div>
      <div className="grid grid-col-3 grid-flow-col gap-4">
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-5">
          <figure>
            <img src={image} alt="Dogs" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {id}. {breed}
            </h2>
            <p>
              {origin}
              {size}
              {temperament}
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Adopt now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breedcard;
