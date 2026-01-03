import { useSelector } from "react-redux";

function Home() {
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
        </div>
    );
}

export default Home;
