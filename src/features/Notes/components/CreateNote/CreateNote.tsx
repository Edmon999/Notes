import { useEffect } from "react";
import Loading from "../../../../component/Loading/Loading";
import { useTypedDispatch, useTypedSelector } from "../../../../store/store";
import { getTimeZones, saveNote } from "../../action/notes";
import StorageMethod from "../../services/storage";
import CreateNoteForm from "./CreateNoteForm/CreateNoteForm";

const CreateNote: React.FC = () => {
  const dispatch = useTypedDispatch();

  const { timeZones, loading } = useTypedSelector((state) => state.notes);

  let lastNoteData = {
    note: "",
    signature: "",
    timeZones: timeZones,
    tz: "",
  };
  if (JSON.parse(StorageMethod.getStorageItem("notes"))) {
    lastNoteData = JSON.parse(StorageMethod.getStorageItem("notes")).at(-1);
  }
  useEffect(() => {
    dispatch(getTimeZones());
  }, []);

  return (
    <Loading isLoading={loading}>
      {timeZones && (
        <CreateNoteForm
          initialData={{
            note: "",
            signature: lastNoteData?.signature || "",
            timeZones: timeZones,
            CrTimeZone: lastNoteData?.tz || "",
          }}
          onChange={(data) => {
            dispatch(saveNote(data));
          }}
        />
      )}
    </Loading>
  );
};

export default CreateNote;
