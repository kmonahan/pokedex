import { StatBar, StatWrapper } from "./stat.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { statPercent } from "../../base/vars.css";
import { h4 } from "../../base/headings.css";

interface StatProps {
  name: string;
  value: number;
}

function Stat({ name, value }: StatProps) {
  return (
    <div className={StatWrapper}>
      <h4 className={h4}>{name.replace("-", " ")}</h4>
      <div
        className={StatBar}
        style={assignInlineVars({
          [statPercent]: `${(value / 255) * 100}%`,
        })}
      />
    </div>
  );
}

export default Stat;
