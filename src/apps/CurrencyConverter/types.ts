export type TCountry = { [key: string]: string };

export interface ILatestFree {
  data: { [key: string]: number };
  query: {
    apikey: string;
    base_currency: string;
    timestamp: number;
  };
}
