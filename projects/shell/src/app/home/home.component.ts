import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '@SharedData/libs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  inputVal: string = '';

  constructor(private router: Router, private dataSharing: DataSharingService) { }

  ngOnInit(): void {
  }

  onTestBtnClick(){
    this.dataSharing.sharedData = this.inputVal;
    this.router.navigate(['/mfe/demo']);
  }

}
