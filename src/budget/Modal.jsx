import { Dialog, DialogContent, DialogTitle } from '@mui/material';

export default function Modal({ title, open, handleClose, children }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
