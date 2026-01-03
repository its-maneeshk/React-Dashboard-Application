import { NavLink } from "react-router-dom";

function Sidebar() {
    const linkClass =
        "block py-2 px-4 rounded hover:bg-gray-700 hover:text-white transition";

    return (
        <div className="w-64 bg-gray-800 text-gray-200 min-h-screen p-5">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            <nav className="flex flex-col gap-2">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "bg-gray-700 text-white " + linkClass : linkClass
                    }
                >
                    Home
                </NavLink>
            </nav>
        </div>
    );
}

export default Sidebar;
