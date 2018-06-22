import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContribGraphComponent } from './contrib-graph.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [ContribGraphComponent],
  exports: [ContribGraphComponent],
  entryComponents: [ContribGraphComponent]
})
export class ContribGraphModule {}
