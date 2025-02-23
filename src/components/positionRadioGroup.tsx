import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const regions = [
  { id: "r1", value: "종암동" },
  { id: "r2", value: "길음동" },
  { id: "r3", value: "석관동" },
  { id: "r4", value: "하월곡동" },
  { id: "r5", value: "장위동" },
  { id: "r6", value: "정릉동" },
];

export function PositionRadioGroup() {
  return (
    <div className="min-w-full">
      {regions &&
        regions.map((region) => {
          return (
            <RadioGroup key={region.id}>
              <div className="flex items-center space-x-2 my-1.5">
                <RadioGroupItem value={region.value} id={region.id} />
                <Label htmlFor={region.id}>{region.value}</Label>
              </div>
            </RadioGroup>
          );
        })}
    </div>
  );
}
