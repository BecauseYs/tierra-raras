import { MessageSquareText } from "lucide-react";

import { social } from '../../data/social';

const CTA = ()=> {
    const whatsappBusinessLink = `https://wa.me/${social.whatsApp}`;
    
    return(
    <section id="contact" className="w-full bg-black/90 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-5xl font-bold leading-tight text-gray-50 ">
            ¿Necesita Preparar su Terreno?
            </h2>

            <p className="mt-6 text-base leading-relaxed text-gray-200">
         Envíenos un mensaje por WhatsApp y obtenga un presupuesto
        rápido y sin compromiso.
            </p>

            <div className="mt-10 inline-flex items-center justify-center gap-2 bg-[#f08a00] px-6 py-3
                            text-sm font-semibold text-white
                            hover:bg-[#d97706] transition rounded-lg">
                <MessageSquareText className="h-5 w-5" />
                <a
                    href={whatsappBusinessLink}
                    target="_blank"
                    className=""
                >
                    Mensaje en WhatsApp
                </a>
            </div>
        </div>
    </section>  
    )
}

export default CTA;