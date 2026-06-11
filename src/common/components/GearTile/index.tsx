import { X } from "lucide-react";
import InfoTip from "@/components/er/InfoTip";

const GearTile = ({
  label,
  image,
  name,
  onClick,
  onClear,
}: {
  label: string;
  image: string | null;
  name: string | null;
  onClick: () => void;
  onClear: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className="group relative flex min-h-24 min-w-0 flex-1 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg border border-gold-500/20 bg-night-900/50 p-2 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gold-500/60 hover:shadow-[0_0_14px_rgba(212,175,55,0.18)]"
    >
      <span className="absolute top-0.5 left-1.5 text-[0.65rem] text-muted-foreground">
        {label}
      </span>
      {image ? (
        <>
          <img
            src={image}
            alt=""
            loading="lazy"
            className="size-12 shrink-0 rounded-sm bg-white/5 object-contain"
          />
          {name && (
            <InfoTip title={name}>
              <span className="mt-1 block w-full truncate text-center text-xs leading-tight">
                {name}
              </span>
            </InfoTip>
          )}
          <button
            type="button"
            aria-label="Clear slot"
            onClick={(e) => {
              e.stopPropagation();
              onClear();
            }}
            className="absolute top-0 right-0 rounded p-1.5 text-sm leading-none text-muted-foreground opacity-80 transition-colors hover:text-gold-300 sm:p-1 sm:text-xs"
          >
            <X className="size-3.5" />
          </button>
        </>
      ) : (
        <span className="text-xs text-stone-500">Empty</span>
      )}
    </div>
  );
};

export default GearTile;
