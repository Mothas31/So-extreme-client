import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PartenershipComponent } from './partenership/partenership.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { CancellationPolicyComponent } from './cancellation-policy/cancellation-policy.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: 'who-are-we', component: WhoAreWeComponent},
  { path: 'how-it-work', component: HowItWorkComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'partenership', component: PartenershipComponent},
  { path: 'legal-notice', component: LegalNoticeComponent},
  { path: 'cancellation-policy', component: CancellationPolicyComponent},
  { path: 'terms', component: TermsComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxContextRoutingModule { }