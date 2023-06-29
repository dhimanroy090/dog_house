import { useEffect, useState } from "react";
import Breedcard from "../Breedcard/Breedcard";

const Breeds = () => {
  const [Allbreed, setBreeds] = useState([]);
console.log(Allbreed)
  useEffect(() => {
    fetch("Allbreed.json")
      .then((res) => res.json())
      .then((data) => setBreeds(data));
  }, []);
  return (
    <div>
        
      <div className="grid grid-cols-3 gap-4 mt-12">
        {
            Allbreed.map(breed=><Breedcard
            key={breed.id}
            breeds={breed}
            > </Breedcard>)
        }
      </div>
    </div>
  );
};

export default Breeds;
