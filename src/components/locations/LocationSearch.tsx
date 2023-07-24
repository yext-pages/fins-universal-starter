
import { useEffect } from "react";
import { useSearchActions, useSearchState } from "@yext/search-headless-react";
import {
  SearchBar,
  StandardCard,
  VerticalResults,
  MapboxMap,
  Facets,
  Pagination,
  AppliedFilters,
  ResultsCount,
  StandardFacet,
} from "@yext/search-ui-react";
// Mapbox CSS bundle
import "mapbox-gl/dist/mapbox-gl.css";
import * as React from "react";
import LocationCard from "./LocationCard";

const LocationSearch = () => {
  
  const searchActions = useSearchActions();
  useEffect(() => {
    searchActions.setVertical("locations");
    searchActions.executeVerticalQuery();
  }, [searchActions]);

  const mostRecentSearch = useSearchState(
    (state) => state.query.mostRecentSearch
    );
const resultsCount =
    useSearchState((state) => state.vertical.resultsCount) ?? -1;

  return (
    <div className="flex flex-col items-center w-full min-h-full">
    <div className='flex flex-col w-full my-8'>
      <div className='w-full flex'>
      <Facets
    customCssClasses={{
      facetsContainer: "Facet-showMore mr-6 block min-w-max hidden md:block pt-1",
      optionsContainer: "mb-2 flex flex-col gap-1",
      titleLabel: "text-md mb-2 border rounded-xl text-center bg-slate-100 p-2"
    }}>
    <StandardFacet
          collapsible={false} 
          fieldId={"builtin.entityType"}            
          label="Location Type"   
    />
    </Facets>
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
                    removableFilter: "bg-gray-200 rounded-sm border border-brand-gray-300 text-md px-2 py-1",
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
      did not match any Locations.
    </p>
  </div>
)}      
        <div className="h-80 w-full">
        <MapboxMap
        mapboxAccessToken="pk.eyJ1IjoiaHJpY2gwNiIsImEiOiJjbGg5Ym5wancwNXR0M2pvNzVjOG5rYmJ4In0.l3dQnS7P6byBu5hGgKgVPQ"
        />
    
<VerticalResults
      CardComponent={LocationCard}
      displayAllOnNoResults={true}
      customCssClasses={{
        verticalResultsContainer: "w-full my-2"
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
</div>
)}

export default LocationSearch;
