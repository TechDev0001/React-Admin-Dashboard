const products = [
  {
    name: "iPhone 15 Pro",
    category: "Electronics",
    stock: 12,
    price: "$1,199",
    status: "Active",
    image:
      "/iPhone-15.webp",
  },
  {
    name: "Sony WH-1000XM5",
    category: "Audio",
    stock: 0,
    price: "$399",
    status: "Out of Stock",
    image: "/Adidas.webp",
  },
  {
    name: "Dell XPS 13",
    category: "Laptops",
    stock: 5,
    price: "$1,299",
    status: "Active",
    image: "/Dell.jfif",
  },
  {
    name: "Nike Air Max",
    category: "Footwear",
    stock: 18,
    price: "$180",
    status: "New",
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/76d1b391-5c34-4e76-92a7-c3009c23e010/air-max-90-shoes-WrC6cJ.png",
  },
];

const StatusBadge = ({ status }) => {
  const base = "px-2 py-1 text-xs font-medium rounded-full";
  const styles = {
    Active: "bg-green-100 text-green-700",
    "Out of Stock": "bg-red-100 text-red-700",
    New: "bg-blue-100 text-blue-700",
  };
  return (
    <span className={`${base} ${styles[status] || "bg-gray-200 text-gray-600"}`}>
      {status}
    </span>
  );
};

export const ProductsSection = () => (
  <section className="bg-white p-4 sm:p-6 rounded shadow w-full col-span-full">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
      <h2 className="text-lg sm:text-xl font-bold">Products</h2>
      <span className="text-sm text-gray-500">{products.length} products</span>
    </div>

    {/* Desktop Table */}
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-2 px-4 font-semibold">Product</th>
            <th className="py-2 px-4 font-semibold">Category</th>
            <th className="py-2 px-4 font-semibold">Stock</th>
            <th className="py-2 px-4 font-semibold">Price</th>
            <th className="py-2 px-4 font-semibold">Status</th>
            <th className="py-2 px-4 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {products.map((product, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 flex items-center gap-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-10 h-10 rounded object-cover"
                />
                <span>{product.name}</span>
              </td>
              <td className="py-2 px-4">{product.category}</td>
              <td className="py-2 px-4">{product.stock}</td>
              <td className="py-2 px-4">{product.price}</td>
              <td className="py-2 px-4">
                <StatusBadge status={product.status} />
              </td>
              <td className="py-2 px-4 whitespace-nowrap">
                <button className="text-blue-600 hover:underline mr-2">Edit</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile Card View */}
    <div className="md:hidden space-y-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 shadow-sm flex flex-col bg-white"
        >
          <div className="flex items-center gap-4 mb-2">
            <img
              src={product.image}
              alt={product.name}
              className="w-14 h-14 object-cover rounded"
            />
            <div>
              <p className="font-semibold text-gray-800">{product.name}</p>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
          </div>

          <div className="text-sm text-gray-600 grid grid-cols-2 gap-2 mb-3">
            <p><strong>Stock:</strong> {product.stock}</p>
            <p><strong>Price:</strong> {product.price}</p>
            <p className="col-span-2">
              <strong>Status:</strong> <StatusBadge status={product.status} />
            </p>
          </div>

          <div className="flex justify-end gap-3 text-sm">
            <button className="text-blue-600 hover:underline">Edit</button>
            <button className="text-red-600 hover:underline">Delete</button>
          </div>
        </div>
      ))}
    </div>
  </section>
);
