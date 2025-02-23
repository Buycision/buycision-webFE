import { Badge } from "@/components/ui/badge";
import { ChevronDown, MapPin } from "lucide-react";

export function GPSBadge() {
  return (
    <Badge variant="secondary" className="h-10 px-3 gap-1">
      <MapPin className="relative top-[1px] h-5 w-5" />
      <div className=" text-nowrap">성동구</div>
      <ChevronDown
        className="relative top-[1px] h-5 w-5 opacity-70"
        aria-hidden="true"
      />
    </Badge>
  );
}
