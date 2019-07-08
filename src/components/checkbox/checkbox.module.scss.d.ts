export interface Styles {
  'component': string;
  'pseudo-checkbox': string;
  'child': string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
