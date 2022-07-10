import {
  GET_TIMEZONES_LOADING,
  GET_TIMEZONES_SUCCESS,
  SAVE_NOTE_LOADING,
  SAVE_NOTE_SUCCESS,
  TNotesAction,
} from "../action/notes";

export interface ICrTimeInfo {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: any;
  dst_offset: number;
  dst_until: boolean;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
}

export interface INotesState {
  loading: boolean;
  error: boolean;
  timeZones: string[];
  saveNoteData: {
    crTimeInfo: ICrTimeInfo;
    note: string;
    signature: string;
  };
  lastNote: string;
  lastSigntarue: string;
}

const initialState: INotesState = {
  loading: false,
  error: false,
  timeZones: null,
  saveNoteData: null,
  lastNote: "",
  lastSigntarue: "",
};

const notes = (state: INotesState = initialState, action: TNotesAction) => {
  switch (action.type) {
    case GET_TIMEZONES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_TIMEZONES_SUCCESS:
      return {
        ...state,
        loading: false,
        timeZones: action.payload.flat(Infinity),
      };
    case SAVE_NOTE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SAVE_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        saveNoteData: action.payload,
      };

    default:
      return state;
  }
};

export default notes;
