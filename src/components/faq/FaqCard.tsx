// src/components/Card.tsx

import * as React from "react";
import { useMemo, useState } from "react";
import { CardProps } from "@yext/search-ui-react";
import { provideSearchAnalytics } from "@yext/analytics";

//replace with the vertical typescript interface this custom card applies to
import FAQ from "../../types/faqs";

import { experienceKey, experienceVersion, businessId } from "../../common/consts";
import { useSearchState } from "@yext/search-headless-react";

export const searchAnalytics = provideSearchAnalytics({
  experienceKey: experienceKey,
  experienceVersion: experienceVersion,
  businessId: businessId
})

//replace below with the appropriate vertical key
const verticalKey = 'faqs'

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

// change to the field name that contains html string
    const htmlFieldName = 'c_answerTest';

      
      function renderHTMLContent(htmlContent: { __html: string } | undefined) {
        if ( htmlContent )
        {
          return <div className="reset-style" dangerouslySetInnerHTML={htmlContent} />;
        }
        return null;
      }
      const html: string = result.rawData?.[htmlFieldName]?.html;
      const htmlContent = useMemo(() => { return { __html: html }; }, [html]);

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
              <div className="title text-lg font-semibold text-blue-700 relative">
                {data.name}
                <button
                  onClick={handleToggle}
                  className="arrow absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
                >
                  {isCollapsed ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  )}
                </button>
              </div>
            )}
            {!isCollapsed && (
              <div className="description py-2 flex justify-between">
                {renderHTMLContent(htmlContent)}
              </div>
            )}
          </div>
        </div>
      );
    };
    
    export default FaqCard;