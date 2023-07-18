// src/components/SearchExperience.tsx

import * as React from "react";
import {
  SearchBar
  } from "@yext/search-ui-react";

import {
  useSearchState
  } from "@yext/search-headless-react";

import UniversalSearch from "./UniversalSearch";
import VerticalNav from "./VerticalNav";
import FaqSearch from "../faq/FaqSearch";
import LocationSearch from "../locations/LocationSearch";
import ProfessionalsSearch from "../professionals/ProfessionalsSearch";
import ProductsSearch from "../products/ProductsSearch";
import ServicesSearch from "../services/ServicesSearch";

const SearchExperience = () => {
  //retrieves the current vertical key
  const currentVertical = useSearchState((state) => state.vertical.verticalKey) ?? "";

  return (
      <div className="px-4 py-8">
        <div className="mx-auto flex max-w-5xl flex-col">
          <SearchBar placeholder="Search"/>
          <VerticalNav />
          {currentVertical === "faqs" ? (<FaqSearch/>) :
          //comment out below to add a new vertical
           currentVertical === "locations" ? (<LocationSearch/>) :
           currentVertical === "financial_professionals" ? (<ProfessionalsSearch/>) :
           currentVertical === "financial_products" ? (<ProductsSearch/>) :
           currentVertical === "services" ? (<ServicesSearch/>) :
           (<UniversalSearch />)}
        </div>
      </div>
  );
};

export default SearchExperience;