
const Layout = ({ children , className}) => {
    return (
        <section className={` mx-auto w-full scroll-mt-24  ${className}`}>
            {children}
        </section>
  );
}

export default Layout;