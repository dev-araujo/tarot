import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingModule } from './routing.module';

import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PlayComponent } from './play/play.component';

@NgModule({
  declarations: [HomeComponent, PlayComponent],
  imports: [CommonModule, RoutingModule, SharedModule],
})
export class PagesModule {}
