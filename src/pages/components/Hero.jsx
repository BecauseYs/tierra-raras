import { MessageCircle, MessageSquareText } from "lucide-react";

const Hero = () => {
    return(
  <section className="relative isolate h-[520px] w-full overflow-hidden">
      {/* Fondo */}
      <img
        src="https://images.unsplash.com/photo-1583024011792-b165975b52f5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // <-- pon tu imagen en /public/img/
        alt="Excavadora"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Contenido */}
      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        {/* Título (con subrayado) */}
        <h1 className="text-white font-extrabold leading-[1.05] tracking-tight text-4xl sm:text-5xl md:text-6xl">
          <span className="relative inline-block">
            <span className="relative z-10">Expertos en Movimiento</span>
          </span>
          <br />
          <span className="relative inline-block mt-2">
            <span className="relative z-10">de Tierras</span>
          </span>
        </h1>

        {/* Descripción */}
        <p className="mt-8 max-w-2xl text-sm sm:text-base text-white/80">
          Servicios de excavación, nivelación de terrenos y suministro de <br className="hidden sm:block" />
          agregados con maquinaria pesada propia.
        </p>

        {/* Botones */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3
                       font-semibold text-white shadow-sm
                       bg-[#f08a00] hover:bg-[#d97c00] transition"
          >
            <MessageSquareText className="h-5 w-5" />
            Solicitar Cotización por WhatsApp
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3
                       font-semibold text-white
                       border border-white/80 hover:border-white
                       bg-white/0 hover:bg-white/10 transition"
          >
            <MessageCircle className="h-5 w-5" />
            Chatear por WhatsApp
          </a>
        </div>
      </div>
    </section>
    )
}

export default Hero;