
const redes = [
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/efefilm',
    },  
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/efefilm',
    }, 
    {
        name: 'Vimeo',
        href: 'https://www.vimeo.com/efefilm',
    },   
]

const Footer = () => {
    return (
        <footer className="grid grid-cols-1 md:grid-cols-3 mx-auto max-w-7xl px-6 py-10 text-sm text-black items-center gap-4">
            {/* Logo */}
            <a href="#" className="font-semibold flex flex-center tracking-tight text-black text-center mx-auto uppercase ">
                {/* <img src="/images/logo/EfeFilmsblanco.png" alt="EFE Films Logo" className="h-12 w-auto" /> */}
                Tierra Raras
            </a>
            <div className="text-center md:text-start uppercase text-xs tracking-[0.15em] text-black/85 md:w-[550px] overflow-hidden">
                <p>© {new Date().getFullYear()} TIERRAS RARAS SPA, todos los derechos reservados.</p>
            </div>
            <div className="flex flex-row gap-10 items-center justify-center md:justify-end gap-4">
                {redes.map((red, idx) => (
                    <a
                        key={idx}
                        href={red.href}
                        className="inline-flex h-10 w-10 items-center justify-center   text-black/85 hover:text-black transition"
                        // aria-label={red.name}
                    >
                        {red.name}
                    </a>
                ))}
                
            </div>
        </footer>
    )
}

export default Footer
