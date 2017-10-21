import { NgModule, ErrorHandler } from '@angular/core';

import { MenuItems } from './menu-items/menu-items';
import {
  AccordionAnchorDirective,
  AccordionLinkDirective,
  AccordionDirective
} from './accordion';
import { ToggleFullscreenDirective } from './fullscreen/toggle-fullscreen.directive';
import { AuthGuard } from './guards';
import { getDbConfig } from './db-store';
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
    ToggleFullscreenDirective
  ],
  imports: [NgDbHelperModule.forRoot(getDbConfig)],
  providers: [MenuItems, AuthGuard]
})
export class SharedModule {}
