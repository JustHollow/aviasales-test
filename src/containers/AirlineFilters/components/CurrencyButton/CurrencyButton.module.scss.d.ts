export interface Styles {
  'currency-buttons': string;
  'currency-buttons-active': string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
