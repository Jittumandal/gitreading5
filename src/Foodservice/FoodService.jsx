import React from "react";
import QuickSearch from "./QuickSearch";
import Search from "./Search ";
import "./Search.css";

const FoodService = () => {
  return (
    <>
      <section>
        <Search />
        <QuickSearch />
      </section>
    </>
  );
};

export default FoodService;
