export interface Styles {
  'buy--ticket': string;
  'buy--ticket-logo': string;
  'buy--button': string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
