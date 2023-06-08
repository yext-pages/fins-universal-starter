// src/templates/search.tsx

import * as React from "react";
import {
  Template,
  GetPath,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateProps,
} from "@yext/pages";
import "../index.css";
import {
  SearchHeadlessProvider,
  provideHeadless,
  HeadlessConfig
} from "@yext/search-headless-react";

import BasicSearch from "../components/BasicSearch";

import {apiKey, experienceKey, locale, experienceVersion} from "../common/consts";

export const getPath: GetPath<TemplateProps> = () => {
  return "search";
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    //Update title to match Search starter
    title: `Basic Search`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

export const SEARCHER = provideHeadless({
  //Replace with Your Search Experience API Key here
  apiKey: apiKey,
  // comment in the verticalKey if you are building a vertical-only search experience
  // verticalKey: verticalKey,
  //Replace with Your Search Experience experience key here
  experienceKey: experienceKey,
  locale: locale,
  experienceVersion: experienceVersion,
});

const Search: Template<TemplateRenderProps> = () => {
  return (
    <SearchHeadlessProvider searcher={SEARCHER}>
     <BasicSearch />
    </SearchHeadlessProvider>
  );
};

export default Search;