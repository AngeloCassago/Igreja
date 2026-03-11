import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucesso',
  standalone: true,
  imports: [],
  templateUrl: './sucesso.html',
  styleUrl: './sucesso.css'
})
export class Sucesso implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 5000);

  }

}