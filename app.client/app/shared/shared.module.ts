import { NgModule, ErrorHandler, ModuleWithProviders } from '@angular/core';

import { MenuService } from './class';
import { SharedComponentModule } from './component';
import {
  AccordionAnchorDirective,
  AccordionLinkDirective,
  AccordionDirective,
  ToggleFullscreenDirective
} from './directive';
import { AuthGuard } from './guard';
import { GlobalErrorHandler } from './handler';
import { ApiService, HelperService } from './service';
import { getDbConfig } from './websql';
import { NgDbHelperModule } from 'ng-db-helper';

@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    ToggleFullscreenDirective
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    ToggleFullscreenDirective,
  ],
  imports: [
    NgDbHelperModule.forRoot(getDbConfig)
  ],
  providers: [
    MenuService,
    AuthGuard,
    ApiService,
    HelperService,
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ]
})
export class SharedModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: SharedModule,
  //     providers: [MenuService]
  //   };
  // }
}
