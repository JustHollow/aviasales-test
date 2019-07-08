export interface Styles {
  'checkbox-item': string;
  'only-button': string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
