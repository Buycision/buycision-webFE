import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const orders = [
  { id: "r1", value: "최신순" },
  { id: "r2", value: "인기순" },
];

export function OrderRadioGroup() {
  return (
    <div className="min-w-full">
      {orders &&
        orders.map((orderby) => {
          return (
            <RadioGroup key={orderby.id}>
              <div className="flex items-center space-x-2 my-1.5">
                <RadioGroupItem value={orderby.value} id={orderby.id} />
                <Label htmlFor={orderby.id}>{orderby.value}</Label>
              </div>
            </RadioGroup>
          );
        })}
    </div>
  );
}
