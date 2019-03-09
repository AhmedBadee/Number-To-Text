import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'numberToText'})
export class NumberToTextPipe implements PipeTransform {
  transform(value: any): string {
    let number: number;

    if (typeof 'value' === 'string') {
      number = parseInt(value, 10);
    } else {
      number = value;
    }
    
    let text = this.checkNumber(number);

    return 'The ' + text;
  }
  
  private checkNumber(value: number): string {
    if (this.checkZero(value)) {
      return 'zeroth';
    } else {
      if (value > 0 && value <= 10)
        return this.checkSingle(value);
      else if (value > 10 && value <= 20)
        return this.checkTenth(value);
      else if (value > 20 && value <= 30)
        return this.checkTwentieth(value);
      else if (value > 30 && value <= 40)
        return this.checkThirtieth(value);
      else if (value > 40 && value <= 50)
        return this.checkFortieth(value);
      else if (value > 50 && value <= 60)
        return this.checkFiftieth(value);
      else if (value > 60 && value <= 70)
        return this.checkSixtieth(value);
      else if (value > 70 && value <= 80)
        return this.checkSeventieth(value);
      else if (value > 80 && value <= 90)
        return this.checkEightieth(value);
      else if (value > 90 && value <= 100)
        return this.checkNinetieth(value);
    }
  }

  private checkZero(value: number): boolean {
    return value === 0;
  }

  private checkSingle(value: number): string {
    if (value < 10 && value > 0) {
      if (value === 1)
        return 'first';
      else if (value === 2)
        return 'second';
      else if (value === 3)
        return 'third';
      else if (value === 4)
        return 'fourth';
      else if (value === 5)
        return 'fifth';
      else if (value === 6)
        return 'sixth';
      else if (value === 7)
        return 'seventh';
      else if (value === 8)
        return 'eighth';
      else
        return 'ninth';
    } else {
      return 'tenth';
    }
  }

  private checkTenth(value: number): string {
    if (value > 10 && value < 20) {
      if (value === 11)
        return 'eleventh';
      else if (value === 12)
        return 'twelfth';
      else if (value === 13)
        return 'thirteenth';
      else if (value === 14)
        return 'fourteenth';
      else if (value === 15)
        return 'fifteenth';
      else if (value === 16)
        return 'sixteenth';
      else if (value === 17)
        return 'seventeenth';
      else if (value === 18)
        return 'eighteenth';
      else if (value === 19)
        return 'nineteenth';
    } else {
      return 'twentieth';
    }
  }

  private checkTwentieth(value: number): string {
    let prefix = 'twenty-';
    if (value > 20 && value < 30) {
      value -= 20;
      return prefix + this.checkSingle(value);
    } else {
      return 'thirtieth';
    }
  }

  private checkThirtieth(value: number): string {
    let prefix = 'thirty-';
    if (value > 30 && value < 40) {
      value -= 30;
      return prefix + this.checkSingle(value);
    } else {
      return 'fortieth';
    }
  }

  private checkFortieth(value: number): string {
    let prefix = 'forty-';
    if (value > 40 && value < 50) {
      value -= 40;
      return prefix + this.checkSingle(value);
    } else {
      return 'fiftieth';
    }
  }

  private checkFiftieth(value: number): string {
    let prefix = 'fifty-';
    if (value > 50 && value < 60) {
      value -= 50;
      return prefix + this.checkSingle(value);
    } else {
      return 'sixtieth';
    }
  }

  private checkSixtieth(value: number): string {
    let prefix = 'sixty-';
    if (value > 60 && value < 70) {
      value -= 60;
      return prefix + this.checkSingle(value);
    } else {
      return 'seventieth';
    }
  }

  private checkSeventieth(value: number): string {
    let prefix = 'seventy-';
    if (value > 70 && value < 80) {
      value -= 70;
      return prefix + this.checkSingle(value);
    } else {
      return 'eightieth';
    }
  }

  private checkEightieth(value: number): string {
    let prefix = 'eighty-';
    if (value > 80 && value < 90) {
      value -= 80;
      return prefix + this.checkSingle(value);
    } else {
      return 'ninetieth';
    }
  }

  private checkNinetieth(value: number): string {
    let prefix = 'ninety-';
    if (value > 90 && value < 100) {
      value -= 90;
      return prefix + this.checkSingle(value);
    } else {
      return 'hundredth';
    }
  }
}
