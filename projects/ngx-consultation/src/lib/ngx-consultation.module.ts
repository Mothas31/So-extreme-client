import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxConsultationRoutingModule } from './ngx-consultation-routing.module';
import { LandingComponent } from './landing/landing.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    NgxConsultationRoutingModule,
    MaterialModule
  ],
  declarations: [LandingComponent]
})
export class NgxConsultationModule { }
