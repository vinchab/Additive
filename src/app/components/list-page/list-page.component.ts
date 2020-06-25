import { Component, OnInit } from '@angular/core';
import { AdditiveService } from 'src/app/services/additives/additive.service';
import { Observable } from 'rxjs';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  public additives$: Observable<any>
  public max: number = 10

  constructor(
    private additiveService: AdditiveService,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.additiveService.load()
    this.additives$ = this.additiveService.data$
    
    this.presentLoading()
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
  }

  load(){
    this.max = this.max + 10
  }
}
