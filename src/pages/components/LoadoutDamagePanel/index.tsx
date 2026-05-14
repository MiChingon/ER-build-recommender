import { Box, Stack, Typography } from "@mui/material";
import { Stat } from "../../../data/classes";
import { Weapon } from "../../../data/weapons";
import { Affinity } from "../../../lib/types";
import { SlotPos } from "../../../common/types";
import WeaponDamageRow from "./components/WeaponDamageRow";

const LoadoutDamagePanel = ({
  loadout,
  active,
  target,
  twoHand,
}: {
  loadout: { pos: SlotPos; weapon: Weapon; affinity: Affinity }[];
  active: SlotPos;
  target: Record<Stat, number>;
  twoHand: boolean;
}) => {
  return (
    <Box>
      <Stack direction="row" spacing={1} sx={{ alignItems: "baseline", mb: 1 }}>
        <Typography variant="subtitle2">Estimated Attack Power</Typography>
        <Typography variant="caption" color="text.secondary">
          at target stats{twoHand ? ", two-handed" : ""}
        </Typography>
      </Stack>
      {loadout.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          No weapons selected.
        </Typography>
      ) : (
        <Stack spacing={1}>
          {loadout.map(({ pos, weapon, affinity }) => (
            <WeaponDamageRow
              key={`${pos.hand}-${pos.idx}`}
              pos={pos}
              weapon={weapon}
              affinity={affinity}
              target={target}
              twoHand={twoHand}
              isActive={pos.hand === active.hand && pos.idx === active.idx}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
}

export default LoadoutDamagePanel