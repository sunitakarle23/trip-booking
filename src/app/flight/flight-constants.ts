export const Tabs = [
    { name: 'Flights', redirectPath: '/flight', icon: 'fa fa-plane tab-icon', isActive: true },
    { name: 'Hotel', redirectPath: '/hotel', icon: 'fa fa-hotel tab-icon', isActive: false },
    { name: 'Cars', redirectPath: '/car', icon: 'fa fa-car tab-icon', isActive: false },
    { name: 'Activities', redirectPath: '/activity', icon: 'fa fa-car tab-icon', isActive: false },
];

export const Travelers = [1,2,3,4,5,6,7,8,9];
export const Airports = [
    {
        "code": "LAS",
        "city": "Las Vegas NV",
        "country": "US"
    },
    {
        "code": "SFO",
        "city": "San Francisco CA",
        "country": "US"
    },
    {
        "code": "DEL",
        "city": "New Delhi",
        "country": "IN"
    },
    {
        "code": "LGW",
        "city": "London",
        "country": "GB"
    },
    {
        "code": "JFK",
        "city": "New York NY",
        "country": "US"
    },
    {
        "code": "GRU",
        "city": "São Paulo",
        "country": "BR"
    },
    {
        "code": "MIA",
        "city": "Miami FL",
        "country": "US"
    },

]
export const FareOptions = ['Business class', ' First class', 'Main cabin'];
export const SortOptions = [
    { label: "Duration (Shortest to Longest)", value: 'sortByLongDuration' },
    { label: "Duration (Longest to Shortest)" , value: 'sortByShortDuration'},
    { label: "Airline (A to Z)" , value: 'sortAirlineAsc'},
    { label: "Airline (Z to A)" , value: 'sortAirlineDesc'},
]

