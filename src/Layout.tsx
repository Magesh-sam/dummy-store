import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState, } from "react";
import CategoryList from "./components/CategoryList";

const Layout = () => {
    const [open, setOpen] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const [value, setValue] = useState("");
    const nav = useNavigate();

    useEffect(() => {
        setValue(searchParams.get("q") ?? "");
    }, [searchParams]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            nav(value ? `/products?q=${value}` : "/products");
        }
    };


    return (
        <main className="min-h-screen relative bg-white text-black">
            {/* Sidebar - Always rendered in DOM */}
            <aside
                className={`fixed top-0 left-0 h-screen w-48  px-5 z-10 bg-blue-300 
                transition-transform duration-300 ease-in-out
                ${open ? "translate-x-0" : "-translate-x-full"}`}
                style={{ willChange: 'transform' }}
            >
                <nav className="mt-12 text-black">
                    <CategoryList />
                </nav>
            </aside>

            {/* Main Content Area */}
            <div
                className={`grid grid-rows-[auto_1fr_auto] min-h-screen
                transition-all duration-300 ease-in-out
                ${open ? "ml-48" : "ml-0"}`}
            >
                {/* Header */}
                <header className="bg-blue-300 sticky top-0 z-20">
                    <nav className="p-5 flex items-center">
                        <button
                            onClick={() => setOpen(!open)}
                            className="p-2 hover:cursor-e-resize rounded transition-colors"
                            aria-label="Toggle sidebar"
                        >
                            ☰
                        </button>

                        <a href="/" className="mx-auto font-bold text-2xl">
                            Dummy Store
                        </a>
                        <label htmlFor="searchproducts" className="sr-only">Search Products</label>
                        <input type="search" name="searchproducts" id="searchproducts" placeholder="search products..." className="px-3 py-2  bg-white rounded-sm" value={value} onChange={(e) => {
                            const v = e.target.value;
                            setValue(v);
                            if (v === "") {
                                setSearchParams({});
                            }
                        }} onKeyDown={handleKeyDown} />
                    </nav>
                </header>

                {/* Content */}
                <section className="overflow-y-auto p-4">
                    <Outlet />
                </section>

                {/* Footer */}
                <footer className="p-3 bg-blue-100">
                    <p className="text-center font-medium text-lg">
                        All Rights Reserved © | {new Date().getFullYear()}
                    </p>
                </footer>
            </div>
        </main>
    );
};

export default Layout;