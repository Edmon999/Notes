import { useState } from "react";
import { INoteData } from "../../interfaces/notes";
import StorageMethod from "../../services/storage";
import NoteItem from "./NoteItem/NoteItem";
import NotePagination from "./Pagination/Pagination";

const ShowNotes: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const notesData: INoteData[] =
    JSON.parse(StorageMethod.getStorageItem("notes")) || [];

  const rednerNoteItems = () => {
    return notesData.map((el: INoteData, index: number) => {
      return index < page * 6 && index >= (page - 1) * 6 ? (
        <div key={el.date}>
          {" "}
          <NoteItem
            signature={el.signature}
            note={el.note}
            cr={el.date}
            noteNumber={index + 1}
          />
        </div>
      ) : null;
    });
  };

  return (
    <>
      <div style={{ display: "flex", margin: "10px", flexWrap: "wrap" }}>
        {rednerNoteItems()}
      </div>
      <NotePagination
        count={Math.ceil(notesData?.length / 6)}
        onChange={(p) => {
          setPage(p);
        }}
      />
    </>
  );
};

export default ShowNotes;
