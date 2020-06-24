import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdditiveService } from 'src/app/services/additives/additive.service';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit {
  public currentId: string
  public data

  constructor(
    private _route: ActivatedRoute,
    private additiveService: AdditiveService,
    private _router: Router
  ) { }

  ngOnInit(){ }

  async ionViewWillEnter(){
    this.currentId = await this._route.snapshot.paramMap.get('id')
    
    const item = await this.additiveService.getItemById(this.currentId)
    if(!item) return this._router.navigate(['tabs/home'])

    this.data = item
  }
}
