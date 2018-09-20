import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss']
})
export class StylesComponent implements OnInit {

  public isFormStyled: boolean = false;
  public isListStyled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
