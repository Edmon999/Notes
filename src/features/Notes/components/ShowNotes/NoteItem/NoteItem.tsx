import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface INoteItemProps {
  signature: string;
  note: string;
  cr: string;
  noteNumber: number;
}

const NoteItem: React.FC<INoteItemProps> = ({
  signature,
  note,
  cr,
  noteNumber,
}) => {
  return (
    <Card sx={{ maxWidth: 275, m: 1 }} key={cr + noteNumber}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Signature: {signature}
        </Typography>
        <Typography variant="h5" component="div">
          Note number: {noteNumber}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          note: {note}
        </Typography>
        <Typography variant="body2">date: {cr}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">read Note</Button>
      </CardActions>
    </Card>
  );
};

export default NoteItem;
