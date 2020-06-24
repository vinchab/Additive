import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  public searchInput:string

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  search(){
    console.log(this.searchInput);
    /* this.route.navigate([`tabs/home/${this.searchInput}`]) */

    this.route.navigateByUrl(`tabs/home/${this.searchInput}`)
  }
}
