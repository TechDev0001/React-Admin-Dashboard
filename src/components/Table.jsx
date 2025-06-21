const Table = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto rounded shadow">
      <table className="min-w-full table-auto text-left bg-white dark:bg-gray-900">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
            {headers.map((h) => (
              <th key={h} className="px-4 py-2">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-b dark:border-gray-700">
              {Object.values(row).map((val, i) => (
                <td key={i} className="px-4 py-2 text-gray-800 dark:text-gray-200">{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
