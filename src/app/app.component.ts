import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AeroflotService } from 'src/app/services/aeroflot.service';
import { RailwaysService } from 'src/app/services/railways.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public aeroflotEconomPrice: string = '0 P';
  public aeroflotAdvancedPrice: string = '0 P';
  public aeroflotLuxePrice: string = '0 P';
  public railwayEconomPrice: string = '0 P';
  public railwayAdvancedPrice: string = '0 P';
  public railwayLuxePrice: string = '0 P';


  public myForm: FormGroup = new FormGroup({
    distance: new FormControl(),
    age: new FormControl(),
    baggageWeight: new FormControl()
  });

  constructor(
    private aeroflotService: AeroflotService,
    private railwaysService: RailwaysService,
  ) { }

  public ngOnInit(): void { }

  public calculate(): void {
    this.aeroflotEconomPrice = this.aeroflotService.calculateEconom(this.myForm.controls['distance'].value , this.myForm.controls['age'].value , this.myForm.controls['baggageWeight'].value);
    this.aeroflotAdvancedPrice = this.aeroflotService.calculateAdvanced(this.myForm.controls['distance'].value , this.myForm.controls['age'].value , this.myForm.controls['baggageWeight'].value);
    this.aeroflotLuxePrice = this.aeroflotService.calculateLuxe(this.myForm.controls['distance'].value , this.myForm.controls['age'].value , this.myForm.controls['baggageWeight'].value);
    this.railwayEconomPrice = this.railwaysService.calculateEconom(this.myForm.controls['distance'].value , this.myForm.controls['age'].value , this.myForm.controls['baggageWeight'].value);
    this.railwayAdvancedPrice = this.railwaysService.calculateAdvanced(this.myForm.controls['distance'].value , this.myForm.controls['age'].value , this.myForm.controls['baggageWeight'].value);
    this.railwayLuxePrice = this.railwaysService.calculateLuxe(this.myForm.controls['distance'].value , this.myForm.controls['age'].value , this.myForm.controls['baggageWeight'].value);
  }
}
