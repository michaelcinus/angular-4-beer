import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/model/beer';
import { BeerService } from 'src/app/services/beer.service';

@Component({
  selector: 'app-beer-page',
  templateUrl: './beer-page.component.html',
  styleUrls: ['./beer-page.component.css']
})
export class BeerPageComponent implements OnInit {

  beers?: Beer[];

  constructor( private beerService: BeerService) { }

  ngOnInit(): void {
    this.beerService.getAllBeer().subscribe(
      (res) => {
        this.beers = res;
      },
      (error) => {
        console.log(JSON.stringify(error));
        
      }
    )
  }

}
