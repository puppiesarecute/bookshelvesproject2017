import { Component } from '@angular/core';
import { BookServiceService } from "app/book-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookServiceService]
})
export class AppComponent {
  title = 'app works!';
  constructor(private apiService: BookServiceService) { }
  onSearch() {
    this.apiService.searchBook("flowers for algernon").subscribe(
      result => {
        console.log(result);
      },
      error => {
        this.handleError();
      }
    );
  }
  //#endregion

  //#region private functions
  private handleError() {
    console.log("An error occured!");
  }

}
