import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ccurrency'
})
export class CcurrencyPipe implements PipeTransform {

    constructor(private currencyPipe: CurrencyPipe) { }

    transform(value: number, currency: string) {
        return this.currencyPipe.transform(value / 100, currency);
    }

}

