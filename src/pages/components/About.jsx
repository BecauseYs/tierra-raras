const About =()=> {
  return (
    <section id="about" className="w-full bg-white py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-7 px-6 lg:grid-cols-2">
        {/* Columna izquierda: imagen */}
        <div className="relative">
          {/* Marco azul */}
          <div className="rounded-md border-[3px] border-[#f08a00] p-2">
            <div className="overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1649829726631-fcd218631ab5?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // <-- pon tu imagen en /public/img/
                alt="Maquinaria pesada"
                className="h-[360px] w-full object-cover sm:h-[420px] lg:h-[460px]"
              />
            </div>
          </div>

          {/* Badge naranja */}
          <div className="absolute bottom-8 left-8 rounded-lg bg-[#f08a00] px-7 py-5 text-white shadow-md">
            <div className="text-3xl font-extrabold leading-none">20+</div>
            <div className="mt-1 text-sm font-medium opacity-95">
              Años Experiencia
            </div>
          </div>
        </div>

        {/* Columna derecha: contenido */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold leading-tight text-[#111827] ">
            Construyendo la Base de su <br className="hidden sm:block" />
            Éxito
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[#6b7280]">
            En Tierras Raras, combinamos décadas de experiencia en la industria
            con una flota moderna de maquinaria pesada. Entendemos que cada gran
            proyecto comienza con el suelo sobre el que se asienta.
          </p>

          <p className="mt-6 text-base leading-relaxed text-[#6b7280]">
            Nuestro equipo de operadores certificados garantiza eficiencia,
            seguridad y precisión en cada trabajo, ya sea una limpieza de lote
            residencial o una excavación comercial masiva.
          </p>

          <div className="mt-10">
            <a
              href="#benefits"
              className="inline-flex items-center justify-center rounded-lg
                         border-2 border-[#111827] px-6 py-3
                         text-sm font-semibold text-[#111827]
                         hover:bg-black/5 transition"
            >
              Ver Beneficios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About