import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css']
})
export class WithdrawalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
submit(){
  this.router.navigate(['submit'])
}
}
