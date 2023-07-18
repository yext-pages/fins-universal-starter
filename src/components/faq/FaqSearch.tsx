// src/components/VerticalSearch.tsx

import * as React from "react";
import {
  VerticalResults,
  ResultsCount,
  Pagination,
  Facets,
  StandardFacet,
  AppliedFilters
  } from "@yext/search-ui-react";

import {
  useSearchState
  } from "@yext/search-headless-react";

import FaqCard from "./FaqCard";

const FaqSearch = () => {

    const mostRecentSearch = useSearchState(
        (state) => state.query.mostRecentSearch
        );
    const resultsCount =
        useSearchState((state) => state.vertical.resultsCount) ?? -1;

        return (
          <div className="flex flex-col items-center w-full min-h-full">
              <div className='flex flex-col w-full my-8'>
                <div className='w-full flex'>
                  <div className='flex flex-col w-full items-center'>
                    <div className='flex flex-col items-center justify-center w-full'>
                      <div className='hidden md:flex justify-between w-full mb-1'>
                        <div className='flex gap-2'>
                          <ResultsCount 
                            customCssClasses={{
                              resultsCountContainer: "text-md font-normal px-0 py-1 m-0" 
                            }}
                          />
                          <AppliedFilters
                            customCssClasses={{
                              clearAllButton: "hidden",
                              removableFilter: "bg-gray-100 rounded-sm border border-brand-gray-300 text-md px-2 py-1",
                              appliedFiltersContainer: "m-0 p-0",
                            }}
                          />
                        </div>
                      </div> 
                      {mostRecentSearch && resultsCount === 0 && (
            <div>
              {/* provide a no results message for searches that return no results  */}
              <p>
                The search
                <span className="mx-1 font-semibold">{mostRecentSearch}</span>
                did not match any FAQs.
              </p>
            </div>
          )}                      
          <VerticalResults
                        CardComponent={FaqCard}
                        displayAllOnNoResults={true}
                        customCssClasses={{
                          verticalResultsContainer: "w-full"
                        }}
                      />
                      <Pagination 
                        customCssClasses={{
                          paginationContainer: "bg-white w-fit rounded-sm",
                          rightIconContainer: "rounded-r-sm",
                          leftIconContainer: "rounded-l-sm"
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )}

export default FaqSearch;