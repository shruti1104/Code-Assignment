import { Component, OnInit } from '@angular/core';

import { CodeServiceService } from '../code-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public games;
  public gameOnSearch;
  public content;
  public searchword;
  public currentPage;
  public newArray: string[] = [];
  public objectsByKeyValue: string[] = [];
  public sortValue: string;
  public groupByPlatform;
  public platformList;
  public selected;

  constructor(private apiService: CodeServiceService) { }
  ngOnInit() {

    //Subscribe to fetch data from API
    this.apiService.getGamesData().subscribe((data) => {
      //console.log(data);
      this.games = data;
      this.gameOnSearch = data;
      this.groupByFn();
    });

  }

  // function to search game title that starts with input string
  search(value: string) {
    if (value) {
      let filterValue = value.toLowerCase();
      this.games = this.gameOnSearch.filter(option => option.title?.toLowerCase().startsWith(filterValue));
    }
    else {
      this.games = this.gameOnSearch;
    }
  }

  //Sort functions to set sorting order to be passed in sortArray pipe
  sortDesc() {
    this.sortValue = 'desc';
  }

  sortAesc() {
    this.sortValue = 'aesc';
  }

  //Groupby Platform implementation
  groupBy = (array, key) => {
    array.shift();
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {});
  };

  groupByFn() {
    this.groupByPlatform = this.groupBy(this.games, 'platform');
    console.log('groupByPlatform' + this.groupByPlatform);
    this.platformList = Object.keys(this.groupByPlatform);
  }

  selectedPlatform() {
    this.games = this.groupByPlatform[this.selected];
  }
}

