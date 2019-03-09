# Number To Text

Number To Text is an angular module that contains a set of pipes to convert numbers into words.

## Features
1. Convert numbers into words for both languages (Arabic and English)
   -more languages will be added later-.
2. Can convert from 0 to 100 as ordinal numbers.
3. It can be used for ordering, building floors, etc.

## Installation

Use npm to install:

```bash
npm i ng-number-to-text
```

## Usage
1. First, import the module:

```angular2
import {NumberToTextModule} from 'ng-number-to-text';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    NumberToTextModule,
    ...
  ],
  providers: [...],
  bootstrap: [...]
})
export class AppModule { }

```
2. Second, use it in your component in one of two ways:
   1. in your *.ts file:
```angular2
import {Component, OnInit} from '@angular/core';
import {NumberToTextPipe} from 'ng-number-to-text/lib/pipes/number-to-text.pipe';
import {NumberToTextArPipe} from 'ng-number-to-text/lib/pipes/number-to-text-ar.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NumberToTextPipe, NumberToTextArPipe]
})
export class AppComponent implements OnInit {
  textEn: string;
  textAr: string;

  constructor(
    private numberToTextPipe: NumberToTextPipe,
    private numberToTextArPipe: NumberToTextArPipe) {}

  ngOnInit(): void {
    this.textEn = this.numberToTextPipe.transform(12);
    this.textAr = this.numberToTextArPipe.transform(12);
  }
}
```
   2. in your *.html file:
```html
<h1>{{'45' | numberToText}}</h1>
<h1>{{'45' | numberToTextAr}}</h1>
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
