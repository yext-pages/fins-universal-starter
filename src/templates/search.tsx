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
  provideHeadless
} from "@yext/search-headless-react";

import SearchExperience from "../components/SearchExperience";

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
  apiKey: apiKey,
  // comment in the verticalKey if you are building a vertical-only search experience
  // verticalKey: "REPLACE_ME_VERTICAL_KEY",
  experienceKey: experienceKey,
  locale: locale,
  experienceVersion: experienceVersion,
});

const Search: Template<TemplateRenderProps> = () => {
  return (
    <SearchHeadlessProvider searcher={SEARCHER}>
     <SearchExperience />
    </SearchHeadlessProvider>
  );
};

export default Search;