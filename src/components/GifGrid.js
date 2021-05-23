import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";

import { GifGridItem } from "./GifGridItem";

// Solo si no se usa el custom Hook
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  // Solo si no se usa el custom Hook
  /* const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category)
    .then(imgs => setImages(imgs));
  }, [ category ]); */

  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      { loading && <p>Loading...</p>}

      {/* Solo si no se usa el custom Hook */}
      <div className="cardGrid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
