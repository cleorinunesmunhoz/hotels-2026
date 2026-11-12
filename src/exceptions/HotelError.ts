export default class HotelError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "HotelError";
  }
}
