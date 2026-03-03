import { Users, Zap, PiggyBank ,Forklift} from "lucide-react";

const items = [
  {
    title: "Equipo Experimentado",
    desc: "Operadores certificados con años de experiencia en el campo.",
    Icon: Users,
  },
  {
    title: "Maquinaria Moderna",
    desc: "Última flota mantenida para mayor confiabilidad y eficiencia.",
    Icon: Forklift,
  },
  {
    title: "Respuesta Rápida",
    desc: "Cotizaciones rápidas y proyecto oportuno. movilización.",
    Icon: Zap,
  },
  {
    title: "Precios Competitivos",
    desc: "Costos transparentes sin ocultos. honorarios.",
    Icon: PiggyBank,
  },
];

function BenefitCard({ title, desc, Icon }) {
  return (
    <div className="flex flex-col items-center text-center w-full">
      {/* Icono en círculo */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/10">
        <Icon className="h-6 w-6 text-[#4b6b4f]" />
      </div>

      <h3 className="mt-5 text-base font-semibold text-[#111827]">
        {title}
      </h3>

      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#6b7280]">
        {desc}
      </p>
    </div>
  );
}

const Benefits =()=> {
  return (
    <section id="benefits" className="w-full bg-[#f6f3ef] py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <BenefitCard key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;