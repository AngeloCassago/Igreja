import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

  tempoInatividade: any;
  menuAberto = false;

  constructor(private router: Router){
    this.resetTimer();
  }

  resetTimer(){

    clearTimeout(this.tempoInatividade);

    this.tempoInatividade = setTimeout(() => {
      this.router.navigate(['/']);
    }, 30000);

  }

  @HostListener('document:click')
  click(){
    this.resetTimer();
  }

}