import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckComponent } from './deck/deck.component';

@NgModule({
  declarations: [DeckComponent],
  exports: [DeckComponent],
  imports: [CommonModule],
})
export class SharedModule {}
