// src/components/Card.tsx

import * as React from "react";
import { useState } from "react";
import { CardProps } from "@yext/search-ui-react";
import { provideSearchAnalytics } from "@yext/analytics";
import { LexicalRichText } from "@yext/react-components";

//replace with the vertical typescript interface this custom card applies to
import FAQ from "../../types/faqs";

import { experienceKey, experienceVersion, businessId } from "../../common/consts";
import { useSearchState } from "@yext/search-headless-react";

export const searchAnalytics = provideSearchAnalytics({
  experienceKey: experienceKey,
  experienceVersion: experienceVersion,
  businessId: businessId
})

const FaqCard = ({
    result,
  }: CardProps<FAQ>) => {
    //pull in the relevant fields from your entity to display on the card
    const data: any = {
        name: result.rawData.question,
        answer: result.rawData.c_answerTest,
        landingPageUrl: result.rawData.landingPageUrl,
        category: result.rawData.fins_faqCategory,
        cta1: result.rawData.fins_primaryCTA,
        cta2: result.rawData.fins_secondaryCTA
    }

    //replace below with the appropriate vertical key
    const verticalKey = 'faqs'

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
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleToggle = () => {
      setIsCollapsed(!isCollapsed);
    };

return (
    <div className="mb-4 justify-between rounded-lg border p-4 text-stone-900 shadow-sm">
        <div className="body flex flex-col">
            {data.name && (
                <a href={`${data.landingPageUrl}`} target = "_blank" rel="noreferrer">
                    <div className="title text-lg font-semibold text-blue-700 hover:underline" onClick ={() => fireTitle(result.id || "")}>
                        {data.name}
                    </div>
                </a>
            )}
            <div className="description py-2 flex justify-between">
           { <LexicalRichText serializedAST={JSON.stringify(data.answer.json)} />}
            </div>
        </div>
    </div>
)
};
export default FaqCard;