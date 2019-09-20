import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Interceptor } from './_services/interceptor-service/interceptor.service';
import { AppLoadService } from './_services/app-load-service/app-load.service';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgxContextModule } from 'projects/ngx-context/src/public_api';
import { NgxConsultationModule } from 'projects/ngx-consultation/src/public_api';

export function init_app(appLoadService: AppLoadService) {
  return () => appLoadService.initializer()
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxContextModule,
    NgxConsultationModule,
    NgbModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor ,
      multi: true
    },
    AppLoadService,
    { 
      provide: APP_INITIALIZER, 
      useFactory: init_app,
      deps: [AppLoadService],
      multi: true 
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
