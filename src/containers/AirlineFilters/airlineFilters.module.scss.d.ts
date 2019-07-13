export interface Styles {
  'filter-module': string;
  'Upper-header': string;
  'filter-module-controls': string;
  'filter-module-checkbox': string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
