import { Injectable } from '@angular/core';

@Injectable()
export class RailwaysService {

  constructor() { }

  public calculateEconom(distance: number, age: number, baggageWeight: number): string {
    let distancePrice = distance*0.5;
    const baggagePrice = baggageWeight > 15 ? baggageWeight*50 : 0;
    distancePrice = age<= 5 ? distancePrice*0.5 : distancePrice;
    const summary = distancePrice + baggagePrice;
    return baggageWeight <= 50 ? `${summary} P` : `тариф недоступен`;
  }

  public calculateAdvanced(distance: number, age: number, baggageWeight: number): string {
    let distancePrice = distance*2;
    const baggagePrice = baggageWeight > 20 ? baggageWeight*50 : 0;
    distancePrice = age<= 8 ? distancePrice*0.7 : distancePrice;
    const summary = distancePrice + baggagePrice;
    return baggageWeight <= 60 ? `${summary} P` : `тариф недоступен`;
  }

  public calculateLuxe(distance: number, age: number, baggageWeight: number): string {
    let distancePrice = distance*4;
    distancePrice = age<= 16 ? distancePrice*0.8 : distancePrice;
    return baggageWeight <= 60 ? `${distancePrice} P` : `тариф недоступен`;
  }
}
