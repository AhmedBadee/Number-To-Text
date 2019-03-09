import { NgModule } from '@angular/core';
import {NumberToTextPipe} from './pipes/number-to-text.pipe';
import {NumberToTextArPipe} from './pipes/number-to-text-ar.pipe';

@NgModule({
  imports: [
  ],
  declarations: [NumberToTextPipe, NumberToTextArPipe],
  exports: [NumberToTextPipe, NumberToTextArPipe]
})
export class NumberToTextModule { }
