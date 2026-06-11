import { useMemo, useState } from "react";
import { Talisman, talismanBaseName, talismans } from "../../../data/talismans";
import { Info } from "lucide-react";
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
  const pickerOptions = useMemo(() => {
    if (openSlot === null) return [] as Talisman[];
    const selectedBaseNames = new Set(
      talismanIds
        .map((id) => (id ? talismans.find((t) => t.id === id) : null))
        .filter((t): t is Talisman => Boolean(t))
        .map((t) => talismanBaseName(t.name)),
    );
    const currentId = talismanIds[openSlot];
    const current = currentId ? talismans.find((t) => t.id === currentId) ?? null : null;
    const currentBase = current ? talismanBaseName(current.name) : null;
    return talismans.filter(
      (t) =>
        t.id === currentId ||
        !selectedBaseNames.has(talismanBaseName(t.name)) ||
        talismanBaseName(t.name) === currentBase,
    );
  }, [openSlot, talismanIds]);

  return (
    <div>
      <h3 className="panel-heading mb-2">
        Talismans <span className="text-xs font-normal normal-case tracking-normal text-muted-foreground">(up to 4)</span>
      </h3>
      <div className="flex gap-2">
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
      </div>
      <div className="mt-2 flex items-start gap-1.5">
        <Info className="mt-px size-3.5 shrink-0 text-sky-300" />
        <p className="text-[0.625rem] leading-snug text-white">
          Bonuses from talismans are not computed against the recommended stats, weapons AP, equip load, or Target Soul Level.
        </p>
      </div>
      <GearPicker
        open={openSlot !== null}
        title={openSlot !== null ? `Select talisman (T${openSlot + 1})` : ""}
        options={pickerOptions}
        onSelect={(item) => openSlot !== null && onChange(openSlot, item)}
        onClose={() => setOpenSlot(null)}
        secondary={(o) => `${o.effect} · Wgt ${o.weight}`}
      />
    </div>
  );
};

export default TalismanSlots;
