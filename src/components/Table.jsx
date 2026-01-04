function Table({ data }) {
  return (
    <table className="min-w-full border border-gray-300 rounded overflow-hidden">
      <thead className="bg-gray-200">
        <tr>
          <th className="px-4 py-2 text-left">Title</th>
          <th className="px-4 py-2 text-left">Category</th>
          <th className="px-4 py-2 text-left">Price ($)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="border-t border-gray-300">
            <td className="px-4 py-2">{item.title}</td>
            <td className="px-4 py-2">{item.category}</td>
            <td className="px-4 py-2">{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
