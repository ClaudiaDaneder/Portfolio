import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyDialogComponent } from './main-content/dialogs/privacy-dialog/privacy-dialog.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacy', component: PrivacyDialogComponent },
];
