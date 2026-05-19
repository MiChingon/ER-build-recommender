import { useState } from "react";
import { ARMOR_SLOT_LABELS, ARMOR_SLOTS, armorBySlot, ArmorPiece, ArmorSelection, ArmorSlot, findArmor } from "../../../data/armor";
import { Box, Stack, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import GearTile from "../../../common/components/GearTile";
import GearPicker from "../../../common/components/GearPicker";

const ArmorSlots = ({
  selection,
  onChange,
}: {
  selection: ArmorSelection;
  onChange: (slot: ArmorSlot, value: ArmorPiece | null) => void;
}) => {
  const [openSlot, setOpenSlot] = useState<ArmorSlot | null>(null);
  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        Armor
      </Typography>
      <Stack direction="row" spacing={1}>
        {ARMOR_SLOTS.map((slot) => {
          const current = findArmor(selection[slot]) ?? null;
          return (
            <GearTile
              key={slot}
              label={ARMOR_SLOT_LABELS[slot]}
              image={current?.image ?? null}
              name={current?.name ?? null}
              onClick={() => setOpenSlot(slot)}
              onClear={() => onChange(slot, null)}
            />
          );
        })}
      </Stack>
      <Stack direction="row" spacing={0.5} sx={{ alignItems: "flex-start", mt: 1 }}>
        <InfoOutlinedIcon sx={{ fontSize: "0.875rem", mt: "1px", flexShrink: 0, color: "info.light" }} />
        <Typography variant="caption" sx={{ fontSize: "0.625rem", lineHeight: 1.4, color: "common.white" }}>
          Bonus stats and bonus AP from armor is not computed against the recommended stats nor the AP of a given weapon.
        </Typography>
      </Stack>
      <GearPicker
        open={openSlot !== null}
        title={openSlot ? `Select ${ARMOR_SLOT_LABELS[openSlot]}` : ""}
        options={openSlot ? armorBySlot[openSlot] : []}
        onSelect={(item) => openSlot && onChange(openSlot, item)}
        onClose={() => setOpenSlot(null)}
        secondary={(o) => `Phy ${o.phy} · Poise ${o.poise} · Wgt ${o.weight}`}
      />
    </Box>
  );
}

export default ArmorSlots
