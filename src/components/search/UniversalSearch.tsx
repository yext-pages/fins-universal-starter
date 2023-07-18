// src/components/UniversalSearch.tsx

import * as React from "react";
import {
  UniversalResults,
  SpellCheck,
  StandardCard
  } from "@yext/search-ui-react";

import FaqCard from "../faq/FaqCard";
import { useSearchActions, useSearchState} from "@yext/search-headless-react";
import { UNIVERSAL_LIMITS } from "../../common/consts";
import LocationCard from "../locations/LocationCard";
import ProfessionalsCard from "../professionals/ProfessionalsCard";
import ServicesCard from "../services/ServicesCard";
import ProductsCard from "../products/ProductsCard";

const UniversalSearch = () => {
  const searchActions = useSearchActions();
  searchActions.setUniversalLimit(UNIVERSAL_LIMITS);

  const mostRecentSearch = useSearchState(
    (state) => state.query.mostRecentSearch
    );
    const universalResultsCount = useSearchState((state) => state.universal.verticals?.length);

  return (
      <div className="universal-search py-4">
          <div className="spell-check">
            <SpellCheck/>
          </div>
            <UniversalResults
              verticalConfigMap={{
                  faqs: {
                      label: "FAQs",
                      CardComponent: FaqCard
                  },
                // uncomment below to add an additonal vertical configuration
                  locations: {
                    label: "Branches & ATMs",
                    CardComponent: LocationCard
                },
                financial_professionals: {
                  label: "Financial Professionals",
                  CardComponent: ProfessionalsCard
              },
              financial_products: {
                label: "Products",
                CardComponent: ProductsCard
            },
            services: {
              label: "Services",
              CardComponent: ServicesCard
          },
              }}/>
          {mostRecentSearch && universalResultsCount === 0 && (
            <div>
              {/* provide a no results message for searches that return no results  */}
              <p>
                The search
                <span className="mx-1 font-semibold">{mostRecentSearch}</span>
                did not match any results.
              </p>
            </div>
          )}
      </div>
  );
};

export default UniversalSearch;