import { UniversalLimit } from "@yext/search-headless-react";

//Replace with Your Yext Business ID
export const businessId: number = 4032765;
//Replace with Your Search Experience API Key
export const apiKey: string = "90cf8922bb01441f9c69bbedbb57b32e";
//Replace with Your Search Experience experience key 
export const experienceKey: string = "search-basic";
//Replace with Your Search Experience locale
export const locale: string = "en";
//Replace with Your Search Experience versopm
export const experienceVersion: string = "PRODUCTION";

export const additionalQueryParams: any = {
      "source": "search-basic"
    };

//set universal result limits for each vertical
export const UNIVERSAL_LIMITS: UniversalLimit = {
  faqs: 5,
  //add additional vertical limits for universal search below, make sure to assign the correct vertical key
  // vertical2: 5,
  // vertical3: 5
}
