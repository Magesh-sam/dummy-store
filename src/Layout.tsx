import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState, type ChangeEvent, } from "react";
import CategoryList from "./components/CategoryList";
import Navbar from "./Navbar";

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

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const v = e.target?.value;
        setValue(v);
        if (v === "") {
            setSearchParams({});
        }
    }

    const toggleMenu = () => {
        setOpen(!open);
    }


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
                    <Navbar value={value} toggleMenu={toggleMenu} handleChange={handleChange} handleKeyDown={handleKeyDown} />

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