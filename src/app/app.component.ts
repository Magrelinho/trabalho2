import { Arquivo } from './arquivo';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public title = 'trabalho';
  public arquivo: Array<Arquivo> = [];

  ngOnInit() {
    this.arquivo = this.getArquivo();
  }

  private getArquivo(): Array<Arquivo> {
    return [{
      nome: "Jefferson Ramos",
      ru: 3306797,
      nomeCurso: "Ferramenta de Desenvolvimento web",
      dataNascimento: new Date("1988/01/28")
    },
    {
      nome: "Tobias",
      ru: 1234567,
      nomeCurso: "Ferramenta de Desenvolvimento web",
      dataNascimento: new Date("1988/09/01"),
    },
    {
      nome: "Marcelinho",
      ru: 7654321,
      nomeCurso: "Ferramenta de Desenvolvimento web",
      dataNascimento: new Date("2000/02/15"),
    },
    {
      nome: "Pedro",
      ru: 1158780,
      nomeCurso: "Ferramenta de Desenvolvimento web",
      dataNascimento: new Date("2005/08/5"),
    }
    ]
  }
}

