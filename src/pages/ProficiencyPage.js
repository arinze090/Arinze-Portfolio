import ProficiencyCard from "../components/cards/ProficiencyCard";
import { proficiencies } from "../data/dummyData";

export default function ProficiencyPage() {
  return (
    <section className="bg-[#000] py-16 px-4 text-white">
      {proficiencies?.map((cur, i) => (
        <ProficiencyCard key={i} header={cur?.header} skills={cur?.skills} />
      ))}
    </section>
  );
}
