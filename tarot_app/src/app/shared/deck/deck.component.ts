import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { shuffle } from '../utils/shuffle';
@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss'],
})
export class DeckComponent implements OnInit {
  public deck: any;
  public turnCards: boolean | any = true;
  public options: any = {
    pureClasses: [
      'deck__card',
      'card__choice',
      'card__choice--figure',
      'deck__container',
      'deck__container--choice-card',
    ],
    bootstrapClass: ['justify-content-center', 'justify-content-around'],
    buttonText: ['Novo jogo', 'Voltar'],
    headerText: ['Descubra sobre você', 'Veja seu destino'],
  };

  public classFigure: string = this.options.pureClasses[0];
  public classContainer: string = this.options.pureClasses[3];
  public classFlex: string = this.options.bootstrapClass[0];
  public buttonText: string = this.options.buttonText[0];
  public headerText: string = this.options.headerText[0];

  constructor(public service: DataService) {}

  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards() {
    this.service.list.subscribe((res) => {
      this.deck = res.cards.map((card: any) => {
        return {
          ...card,
          frontside: res.imagesUrl + card.image,
          backside: res.imageBackCard,
          turn: false,
        };
      });
    });
  }


  getOneCard(cardName: string) {
    this.deck = this.deck
      .filter((item: any) => item.name === cardName)
      .map((item: any) => {
        return {
          ...item,
          turn: true,
        };
      });
    this.buttonText = this.options.buttonText[1];
    this.classFigure = this.options.pureClasses[2];
    this.classContainer = this.options.pureClasses[4];
    this.classFlex = this.options.bootstrapClass[1];
    this.headerText = this.options.headerText[1];
  }

  getPlay() {
    let filter = this.deck
      .map((item: any) => item)
      .filter((item: any) => item.turn === true);

    if (this.turnCards) {
      this.turnCards = false;
      this.deck = shuffle(this.deck);
    }

    if (filter.length > 0) {
      this.turnCards = true;
      this.buttonText = this.options.buttonText[0];
      this.classFigure = this.options.pureClasses[0];
      this.classContainer = this.options.pureClasses[3];
      this.classFlex = this.options.bootstrapClass[0];
      this.headerText = this.options.headerText[0];
      this.getAllCards();
    }
  }
}
