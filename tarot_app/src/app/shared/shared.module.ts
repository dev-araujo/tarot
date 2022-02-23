import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckComponent } from './deck/deck.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [DeckComponent, HeaderComponent],
  exports: [DeckComponent, HeaderComponent],
  imports: [CommonModule],
})
export class SharedModule {}
