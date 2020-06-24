import { Component, OnInit } from '@angular/core';
import { AdditiveService } from 'src/app/services/additives/additive.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  public additives$: Observable<any>

  constructor(
    private additiveService: AdditiveService
  ) { }

  ngOnInit(): void {
    this.additiveService.load()
    this.additives$ = this.additiveService.data$
  }

}
