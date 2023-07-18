// src/components/Card.tsx

import * as React from "react";
import { CardProps } from "@yext/search-ui-react";
import { provideSearchAnalytics } from "@yext/analytics";
import { experienceKey, experienceVersion, businessId } from "../../common/consts";
import { useSearchState } from "@yext/search-headless-react";
import Ce_financialProduct from "../../types/financial_products";

export const searchAnalytics = provideSearchAnalytics({
  experienceKey: experienceKey,
  experienceVersion: experienceVersion,
  businessId: businessId
})

const ProductsCard = ({
    result,
    //replace the interface FAQ with the typescript interface of your vertical
  }: CardProps<Ce_financialProduct>) => {
    //pull in the relevant fields from your entity to display on the card
    const data: any = {
        name: result.rawData.name,
        description: result.rawData.description,
        landingPageUrl: result.rawData.landingPageUrl,
        category: result.rawData.fins_productCategory,
        cta1: result.rawData.fins_primaryCTA,
        cta2: result.rawData.fins_secondaryCTA
    }

    //replace below with the appropriate vertical key
    const verticalKey = 'fins_products'

    //analytics configuration for the card
    const queryId = useSearchState((state)=>state.query.queryId) || "";
    const fireClick = (id:string,label:string)=>{
        searchAnalytics.report({
            type: "CTA_CLICK",
            entityId: id,
            verticalKey: verticalKey,
            searcher: "VERTICAL",
            queryId: queryId,
            ctaLabel: label
        })
    };
    const fireTitle = (id:string)=> {
        searchAnalytics.report({
            type: "TITLE_CLICK",
            entityId: id,
            verticalKey: verticalKey,
            searcher: "VERTICAL",
            queryId: queryId,
        })
    }

    return (
        <div className="mb-4 justify-between rounded-lg border p-4 text-stone-900 shadow-sm">
            <div className="body flex flex-col">
                {data.landingPageUrl && (
                    <a href={`${data.landingPageUrl}`} target = "_blank" rel="noreferrer">
                        <div className="title text-lg font-semibold text-blue-700 hover:underline" onClick ={() => fireTitle(result.id || "")}>
                            {data.name}
                        </div>
                    </a>
                )}
                <div className= "category-label flex gap-1 mt-2">
                        {data.category && (
                            <div className="flex rounded bg-gray-400 px-1 text-sm text-gray-100">
                                {`${data.category[0]}`}
                            </div>
                        )}
                    </div>
                <div className="description py-2 flex justify-between">
                    {data.description}
                    <div className="cta-container flex flex-col ml-auto py-2 space-y-2 place-content-center">
                  {data.cta1?.label && (
                <a href={`${data.cta1.link}`} target = "_blank" rel="noreferrer">
                    <button className="cta1 bg-blue-900 text-white font-medium rounded-lg py-2 px-5 shadow mb-4 hover:bg-slate-600" onClick={() => fireClick(result.id || "", data.cta1.label)}>
                        {data.cta1.label}
                    </button>
                </a>)} 
            {data.cta2?.label && (
                <a href={`${data.cta2.link}`} target = "_blank" rel="noreferrer">
                    <button className="cta2 w-32 whitespace-nowrap bg-white text-blue-900 font-medium rounded-lg py-2 px-5 shadow hover:bg-slate-200" onClick={() => fireClick(result.id || "", data.cta2.label)}>
                        {data.cta2.label}
                    </button>
                </a>)} 
        </div>
                </div>
            </div>
        </div>
    )
};

export default ProductsCard;