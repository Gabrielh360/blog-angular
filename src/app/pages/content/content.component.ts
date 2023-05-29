import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { dataContent } from '../data/dataContent';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  imageCover: string = ""
  contentTitle: string = ""
  contentDescription: string = ""
  private id: string | null = "0"

  Paragrafo_1: string = ""
  Paragrafo_2: string = ""
  Paragrafo_3: string = ""
  Paragrafo_4: string = ""

  Titulo_Paragrafo_1: string = ""
  Titulo_Paragrafo_2: string = ""
  Titulo_Paragrafo_3: string = ""
  Titulo_Paragrafo_4: string = ""

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null) {
    const result = dataContent.filter( article => article.id === id)[0]

      this.contentTitle = result.title
      this.contentDescription = result.description
      this.imageCover = result.imageCover

      this.Titulo_Paragrafo_1 = result.Titulo_Paragrafo_1
      this.Titulo_Paragrafo_2 = result.Titulo_Paragrafo_2
      this.Titulo_Paragrafo_3 = result.Titulo_Paragrafo_3
      this.Titulo_Paragrafo_4 = result.Titulo_Paragrafo_4


      this.Paragrafo_1 = result.Paragrafo_1
      this.Paragrafo_2 = result.Paragrafo_2
      this.Paragrafo_3 = result.Paragrafo_3
      this.Paragrafo_4 = result.Paragrafo_4

  }
}
