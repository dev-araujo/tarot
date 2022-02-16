import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss'],
})
export class DeckComponent implements OnInit {
  public deck: any;

  constructor(public service: DataService) {}

  ngOnInit(): void {
    this.service.list.subscribe((res) => {
      this.deck = res.cards.map((card: any) => {
        return {
          ...card,
          frontside: res.imagesUrl + card.image,
          backside: res.imageBackCard,
        };
      });
    });
  }
}
