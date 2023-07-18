import { UniversalLimit } from "@yext/search-headless-react";

//Replace with Your Yext Business ID
export const businessId = 4045607;
//Replace with Your Search Experience API Key
export const apiKey = "77dfdd45e7bffc68f41101490470b7f2";
//Replace with Your Search Experience experience key
export const experienceKey = "fins_universal-search";
//Replace with Your Search Experience locale
export const locale = "en";
//Replace with Your Search Experience versopm
export const experienceVersion = "PRODUCTION";

export const additionalQueryParams: any = {
      "source": "fins-universal-search"
    };

//set universal result limits for each vertical
export const UNIVERSAL_LIMITS: UniversalLimit = {
  faqs: 5,
  locations: 5,
  financial_professionals: 5,
  financial_products: 5,
  services: 5,
  //add additional vertical limits for universal search below, make sure to assign the correct vertical key
  // vertical2: 5,
  // vertical3: 5
}
