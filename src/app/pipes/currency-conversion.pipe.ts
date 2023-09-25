import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConversion',
})
export class CurrencyConversionPipe implements PipeTransform {
  transform(
    amount: number,
    toCurrency: string,
    data: { [key: string]: number }
  ): any {
    const convertedAmount = amount * data[toCurrency];
    return convertedAmount.toFixed(2);
  }
}
