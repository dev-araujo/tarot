import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public test: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.list.subscribe((res) => {
      this.test = res;
      console.log(res);
    });

  }
}