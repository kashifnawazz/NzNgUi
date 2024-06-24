import { NgModule } from '@angular/core';
import { NzngUiComponentLibraryComponent } from './nzng-ui-component-library.component';
import { NzngInputComponent } from './nzng-input/nzng-input.component';



@NgModule({
  declarations: [
    NzngUiComponentLibraryComponent,
    NzngInputComponent
  ],
  imports: [
  ],
  exports: [
    NzngUiComponentLibraryComponent,
    NzngInputComponent
  ]
})
export class NzngUiComponentLibraryModule { }
