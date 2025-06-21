import { useState } from "react";
import { Search, PackagePlus } from "lucide-react";

const products = [
  {
    name: "iPhone 15 Pro",
    category: "Electronics",
    stock: 12,
    price: "$1,199",
    status: "Active",
    image:
      "/Apple.jfif",
  },
  {
    name: "Sony WH-1000XM5",
    category: "Audio",
    stock: 0,
    price: "$399",
    status: "Out of Stock",
    image: "Sony.avif",
  },
  {
    name: "Dell XPS 13",
    category: "Laptops",
    stock: 5,
    price: "$1,299",
    status: "Active",
    image: "Dell.jfif",
  },
  {
    name: "Nike Air Max",
    category: "Footwear",
    stock: 18,
    price: "$180",
    status: "New",
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/76d1b391-5c34-4e76-92a7-c3009c23e010/air-max-90-shoes-WrC6cJ.png",
  },
  {
    name: "Samsung Galaxy S24",
    category: "Electronics",
    stock: 20,
    price: "$999",
    status: "Active",
    image: "/Samsung.webp",
  },
  {
    name: "Adidas Ultraboost",
    category: "Footwear",
    stock: 10,
    price: "$190",
    status: "New",
    image: "/Adidas.webp",
  },
  {
    name: "LG OLED TV 55\"",
    category: "Home Entertainment",
    stock: 4,
    price: "$1,499",
    status: "Active",
    image: "/LG.avif",
  },
  {
    name: "Apple MacBook Air M2",
    category: "Laptops",
    stock: 8,
    price: "$1,099",
    status: "Active",
    image: "/iPhone-15.webp",
  },
  {
    name: "Canon EOS 90D DSLR",
    category: "Cameras",
    stock: 3,
    price: "$1,199",
    status: "Out of Stock",
    image: "/Canon.jfif",
  },
  {
    name: "Fossil Gen 6 Smartwatch",
    category: "Accessories",
    stock: 15,
    price: "$299",
    status: "Active",
    image: "/adidas.webp",
  },
  {
    name: "KitchenAid Mixer",
    category: "Home Appliances",
    stock: 6,
    price: "$499",
    status: "New",
    image: "/Sony.avif",
  },
  {
    name: "Levi's 511 Slim Jeans",
    category: "Clothing",
    stock: 25,
    price: "$69",
    status: "Active",
    image: "https://www.levi.in/on/demandware.static/-/Sites-LeviMasterCatalog/default/dw71f72018/images/hi-res/045111584_01_Front.jpg",
  },
];


const StatusBadge = ({ status }) => {
  const base = "px-2 py-1 text-xs font-medium rounded-full capitalize";
  const styles = {
    Active: "bg-green-100 text-green-700",
    "Out of Stock": "bg-red-100 text-red-700",
    New: "bg-blue-100 text-blue-700",
  };
  return (
    <span className={`${base} ${styles[status] || "bg-gray-200 text-gray-700"}`}>
      {status}
    </span>
  );
};

export default function Products() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Products</h2>
          <p className="text-sm text-gray-500">Manage your inventory and product details</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2">
          <PackagePlus size={16} />
          Add Product
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-4 w-full md:w-1/3">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-medium">
            <tr>
              <th className="py-3 px-4">Product</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Stock</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredProducts.map((product, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-4 py-3 flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <span>{product.name}</span>
                </td>
                <td className="px-4 py-3">{product.category}</td>
                <td className="px-4 py-3">{product.stock}</td>
                <td className="px-4 py-3">{product.price}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={product.status} />
                </td>
                <td className="px-4 py-3 text-right">
                  <button className="text-blue-600 hover:underline mr-2">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
            {filteredProducts.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-8 text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
