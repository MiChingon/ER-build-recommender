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
    <div>
      <div className="mb-2 flex items-baseline gap-2">
        <h3 className="panel-heading">
          Estimated Attack Power
        </h3>
        <span className="text-xs text-muted-foreground">
          at target stats{twoHand ? ", two-handed" : ""}
        </span>
      </div>
      {loadout.length === 0 ? (
        <p className="text-sm text-muted-foreground">No weapons selected.</p>
      ) : (
        <div className="space-y-2">
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
        </div>
      )}
    </div>
  );
};

export default LoadoutDamagePanel;
