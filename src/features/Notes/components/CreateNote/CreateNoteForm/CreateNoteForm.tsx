import * as React from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, MenuItem } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import {
  ICreateNoteFormInitData,
  ICreateNoteFormSendingdata,
} from "../../../interfaces/notes";

interface ICreateNoteFormProps {
  initialData: ICreateNoteFormInitData;
  onChange: (data: ICreateNoteFormSendingdata) => void;
}

const CreateNoteForm: React.FC<ICreateNoteFormProps> = ({
  initialData,
  onChange,
}) => {
  const [data, setData] = useState<ICreateNoteFormSendingdata>(null);

  React.useEffect(() => {
    const initData = {
      note: initialData.note,
      signature: initialData.signature,
      CrTimeZone: initialData.CrTimeZone,
    };
    setData(initData);
  }, []);

  const handleChange = (value: string, type: string) => {
    const changedData = {
      note: type === "note" ? value : data?.note,
      signature: type === "sign" ? value : data?.signature,
      CrTimeZone: type === "timeZone" ? value : data?.CrTimeZone,
    };
    setData(changedData);
  };

  const createBtnClicked = () => {
    onChange(data);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Note"
          multiline
          rows={4}
          defaultValue={initialData.note}
          onChange={(e) => handleChange(e.target.value, "note")}
          fullWidth
        />
      </div>
      <div style={{ display: "flex" }}>
        <TextField
          id="outlined-multiline-flexible"
          label="Signature"
          multiline
          maxRows={4}
          defaultValue={initialData.signature}
          fullWidth
          onChange={(e) => handleChange(e.target.value, "sign")}
        />
        <TextField
          id="outlined-select-currency"
          select
          label="exact time in"
          defaultValue={initialData?.CrTimeZone}
          onChange={(e) => handleChange(e.target.value, "timeZone")}
          style={{ width: "30%" }}
        >
          {initialData.timeZones.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={createBtnClicked}
          disabled={
            data?.note === "" ||
            data?.signature === "" ||
            data?.CrTimeZone === ""
          }
        >
          Create
        </Button>
      </div>
    </Box>
  );
};

export default CreateNoteForm;
