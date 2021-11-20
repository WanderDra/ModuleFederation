import { loadRemoteEntry } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '@SharedData/libs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  displayVal: string = '';

  constructor(private router: Router, private dataSharing: DataSharingService) { }

  ngOnInit(): void {
    this.displayVal = this.dataSharing.sharedData;
  }

  onBackBtnClick(){
    this.router.navigate(['/']);
  }

  onTestClick(){
    console.log(this.dataSharing.sharedData);
    
  }

}
