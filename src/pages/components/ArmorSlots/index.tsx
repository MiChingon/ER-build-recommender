import { useState } from "react";
import { ARMOR_SLOT_LABELS, ARMOR_SLOTS, armorBySlot, ArmorPiece, ArmorSelection, ArmorSlot, findArmor } from "../../../data/armor";
import { Info } from "lucide-react";
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
    <div>
      <h3 className="panel-heading mb-2">
        Armor
      </h3>
      <div className="flex gap-2">
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
      </div>
      <div className="mt-2 flex items-start gap-1.5">
        <Info className="mt-px size-3.5 shrink-0 text-sky-300" />
        <p className="text-[0.625rem] leading-snug text-white">
          Bonus stats and bonus AP from armor is not computed against the recommended stats nor the AP of a given weapon.
        </p>
      </div>
      <GearPicker
        open={openSlot !== null}
        title={openSlot ? `Select ${ARMOR_SLOT_LABELS[openSlot]}` : ""}
        options={openSlot ? armorBySlot[openSlot] : []}
        onSelect={(item) => openSlot && onChange(openSlot, item)}
        onClose={() => setOpenSlot(null)}
        secondary={(o) => `Phy ${o.phy} · Poise ${o.poise} · Wgt ${o.weight}`}
      />
    </div>
  );
};

export default ArmorSlots;
