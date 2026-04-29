import PageHeader from "../components/PageHeader";
import frameworkData from "./framework.json";

export default function Customers() {
  const customers = frameworkData.customers;

  const getLoyaltyColor = (loyalty) => {
    switch (loyalty) {
      case "Gold":
        return "bg-yellow-100 text-yellow-700";
      case "Silver":
        return "bg-gray-200 text-gray-700";
      case "Bronze":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <PageHeader />

      <div className="p-6">
        <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Customer Management
              </h1>
              <p className="text-gray-500 mt-1">
                Manage all registered customers here
              </p>
            </div>

            <div className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow">
              Total: {customers.length} Customers
            </div>
          </div>

          <div className="grid gap-5">
            {customers.map((customer, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition rounded-2xl p-5 border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg shadow">
                    {customer.customerName.charAt(0)}
                  </div>

                  <div>
                    <h2 className="font-semibold text-lg text-gray-800">
                      {customer.customerName}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {customer.customerId}
                    </p>
                  </div>
                </div>

                <div className="flex-1 px-10">
                  <p className="text-gray-700">{customer.email}</p>
                  <p className="text-sm text-gray-500">{customer.phone}</p>
                </div>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${getLoyaltyColor(
                    customer.loyalty
                  )}`}
                >
                  {customer.loyalty}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}