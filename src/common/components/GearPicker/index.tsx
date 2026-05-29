import { Box, Dialog, DialogContent, DialogTitle, List, ListItemAvatar, ListItemButton, ListItemText, TextField, Typography } from "@mui/material";
import { ReactNode, useState } from "react";

type GearOption = { id: string; name: string; image?: string };

const GearPicker = <T extends GearOption>({
  open,
  title,
  options,
  onSelect,
  onClose,
  secondary,
  header,
  footer,
  keepOpenOnSelect,
}: {
  open: boolean;
  title: string;
  options: T[];
  onSelect: (item: T) => void;
  onClose: () => void;
  secondary?: (item: T) => string;
  header?: ReactNode;
  footer?: ReactNode;
  keepOpenOnSelect?: (item: T) => boolean;
}) => {
  const [query, setQuery] = useState("");
  const handleClose = () => {
    setQuery("");
    onClose();
  };
  const q = query.trim().toLowerCase();
  const filtered = q
    ? options.filter((o) => o.name.toLowerCase().includes(q))
    : options;
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>
        {header ? <Box sx={{ mb: 1.5 }}>{header}</Box> : null}
        <TextField
          fullWidth
          autoFocus
          size="small"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{ mb: 1 }}
        />
        <List dense sx={{ maxHeight: 420, overflow: "auto" }}>
          {filtered.length === 0 ? (
            <Typography variant="body2" color="text.secondary" sx={{ p: 2, textAlign: "center" }}>
              No matches
            </Typography>
          ) : (
            filtered.map((o) => (
              <ListItemButton
                key={o.id}
                onClick={() => {
                  onSelect(o);
                  if (!keepOpenOnSelect?.(o)) handleClose();
                }}
              >
                <ListItemAvatar>
                  {o.image ? (
                    <Box
                      component="img"
                      src={o.image}
                      alt=""
                      loading="lazy"
                      sx={{ width: 36, height: 36, objectFit: "contain", bgcolor: "action.hover", borderRadius: 0.5 }}
                    />
                  ) : (
                    <Box sx={{ width: 36, height: 36, bgcolor: "action.hover", borderRadius: 0.5 }} />
                  )}
                </ListItemAvatar>
                <ListItemText
                  primary={o.name}
                  secondary={secondary ? secondary(o) : undefined}
                  slotProps={{ secondary: { noWrap: true } }}
                />
              </ListItemButton>
            ))
          )}
        </List>
        {footer ? <Box sx={{ mt: 2 }}>{footer}</Box> : null}
      </DialogContent>
    </Dialog>
  );
}

export default GearPicker
