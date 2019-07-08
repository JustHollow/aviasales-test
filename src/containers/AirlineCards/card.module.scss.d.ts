export interface Styles {
  'vertical-line': string;
  'card': string;
  'ticket--information': string;
  'text-group-time': string;
  'text-group-airport': string;
  'text-group-date': string;
  'ticket-stops': string;
  'ticket-stops-text': string;
}

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
