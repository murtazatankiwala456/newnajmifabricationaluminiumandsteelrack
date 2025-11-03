const ContactInqueriesTable = () => {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-neutral-accent border-b border-gray-200">
              <tr>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-heading uppercase tracking-wider"
                  scope="col"
                >
                  Contact ID
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-heading uppercase tracking-wider"
                  scope="col"
                >
                  Contact Name
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-heading uppercase tracking-wider"
                  scope="col"
                >
                  Contact Phone Number
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-heading uppercase tracking-wider"
                  scope="col"
                >
                  Contact Message
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-heading uppercase tracking-wider"
                  scope="col"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-body">
                  1
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-body">
                  Mohammed
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-body">
                  786955456
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-body">
                  How Much price for steel rack?
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    <i className="material-icons text-red-500 align-middle">
                      delete
                    </i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ContactInqueriesTable;
