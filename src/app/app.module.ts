import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import pt from '@angular/common/locales/pt';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NZ_I18N, pt_BR } from 'ng-zorro-antd/i18n';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { CarteiraEditComponent } from './modules/cadastros/carteiras/components/carteira-edit/carteira-edit.component';
import { CarteirasComponent } from './modules/cadastros/carteiras/components/carteiras/carteiras.component';
import { AppRoutingModule } from './routes/app-routing.module';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    CarteirasComponent,
    CarteiraEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzLayoutModule,
    NzMenuModule,
    NzTableModule,
    NzToolTipModule,
    NzDropDownModule,
    NzButtonModule,
    NzInputModule,
    NzFormModule,
    NzGridModule,
    NzSelectModule,
    NzBreadCrumbModule,
    NzModalModule,
    NzSpinModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzListModule,
    NzBadgeModule,
    NzMessageModule,
    NzResultModule,
    NzUploadModule,
    NzAlertModule,
    NzCollapseModule,
    NzCardModule,
    NzInputNumberModule,
    NzDividerModule,
    NzDescriptionsModule,
    NzProgressModule,
    NzEmptyModule,
    NzTagModule,
    NzStepsModule,
    NzBadgeModule,
    NzSkeletonModule,
    NzCommentModule,
    NzAutocompleteModule,
    NzTabsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: pt_BR }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
