import { ReactNode, useRef, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

type GearOption = { id: string; name: string; image?: string };

const GearPicker = <T extends GearOption>({
  open,
  title,
  options,
  onSelect,
  onClose,
  secondary,
  header,
  footer,
  keepOpenOnSelect,
}: {
  open: boolean;
  title: string;
  options: T[];
  onSelect: (item: T) => void;
  onClose: () => void;
  secondary?: (item: T) => string;
  header?: ReactNode;
  footer?: ReactNode;
  keepOpenOnSelect?: (item: T) => boolean;
}) => {
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement | null>(null);
  const handleClose = () => {
    setQuery("");
    onClose();
  };
  const q = query.trim().toLowerCase();
  const filtered = q
    ? options.filter((o) => o.name.toLowerCase().includes(q))
    : options;
  return (
    <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent
        className="glass-card max-w-[calc(100%-2rem)] gap-3 border-gold-500/30 sm:max-w-lg"
        aria-describedby={undefined}
        onOpenAutoFocus={(e) => {
          // Land focus on the search field instead of the first focusable
          // element (which would be the category Select when `header` is set).
          // Deferred a tick: Radix's FocusScope would otherwise re-grab focus
          // onto the dialog container after this handler runs.
          e.preventDefault();
          window.setTimeout(() => searchRef.current?.focus(), 50);
        }}
      >
        <DialogTitle className="font-display tracking-wide text-gold-300">{title}</DialogTitle>
        {header ? <div>{header}</div> : null}
        <Input
          ref={searchRef}
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="max-h-[420px] overflow-y-auto">
          {filtered.length === 0 ? (
            <p className="p-4 text-center text-sm text-muted-foreground">No matches</p>
          ) : (
            <ul>
              {filtered.map((o) => (
                <li key={o.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onSelect(o);
                      if (!keepOpenOnSelect?.(o)) handleClose();
                    }}
                    className="flex w-full items-center gap-3 rounded-md px-2 py-1.5 text-left transition-colors hover:bg-gold-500/10 focus-visible:bg-gold-500/10 focus-visible:outline-none"
                  >
                    {o.image ? (
                      <img
                        src={o.image}
                        alt=""
                        loading="lazy"
                        className="size-9 shrink-0 rounded-sm bg-white/5 object-contain"
                      />
                    ) : (
                      <span className="size-9 shrink-0 rounded-sm bg-white/5" />
                    )}
                    <span className="min-w-0">
                      <span className="block truncate text-sm">{o.name}</span>
                      {secondary && (
                        <span className="block truncate text-xs text-muted-foreground">
                          {secondary(o)}
                        </span>
                      )}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {footer ? <div>{footer}</div> : null}
      </DialogContent>
    </Dialog>
  );
};

export default GearPicker;
