import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { recommend } from "../../../lib/recommender";
import { cn } from "@/lib/utils";

const ClassRanking = ({
  matches,
  highlightId,
  targetLevel,
}: {
  matches: ReturnType<typeof recommend>["ranking"];
  highlightId: string;
  targetLevel: number;
}) => {
  return (
    <div>
      <h3 className="panel-heading mb-1">
        Class ranking
      </h3>
      <p className="mb-2 text-xs text-muted-foreground">
        Waste = starting points stuck above the target. Deficit = points still to invest. "Lv
        needed" is the minimum Soul Level that class would need to reach all targets; green
        if it fits within your target of {targetLevel}, red if it goes over.
      </p>
      <div className="overflow-x-auto">
        <Table className="min-w-[460px]">
          <TableHeader>
            <TableRow className="border-gold-500/20 hover:bg-transparent">
              <TableHead>Class</TableHead>
              <TableHead className="text-right">Start Lv</TableHead>
              <TableHead className="text-right">Waste</TableHead>
              <TableHead className="text-right">Deficit</TableHead>
              <TableHead className="text-right">Lv needed</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {matches.map(({ cls, waste, deficit, finalLevel }) => {
              const highlight = cls.id === highlightId;
              const fits = finalLevel <= targetLevel;
              return (
                <TableRow
                  key={cls.id}
                  className={cn(
                    "border-gold-500/10",
                    highlight &&
                      "border-l-2 border-l-gold-500 bg-gold-500/10 font-semibold hover:bg-gold-500/15",
                  )}
                >
                  <TableCell>{cls.name}</TableCell>
                  <TableCell className="text-right">{cls.level}</TableCell>
                  <TableCell className="text-right">{waste}</TableCell>
                  <TableCell className="text-right">{deficit}</TableCell>
                  <TableCell
                    className={cn("text-right", fits ? "text-green-400" : "text-red-400")}
                  >
                    {finalLevel}
                    {fits ? "" : ` (+${finalLevel - targetLevel})`}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <div className="gold-rule mt-4" />
    </div>
  );
};

export default ClassRanking;
