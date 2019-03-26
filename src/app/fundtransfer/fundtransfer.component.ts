import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer.component.html',
  styleUrls: ['./fundtransfer.component.css']
})
export class FundtransferComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  submit(){
    this.router.navigate(['submit'])
  }

}
