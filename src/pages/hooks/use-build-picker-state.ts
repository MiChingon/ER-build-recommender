import { useState } from "react";
import { Weapon, WeaponCategory } from "../../data/weapons";
import { Affinity } from "../../lib/types";
import { ArmorSelection } from "../../data/armor";
import { SlotPos } from "../../common/types";
import { getClass } from "../../data/classes";

type WeaponSlot = { weapon: Weapon | null; affinity: Affinity };

export interface BuildPickerProps {
  category: WeaponCategory | "all";
  rightHand: WeaponSlot[];
  leftHand: WeaponSlot[];
  active: SlotPos;
  weaponPickerOpen: boolean;
  affinityPickerPos: SlotPos | null;
  classId: string;
  targetLevel: number;
  twoHand: boolean;
  talismanIds: (string | null)[];
  armorSelection: ArmorSelection;
}

const useBuildPickerState = (initialState: BuildPickerProps) => {
  const [state, setState] = useState<BuildPickerProps>(initialState);

  return {
    state: state,
    actions: {
        setCategory: (category: WeaponCategory | "all") => setState((s) => ({ ...s, category })),
        setRightHand: (rightHand: BuildPickerProps["rightHand"]) => setState((s) => ({ ...s, rightHand })),
        setLeftHand: (leftHand: BuildPickerProps["leftHand"]) => setState((s) => ({ ...s, leftHand })),
        setActive: (active: BuildPickerProps["active"]) => setState((s) => ({ ...s, active })),
        setWeaponPickerOpen: (weaponPickerOpen: boolean) => setState((s) => ({ ...s, weaponPickerOpen })),
        setAffinityPickerPos: (affinityPickerPos: BuildPickerProps["affinityPickerPos"]) => setState((s) => ({ ...s, affinityPickerPos })),
        setClassId: (classId: string) => {
          const classArmor = getClass(classId)?.armor ?? null;
          setState((s) => ({ ...s, classId, armorSelection: classArmor ? { ...s.armorSelection, ...classArmor } : s.armorSelection }));
        },
        setTargetLevel: (targetLevel: number) => setState((s) => ({ ...s, targetLevel })),
        setTwoHand: (twoHand: boolean) => setState((s) => ({ ...s, twoHand })),
        setTalismanIds: (talismanIds: (string | null)[]) => setState((s) => ({ ...s, talismanIds })),
        setArmorSelection: (armorSelection: BuildPickerProps["armorSelection"]) => setState((s) => ({ ...s, armorSelection })),
    }
  }
}

export default useBuildPickerState;
