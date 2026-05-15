import { Box, Dialog, DialogContent, DialogTitle, List, ListItemButton, ListItemText, Stack, Typography } from "@mui/material";
import { Weapon } from "../../../data/weapons";
import { Affinity, AFFINITIES } from "../../../lib/types";

const AffinityPicker = ({
  open,
  weapon,
  currentAffinity,
  onSelect,
  onClose,
}: {
  open: boolean;
  weapon: Weapon | null;
  currentAffinity: Affinity;
  onSelect: (a: Affinity) => void;
  onClose: () => void;
}) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>Change infusion</DialogTitle>
      <DialogContent dividers>
        {weapon && (
          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 2 }}>
            {weapon.image ? (
              <Box
                component="img"
                src={weapon.image}
                alt=""
                loading="lazy"
                sx={{ width: 48, height: 48, objectFit: "contain", bgcolor: "action.hover", borderRadius: 0.5, flexShrink: 0 }}
              />
            ) : (
              <Box sx={{ width: 48, height: 48, bgcolor: "action.hover", borderRadius: 0.5, flexShrink: 0 }} />
            )}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography variant="body2" sx={{ fontWeight: 600 }} noWrap>
                {weapon.name}
              </Typography>
              <Typography variant="caption" color="text.secondary" noWrap sx={{ display: "block" }}>
                {weapon.category}
              </Typography>
            </Box>
          </Stack>
        )}
        <List dense sx={{ maxHeight: 420, overflow: "auto" }}>
          {AFFINITIES.map((a) => (
            <ListItemButton
              key={a}
              selected={a === currentAffinity}
              onClick={() => {
                onSelect(a);
                onClose();
              }}
            >
              <ListItemText primary={a} />
            </ListItemButton>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default AffinityPicker;
