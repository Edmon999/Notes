import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface INotePaginationProps {
  count: number;
  onChange: (v: number) => void;
}

const NotePagination: React.FC<INotePaginationProps> = ({
  count,
  onChange,
}) => {
  const handleChange = (_e: React.ChangeEvent<unknown>, value: number) => {
    onChange(value);
  };
  return (
    <Stack spacing={2}>
      <Pagination count={count} onChange={handleChange} />
    </Stack>
  );
};

export default NotePagination;
