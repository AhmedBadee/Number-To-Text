import { NgModule } from '@angular/core';
import {NumberToTextPipe} from './pipes/number-to-text.pipe';
import {NumberToTextArPipe} from './pipes/number-to-text-ar.pipe';
import {NumberToTextArFemPipe} from './pipes/number-to-text-ar-fem.pipe';

@NgModule({
  imports: [
  ],
  declarations: [NumberToTextPipe, NumberToTextArPipe, NumberToTextArFemPipe],
  exports: [NumberToTextPipe, NumberToTextArPipe, NumberToTextArFemPipe]
})
export class NumberToTextModule { }
