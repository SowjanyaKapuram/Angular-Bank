import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  fundTransfer(){
    this.router.navigate(['fundtransfer']);

  }
  deposit(){
    this.router.navigate(['deposit'])
  }
  withdrawal(){
    this.router.navigate(['withdrawal'])
  }
  exit(){
    this.router.navigate([''])
  }

}
