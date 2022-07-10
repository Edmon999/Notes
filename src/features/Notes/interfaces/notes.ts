export interface ICreateNoteFormInitData {
  note: string;
  signature: string;
  timeZones: string[];
  CrTimeZone: string;
}

export interface ICreateNoteFormSendingdata {
  note: string;
  signature: string;
  CrTimeZone: string;
}

export interface INoteData {
  note: string;
  signature: string;
  tz: string;
  date: string;
}
