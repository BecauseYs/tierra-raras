// src/components/Servicios.jsx
import {
  Wrench,
  Mountain,
  Truck,
  Trees,
} from "lucide-react";

const Servicios = () =>  {
  return (
    <section id="services" className="w-full bg-[#f3f4f6] py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Encabezado */}
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] leading-tight">
            Movimientos de Tierra Integrales
          </h2>
          <p className="mt-4 text-lg text-[#6b7280] leading-relaxed max-w-2xl">
            Ofrecemos una amplia gama de servicios especializados para preparar su
            sitio para el éxito.
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="mt-7 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Card 1 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition hover:scale-105">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#fde8d2]">
              <Wrench className="h-6 w-6 text-[#f08a00]" />
            </div>

            <h3 className="text-xl font-semibold text-[#111827]">
              Excavación
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#6b7280]">
              Excavación profunda y superficial para cimientos, sótanos y zanjas
              de servicios con precisión.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md hover:scale-105 transition">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#fde8d2]">
              <Mountain className="h-6 w-6 text-[#f08a00]" />
            </div>

            <h3 className="text-xl font-semibold text-[#111827]">
              Nivelación de Terreno
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#6b7280]">
              Nivelación profesional para asegurar una superficie plana y
              estable para cualquier construcción.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition hover:scale-105">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#fde8d2]">
              <Truck className="h-6 w-6 text-[#f08a00]" />
            </div>

            <h3 className="text-xl font-semibold text-[#111827]">
              Suministro de Agregados
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#6b7280]">
              Transporte y suministro confiable de arena, grava, piedra triturada
              y tierra vegetal.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition hover:scale-105">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#fde8d2]">
              <Trees className="h-6 w-6 text-[#f08a00]" />
            </div>

            <h3 className="text-xl font-semibold text-[#111827]">
              Preparación del Sitio
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#6b7280]">
              Servicio de limpieza de terrenos, eliminación de tocones y
              acarreo de escombros.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Servicios;