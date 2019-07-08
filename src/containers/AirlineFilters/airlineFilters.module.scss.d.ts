export interface Styles {
  'filter-module': string;
  'Upper-header': string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
