import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-visitante',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './visitante.html',
  styleUrl: './visitante.css'
})
export class Visitante {

  erro = false;

  constructor(private router: Router) {}

  formatarTelefone(event: Event) {

    const input = event.target as HTMLInputElement;

    let valor = input.value.replace(/\D/g, '');

    if (valor.length > 11) {
      valor = valor.slice(0, 11);
    }

    valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
    valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');

    input.value = valor;

  }

  enviarCadastro(form: NgForm) {

    if (form.invalid) {

      this.erro = true;
      return;

    }

    this.erro = false;

    const dados = form.value;

    const templateParams = {

      nome: dados.nome,
      email: dados.email,
      telefone: dados.telefone,

      info: dados.info === 'sim' ? 'Sim' : 'Não',
      contato: dados.contato === 'sim' ? 'Sim' : 'Não'

    };

    emailjs.send(
      'service_app',     // substitua pelo seu service ID
      'totem-app',    // substitua pelo seu template ID
      templateParams,
      'keVlD_i8DK1NdgosD'   // substitua pela sua public key
    )
    .then(() => {

      console.log('Email enviado com sucesso');

      form.resetForm();

      this.router.navigate(['/sucesso']);

    })
    .catch((erro) => {

      console.error('Erro ao enviar email:', erro);

      alert('Erro ao enviar cadastro. Tente novamente.');

    });

  }

}