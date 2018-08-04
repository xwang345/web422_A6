import { Component, OnInit } from '@angular/core';
import { Positions } from './data/positions';
import { PositionService } from './data/position.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  positions: Positions[];
  getPositionsSub: any;
  loadingError = false;

  constructor(private positionService: PositionService, private router: Router) { }

  ngOnInit() {
    this.getPositionsSub = this.positionService.getPositions().subscribe( data => {
      this.positions = data;
    }, 
    () =>{
      this.loadingError = true;
    });
  }

  ngOnDestroy() {
    if(this.getPositionsSub){
      this.getPositionsSub.unsubscribe();
    }
  }

  routePosition(id: string){
    this.router.navigate(['/position', id]);
  }


}
