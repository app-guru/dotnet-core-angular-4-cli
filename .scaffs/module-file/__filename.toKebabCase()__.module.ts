import { NgModule } from '@angular/core';


@NgModule({
  imports: [

  ],
  declarations: []
})
export class <%= (modulename.toString().length > 0) ? modulename.toProperCase() : filename.toProperCase() %>Module { }
