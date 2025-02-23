import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const categories = [
  { id: "r1", value: "디지털기기" },
  { id: "r2", value: "생활가전" },
  { id: "r3", value: "가구/인테리어" },
  { id: "r4", value: "생활/주방" },
  { id: "r5", value: "유아동" },
  { id: "r6", value: "유아도서" },
  { id: "r7", value: "여성의류" },
  { id: "r8", value: "여성잡화" },
  { id: "r9", value: "남성패션/잡화" },
  { id: "r10", value: "뷰티/미용" },
  { id: "r11", value: "스포츠/레저" },
  { id: "r12", value: "취미/게임/음반" },
  { id: "r13", value: "도서" },
  { id: "r14", value: "티켓/교환권" },
  { id: "r15", value: "가공식품" },
  { id: "r16", value: "건강기능식품" },
  { id: "r17", value: "반려동물용품" },
  { id: "r18", value: "식물" },
  { id: "r19", value: "기타 중고물품" },
  { id: "r20", value: "삽니다" },
];

export function CategoryRadioGroup() {
  return (
    <div className="min-w-full">
      {categories &&
        categories.map((category) => {
          return (
            <RadioGroup key={category.id}>
              <div className="flex items-center space-x-2 my-1.5">
                <RadioGroupItem value={category.value} id={category.id} />
                <Label htmlFor={category.id}>{category.value}</Label>
              </div>
            </RadioGroup>
          );
        })}
    </div>
  );
}
