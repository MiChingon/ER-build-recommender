import { FileDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedNumber from "@/components/er/AnimatedNumber";
import InfoTip from "@/components/er/InfoTip";
import { cn } from "@/lib/utils";

const RecommendationHeader = ({
  bestClassName,
  targetLevel,
  equipLoad,
  onDownloadPdf,
}: {
  bestClassName: string;
  targetLevel: number;
  equipLoad: import("../../../lib/types").EquipLoadSummary;
  onDownloadPdf?: () => void;
}) => {
  const loadClasses =
    equipLoad.rollCategory === "overloaded"
      ? "border-red-500/60 text-red-400"
      : equipLoad.rollCategory === "heavy"
      ? "border-amber-500/60 text-amber-400"
      : equipLoad.rollCategory === "medium"
      ? "border-gold-500/60 text-gold-300"
      : "border-green-500/60 text-green-400";
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-glow bg-gradient-to-b from-gold-300 to-gold-600 bg-clip-text text-xl font-bold tracking-wide text-transparent">
          Recommended Build
        </h2>
        {onDownloadPdf && (
          <Button
            onClick={onDownloadPdf}
            className="bg-gradient-to-b from-gold-400 to-gold-600 font-semibold text-night-950 shadow-[0_0_14px_rgba(212,175,55,0.35)] transition-shadow hover:from-gold-300 hover:to-gold-500 hover:shadow-[0_0_22px_rgba(212,175,55,0.55)]"
          >
            <FileDown />
            Download PDF
          </Button>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Badge className="bg-gold-500 px-2.5 py-1 text-night-950">
          Best class: {bestClassName}
        </Badge>
        <Badge variant="outline" className="gap-1 px-2.5 py-1">
          Target Soul Level: <AnimatedNumber value={targetLevel} className="font-bold" />
        </Badge>
        <InfoTip
          title={`Weapon ${equipLoad.weaponWeight} + Talismans ${equipLoad.talismanWeight} = ${equipLoad.totalWeight} / ${equipLoad.maxLoad} max equip load. Roll: ${equipLoad.rollCategory}.`}
        >
          <Badge variant="outline" className={cn("px-2.5 py-1", loadClasses)}>
            Equip Load: {equipLoad.totalWeight} / {equipLoad.maxLoad} ({equipLoad.percent.toFixed(0)}%)
          </Badge>
        </InfoTip>
      </div>
    </div>
  );
};

export default RecommendationHeader;
