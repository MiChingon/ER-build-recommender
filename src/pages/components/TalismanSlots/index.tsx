import { useMemo, useState } from "react";
import { Talisman, talismanBaseName, talismans } from "../../../data/talismans";
import { Box, Stack, Typography } from "@mui/material";
import GearTile from "../../../common/components/GearTile";
import GearPicker from "../../../common/components/GearPicker";

const TalismanSlots = ({
  talismanIds,
  onChange,
}: {
  talismanIds: (string | null)[];
  onChange: (slot: number, value: Talisman | null) => void;
}) => {
  const [openSlot, setOpenSlot] = useState<number | null>(null);
  const selectedBaseNames = new Set(
    talismanIds
      .map((id) => (id ? talismans.find((t) => t.id === id) : null))
      .filter((t): t is Talisman => Boolean(t))
      .map((t) => talismanBaseName(t.name)),
  );
  const pickerOptions = useMemo(() => {
    if (openSlot === null) return [] as Talisman[];
    const currentId = talismanIds[openSlot];
    const current = currentId ? talismans.find((t) => t.id === currentId) ?? null : null;
    const currentBase = current ? talismanBaseName(current.name) : null;
    return talismans.filter(
      (t) =>
        t.id === currentId ||
        !selectedBaseNames.has(talismanBaseName(t.name)) ||
        talismanBaseName(t.name) === currentBase,
    );
  }, [openSlot, talismanIds, selectedBaseNames]);

  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        Talismans (up to 4)
      </Typography>
      <Stack direction="row" spacing={1}>
        {[0, 1, 2, 3].map((slot) => {
          const currentId = talismanIds[slot];
          const current = currentId ? talismans.find((t) => t.id === currentId) ?? null : null;
          return (
            <GearTile
              key={slot}
              label={`T${slot + 1}`}
              image={current?.image ?? null}
              name={current?.name ?? null}
              onClick={() => setOpenSlot(slot)}
              onClear={() => onChange(slot, null)}
            />
          );
        })}
      </Stack>
      <GearPicker
        open={openSlot !== null}
        title={openSlot !== null ? `Select talisman (T${openSlot + 1})` : ""}
        options={pickerOptions}
        onSelect={(item) => openSlot !== null && onChange(openSlot, item)}
        onClose={() => setOpenSlot(null)}
        secondary={(o) => `${o.effect} · Wgt ${o.weight}`}
      />
    </Box>
  );
}

export default TalismanSlots
