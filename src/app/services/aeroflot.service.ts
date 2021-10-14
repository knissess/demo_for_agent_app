import { Injectable } from '@angular/core';

@Injectable()
export class AeroflotService {

  constructor() { }

  public calculateEconom(distance: number, age: number, baggageWeight: number): string {
    const distancePrice = distance*4;
    const baggagePrice = baggageWeight > 5 ? 4000 : 0;
    const summary = distancePrice + baggagePrice;
    return baggageWeight <= 20 ? `${summary} P` : `тариф недоступен`;
  }

  public calculateAdvanced(distance: number, age: number, baggageWeight: number): string {
    let distancePrice = distance*8;
    const baggagePrice = baggageWeight > 20 ? 4000 : 0;
    distancePrice = age<= 7 ? distancePrice*0.7 : distancePrice;
    const summary = distancePrice + baggagePrice;
    return baggageWeight <= 50 ? `${summary} P` : `тариф недоступен`;
  }

  public calculateLuxe(distance: number, age: number, baggageWeight: number): string {
    let distancePrice = distance*15;
    distancePrice = age<= 16 ? distancePrice*0.7 : distancePrice;
    return baggageWeight <= 50 ? `${distancePrice} P` : `тариф недоступен`;
  }
}
