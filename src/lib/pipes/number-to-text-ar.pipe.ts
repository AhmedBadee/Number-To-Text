import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'numberToTextAr'})
export class NumberToTextArPipe implements PipeTransform {

  first = 'الحادى';

  transform(value: any): string {
    let number: number;

    if (typeof 'value' === 'string') {
      number = parseInt(value, 10);
    } else {
      number = value;
    }

    return this.checkNumber(number);
  }

  private checkNumber(value: number): string {
    if (this.checkZero(value)) {
      return 'الارضى';
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
        return 'الاول';
      else if (value === 2)
        return 'الثانى';
      else if (value === 3)
        return 'الثالث';
      else if (value === 4)
        return 'الرابع';
      else if (value === 5)
        return 'الخامس';
      else if (value === 6)
        return 'السادس';
      else if (value === 7)
        return 'السابع';
      else if (value === 8)
        return 'الثامن';
      else
        return 'التاسع';
    } else {
      return 'العاشر';
    }
  }

  private checkTenth(value: number): string {
    let prefix = ' عشر';
    if (value > 10 && value < 20) {
      value -= 10;
      if (value === 1)
        return 'الحادى عشر';
      else
        return this.checkSingle(value) + prefix;
    } else {
      return 'العشرون';
    }
  }

  private checkTwentieth(value: number): string {
    let prefix = ' و العشرون';
    if (value > 20 && value < 30) {
      value -= 20;
      if (value === 1)
        return this.first + prefix;
      else
        return this.checkSingle(value) + prefix;
    } else {
      return 'الثلاثون';
    }
  }

  private checkThirtieth(value: number): string {
    let prefix = ' و الثلاثون';
    if (value > 30 && value < 40) {
      value -= 30;
      if (value === 1)
        return this.first + prefix;
      else
        return this.checkSingle(value) + prefix;
    } else {
      return 'الاربعون';
    }
  }

  private checkFortieth(value: number): string {
    let prefix = ' و الاربعون';
    if (value > 40 && value < 50) {
      value -= 40;
      if (value === 1)
        return this.first + prefix;
      else
        return this.checkSingle(value) + prefix;
    } else {
      return 'الخمسون';
    }
  }

  private checkFiftieth(value: number): string {
    let prefix = ' و الخمسون';
    if (value > 50 && value < 60) {
      value -= 50;
      if (value === 1)
        return this.first + prefix;
      else
        return this.checkSingle(value) + prefix;
    } else {
      return 'الستون';
    }
  }

  private checkSixtieth(value: number): string {
    let prefix = ' و الستون';
    if (value > 60 && value < 70) {
      value -= 60;
      if (value === 1)
        return this.first + prefix;
      else
        return this.checkSingle(value) + prefix;
    } else {
      return 'السبعون';
    }
  }

  private checkSeventieth(value: number): string {
    let prefix = ' و السبعون';
    if (value > 70 && value < 80) {
      value -= 70;
      if (value === 1)
        return this.first + prefix;
      else
        return this.checkSingle(value) + prefix;
    } else {
      return 'الثمانون';
    }
  }

  private checkEightieth(value: number): string {
    let prefix = ' و الثمانون';
    if (value > 80 && value < 90) {
      value -= 80;
      if (value === 1)
        return this.first + prefix;
      else
        return this.checkSingle(value) + prefix;
    } else {
      return 'التسعون';
    }
  }

  private checkNinetieth(value: number): string {
    let prefix = ' و التسعون';
    if (value > 90 && value < 100) {
      value -= 90;
      if (value === 1)
        return this.first + prefix;
      else
        return this.checkSingle(value) + prefix;
    } else {
      return 'المائة';
    }
  }
}
