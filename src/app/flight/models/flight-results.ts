export interface IFlightResults {
    id: string;
    company: string;
    points: number;
    duration: number;
    departureCity: String,
	departureCityCode: string,
	destinationCity: string,
	destinationCityCode: string,
    segments: ISegment[];
    travelers: [];
    fareOptions: IFareOptions[];
}
export interface ISegment {
    duration: number;
    departureTime: string;
    arrivalTime: string;
    origin: string;
    destination: string;
    noOfStops: number;
}
export interface IFareOptions {
    seatsAvailable: number;
    name: string;
    fareValue: number;
}
