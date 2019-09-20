import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxContextRoutingModule } from './ngx-context-routing.module';
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PartenershipComponent } from './partenership/partenership.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { CancellationPolicyComponent } from './cancellation-policy/cancellation-policy.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

@NgModule({
  imports: [
    CommonModule,
    NgxContextRoutingModule
  ],
  declarations: [WhoAreWeComponent, HowItWorkComponent, ContactUsComponent, PartenershipComponent, LegalNoticeComponent, CancellationPolicyComponent, TermsComponent, PrivacyPolicyComponent]
})
export class NgxContextModule { }
