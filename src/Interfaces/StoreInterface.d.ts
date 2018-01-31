export interface IStoreState {
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  },
  coord: {
    lat: number;
    long: number;
  }
}