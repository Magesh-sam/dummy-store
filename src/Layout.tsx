import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
    const [open, setOpen] = useState(true);

    return (
        <main className="min-h-screen">
            <aside
                className={`fixed top-0 left-0 h-screen w-48 bg-red-400 px-5
        transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                <nav className="mt-12">
                    <ul className="flex flex-col gap-3">
                        <li>category1</li>
                        <li>category2</li>
                        <li>category3</li>
                        <li>category4</li>
                    </ul>
                </nav>
            </aside>

            <div
                className={`grid grid-rows-[auto_1fr_auto] min-h-screen
        transition-all duration-300 ease-in-out}
        ${open ? "ml-48" : "ml-0"}`}
            >
                <header className="bg-blue-100">
                    <nav className="p-5 flex items-center">
                        <button onClick={() => setOpen(!open)}>☰</button>

                        <a href="/" className="mx-auto font-bold text-2xl">
                            Dummy Store
                        </a>
                    </nav>
                </header>

                <section className="overflow-y-auto">
                    <Outlet />
                </section>

                <footer>
                    <p>All Rights Reserved ©</p>
                </footer>
            </div>
        </main>
    );
};

export default Layout;
