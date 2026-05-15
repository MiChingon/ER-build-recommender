import { useState } from "react";
import { BuildPickerProps } from "../BuildPicker";
import { WeaponCategory } from "../../data/weapons";
import { getClass } from "../../data/classes";

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

