import { Component, OnInit } from '@angular/core';

import {CodeServiceService} from '../code-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public games;
  public content;
  public searchword;
  public currentPage;
  public newArray: string[] = [];
  public objectsByKeyValue : string[] = [];
  public sortValue: string;

  constructor(private apiService: CodeServiceService) { }
  ngOnInit() {

    //Subscribe to fetch data from API
    this.apiService.getGamesData().subscribe((data)=>{
      console.log(data);
      this.games = data;
    });
  }

  // function to search game title that starts with input string
  search(value: string) {
    if (value) {
    let filterValue = value.toLowerCase();
    this.games =  this.games.filter(option => option.title?.toLowerCase().startsWith(filterValue));
    console.log(this.games);
    }
  }

  //Sort functions to set sorting order to be passed in sortArray pipe
  sortDesc() {
    this.sortValue = 'desc';
  }

  sortAesc() {
    this.sortValue = 'aesc';
  }

// Accepts the array and key
groupBy = (array, key) => {
  // Return the end result
  return array.reduce((result, currentValue) => {
    // If an array already present for key, push it to the array. Else create an array and push the object
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    debugger;
    return result;
  }, {}); // empty object is the initial value for result object
};

  groupByFn(){
    const groupByPlatform = this.groupBy(this.games, 'platform');
    console.log('groupByPlatform' + groupByPlatform);
  }
}

