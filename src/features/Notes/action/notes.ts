import axios from "axios";
import { toast } from "react-toastify";
import { ICreateNoteFormSendingdata } from "../interfaces/notes";
import { ICrTimeInfo } from "../reducer/notes";
import StorageMethod, { storageTypes } from "../services/storage";

export const GET_TIMEZONES_LOADING = "GET_CLIENTS_LOADING";
export const GET_TIMEZONES_SUCCESS = "GET_CLIENTS_SUCCESS";
export const GET_TIMEZONES_FAILURE = "GET_CLIENTS_FAILURE";

export const getTimeZones = () => {
  return async (dispatch: any) => {
    dispatch({ type: GET_TIMEZONES_LOADING });
    try {
      const timeZonesData = await axios.get(
        `http://worldtimeapi.org/api/timezone`
      );
      dispatch({ type: GET_TIMEZONES_SUCCESS, payload: timeZonesData.data });
    } catch (e) {
      dispatch({ type: GET_TIMEZONES_FAILURE });
    }
  };
};

export const SAVE_NOTE_LOADING = "SAVE_NOTE_LOADING";
export const SAVE_NOTE_SUCCESS = "SAVE_NOTE_SUCCESS";
export const SAVE_NOTE_FAILURE = "SAVE_NOTE_FAILURE";

type saveInStorage = {
  note: string;
  signature: string;
  tz: string;
  date: Record<string, any>;
};
const saveInStorage = (savedData: saveInStorage) => {
  let allData = JSON.parse(StorageMethod.getStorageItem("notes"));
  allData ? (allData = [...allData, savedData]) : (allData = [savedData]);

  StorageMethod.setInStorage(
    "notes",
    JSON.stringify(allData),
    storageTypes.localStorage
  );
};

export const saveNote = (data: ICreateNoteFormSendingdata) => {
  return async (dispatch: any) => {
    dispatch({ type: SAVE_NOTE_LOADING });
    try {
      const crTimeInfo = await axios.get(
        `https://worldtimeapi.org/api/timezone/${data.CrTimeZone}`
      );
      const savedData = {
        note: data.note,
        signature: data.signature,
        tz: data.CrTimeZone,
        date: crTimeInfo.data.datetime,
      };
      saveInStorage(savedData);

      dispatch({
        type: SAVE_NOTE_SUCCESS,
        payload: {
          crTimeInfo: crTimeInfo.data,
          note: data.note,
          signature: data.signature,
        },
      });
      toast.success("Note created!");
    } catch (e) {
      dispatch({ type: GET_TIMEZONES_FAILURE });
    }
  };
};

type tGetTimeZonesActionSuccess = {
  type: typeof GET_TIMEZONES_SUCCESS;
  payload: string[];
};

type TSaveNoteActionSuccess = {
  type: typeof SAVE_NOTE_SUCCESS;
  payload: {
    crTimeInfo: ICrTimeInfo;
    note: string;
    signature: string;
  };
};

type TSaveNoteActionLoading = {
  type: typeof SAVE_NOTE_LOADING;
};

type TGetTimeZonesActionLoading = {
  type: typeof GET_TIMEZONES_LOADING;
};

export type TNotesAction =
  | tGetTimeZonesActionSuccess
  | TGetTimeZonesActionLoading
  | TSaveNoteActionSuccess
  | TSaveNoteActionLoading;
