// src/components/ProyectosRecientes.jsx
const projects = [
  {
    title: "Excavación de Zanjas",
    img: "https://images.unsplash.com/photo-1629807473015-41699c4471b5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVsbGRvemVyfGVufDB8MHwwfHx8Mg%3D%3D",
    className: "col-span-12 lg:col-span-6 lg:row-span-2",
  },
  {
    title: "Transporte de Agregados",
    img: "https://images.unsplash.com/photo-1646297970360-94c9f6d8903c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVsbGRvemVyfGVufDB8MHwwfHx8Mg%3D%3D",
    className: "col-span-12 sm:col-span-6 lg:col-span-3",
  },
  {
    title: "Nivelación de Terreno",
    img: "https://images.unsplash.com/photo-1608172526605-1d262dc2d3d1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVsbGRvemVyfGVufDB8MHwwfHx8Mg%3D%3D",
    className: "col-span-12 sm:col-span-6 lg:col-span-3",
  },
  {
    title: "Preparación de Sitio",
    img: "https://images.unsplash.com/photo-1608172532765-ac3f83babe35?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJ1bGxkb3plcnxlbnwwfDB8MHx8fDI%3D",
    className: "col-span-12 lg:col-span-6 lg:col-start-7",
  },
];

function ProjectCard({ title, img, className }) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl bg-gray-200 shadow-sm",
        "ring-1 ring-black/5",
        "transition duration-700 ease-out",
        "hover:shadow-md hover:-translate-y-0.5",
        className,
      ].join(" ")}
    >
      {/* Imagen */}
      <img
        src={img}
        alt={title}
        className={[
          "h-full w-full object-cover",
          "transition duration-700 ease-out",
          "group-hover:scale-[1.03]",
        ].join(" ")}
      />

      {/* Overlay suave */}
      <div
        className={[
          "pointer-events-none absolute inset-0",
          "bg-gradient-to-t from-black/55 via-black/10 to-transparent",
          "opacity-90 transition duration-700 ease-out",
          "group-hover:opacity-100",
        ].join(" ")}
      />

      {/* Nombre del proyecto (aparece suave) */}
      <div
        className={[
          "absolute bottom-0 left-0 right-0 p-5",
          "transition duration-700 ease-out",
          "translate-y-2 opacity-0",
          "group-hover:translate-y-0 group-hover:opacity-100",
          // En mobile, siempre visible
          "opacity-100 sm:opacity-0 sm:group-hover:opacity-100",
          "translate-y-0 sm:translate-y-2 sm:group-hover:translate-y-0",
        ].join(" ")}
      >
        <div className="inline-flex items-center rounded-xl bg-white/10 px-4 py-2 backdrop-blur-md">
          <h3 className="text-white text-base font-semibold tracking-wide">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}

const Projects =()=> {
  return (
    <section  id="projects" className="w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Título */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827]">
            Proyectos Recientes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#6b7280]">
            Vea nuestra maquinaria en acción en sitios residenciales y comerciales.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-12 gap-6">
          {projects.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              img={p.img}
              className={p.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;