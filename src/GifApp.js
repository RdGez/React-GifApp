import React, { useState } from "react";
import PropTypes from "prop-types";

import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifApp = () => {
  const [categories, setCategories] = useState(["Itachi Uchiha"]);

  /*Referencia:
    const hadleAdd = () => {
    setCategories([...categories, 'Boruto: Next Generations']);
  } */

  return (
    <>
      <h3>Gif App</h3>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {
          categories.map((category) => (
            <GifGrid key={category} category={category}/>
          ))
        }
      </ol>
    </>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default GifApp;
