import { useSelector } from "react-redux";

function Home() {
    const { products } = useSelector((state) => state.data);

    const totalProducts = products.length;
    const categories = [...new Set(products.map((p) => p.category))].length;

    return (
        <div className="space-y-6">

            {/* Welcome Banner */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Welcome to the Dashboard
                    </h1>
                    <p className="mt-2 text-gray-600 text-sm md:text-base">
                        Monitor your data, view products, and analyze metrics quickly.
                    </p>
                </div>
                <img
                    src="https://img.icons8.com/ios-filled/100/000000/dashboard.png"
                    alt="dashboard"
                    className="w-4 h-4 sm:w-16 sm:h-16 md:w-20 md:h-20"
                />

            </div>

            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Total Products */}
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition">
                    <h2 className="text-lg md:text-xl font-semibold">Total Products</h2>
                    <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
                        {totalProducts}
                    </p>
                </div>

                {/* Categories */}
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition">
                    <h2 className="text-lg md:text-xl font-semibold">Categories</h2>
                    <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
                        {categories}
                    </p>
                </div>

                {/* Active Users */}
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg transition">
                    <h2 className="text-lg md:text-xl font-semibold">Active Users</h2>
                    <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
                        230
                    </p>
                </div>
            </div>

            {/* Quick Info / Tips */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg md:text-xl font-semibold mb-3">Tips:</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm md:text-base">
                    <li>Click on "Data" in the sidebar to view product details.</li>
                    <li>Use the search box to filter products by title.</li>
                    <li>Navigate through pages using the pagination buttons.</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
