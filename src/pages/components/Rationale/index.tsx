const Rationale = ({ rationale }: { rationale: string[] }) => {
  return (
    <div>
      <h3 className="panel-heading mb-2">
        Why these targets
      </h3>
      <ul className="m-0 list-disc space-y-1 pl-5 marker:text-gold-500/60">
        {rationale.map((r) => (
          <li key={r} className="text-sm text-muted-foreground">
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rationale;
