import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    console.log(form);

  }
  loadLogin() {
    this.router.navigate(['/Login'])
  }
}
