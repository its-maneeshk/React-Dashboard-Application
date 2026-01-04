function About() {
  return (
    <div className="bg-white p-6 mt-10 rounded-lg shadow-md max-w-6xl mx-auto space-y-4">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">About This Dashboard</h1>
      <p className="text-gray-600 text-sm md:text-base">
        This Dashboard Application is a responsive web app built using React and Redux. 
        It fetches product data from a public API, displays it in tables, and provides 
        useful insights via charts and analytics.
      </p>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">Tech Stack</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>React</li>
          <li>Redux Toolkit</li>
          <li>TailwindCSS</li>
          <li>Axios</li>
          <li>Recharts</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">Features</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Responsive dashboard layout</li>
          <li>Product table with search and pagination</li>
          <li>Product details page</li>
          <li>Analytics charts</li>
          <li>Error handling for API calls</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">Visit Github</h2>
        <p className="text-gray-600">
          Visit Github and suggest improvements <a href="https://github.com/its-maneeshk/React-Dashboard-Application.git" className="text-blue-500 hover:underline">GitHub</a>
        </p>
      </div>
    </div>
  );
}

export default About;
