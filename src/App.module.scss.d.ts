export interface Styles {
  'App': string;
  'logo': string;
  'tickets': string;
  'filters': string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
