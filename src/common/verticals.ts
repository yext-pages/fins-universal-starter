interface Vertical {
    showInNav: boolean;
    label: string;
    key?: string;
    entityType?: string;
    limit?: number;
}

export const verticals: Vertical[]= [
    {
      //universal vertical
      showInNav: true,
      label: "All",
    },
    {
      showInNav: true,
      label: "FAQs",
      key: "faqs",
      entityType: "faq"

    },
    {
        showInNav: true,
        label: "Branches & ATMs",
        key: "locations"
      },
      {
        showInNav: true,
        label: "Financial Professionals",
        key: "financial_professionals"
      },
      {
        showInNav: true,
        label: "Financial Products",
        key: "financial_products"
      },
      {
        showInNav: true,
        label: "Services",
        key: "services"
      },
]
