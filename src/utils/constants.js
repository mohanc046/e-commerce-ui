export const FIXED_VALUES = {
  CURRENCY: '₹',
  DEFAULT_PAGINATION_COUNT: 10,
  PRICING_LIST: [
    {
      min: "0",
      max: "1000",
      label: "0 - 1000"
    },
    {
      min: "1000",
      max: "2000",
      label: "1000 - 2000"
    },
    {
      min: "2000",
      max: "3000",
      label: "2000 - 3000"
    },
    {
      min: "3000",
      max: "4000",
      label: "3000 - 4000"
    },
    {
      min: "4000",
      max: "5000",
      label: "4000 - 5000"
    },
    {
      min: "5000",
      max: "10000",
      label: "5000 - 10000"
    }
  ],
  SORTING_OPTIONS: [
    {
      title: 'Default Sorting',
      value: '',
    },
    {
      title: 'Sort By Popularity',
      filter: 'popularity',
    },
    {
      title: 'Sort By Average Rating',
      filter: 'average_rating',
    },
    {
      title: 'Sort By Latest',
      filter: 'latest',
    },
    {
      title: 'Sort By price: low to high',
      filter: 'price_low_to_high',
    },
    {
      title: 'Sort By price: high to low',
      filter: 'price_high_to_low',
    },
  ],
  FILTER_OPTIONS: [
    {
      title: 'All',
      filter: '*',
      selected: true,
    },
    {
      title: 'Hot Products',
      filter: 'featured',
      selected: false,
    },
    {
      title: 'New Products',
      filter: 'new',
      selected: false,
    },
    {
      title: 'Sales Products',
      filter: 'sales',
      selected: false,
    },
  ]
}