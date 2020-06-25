import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdditiveService } from 'src/app/services/additives/additive.service';
import { HttpClient } from '@angular/common/http';
import { WikiSummary } from 'src/app/interface/wikisummary/wikisummary';
import { WikiService } from 'src/app/services/wiki/wiki.service';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit {
  public currentId: string
  public data
  public details: string

  constructor(
    private _route: ActivatedRoute,
    private additiveService: AdditiveService,
    private _router: Router,
    private wikiService: WikiService
  ) { }

  ngOnInit(){ }

  async ionViewWillEnter(){
    this.currentId = await this._route.snapshot.paramMap.get('id')
    
    const item = await this.additiveService.getItemById(this.currentId)
    if(!item) return this._router.navigate(['tabs/home'])

    this.data = item

    this.details = await this.wikiService.getAdditiveById(this.currentId)
    
  }

}
