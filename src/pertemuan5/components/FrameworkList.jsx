import frameworkData from "../framework.json";
import { useState } from "react";

export default function FrameworkList() {
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const _searchTerm = dataForm.searchTerm.toLowerCase();

  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];
return (
  <div className="p-6 max-w-7xl mx-auto bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">
    
    <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white p-4 rounded-xl shadow-md">
      <input
        onChange={handleChange}
        value={dataForm.searchTerm}
        type="text"
        name="searchTerm"
        placeholder="🔍 Search framework..."
        className="flex-1 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />

      <select
        onChange={handleChange}
        value={dataForm.selectedTag}
        name="selectedTag"
        className="md:w-64 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
      >
        <option value="">🌐 All Tags</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredFrameworks.map((item) => (
        <div
          key={item.id}
          className="relative bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between 
          hover:shadow-2xl hover:-translate-y-1 transition duration-300 border border-gray-100"
        >
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl"></div>

    
          <div className="flex flex-col gap-3 mt-2">
            <h2 className="text-xl font-bold text-gray-800">
              {item.name}
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>

            <p className="text-sm text-gray-500">
              👨‍💻 Developed by{" "}
              <span className="font-semibold text-gray-700">
                {item.details.developer}
              </span>
            </p>

            <a
              href={item.details.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm font-medium text-blue-600 hover:text-purple-600 transition"
            >
              🚀 Visit Website →
            </a>
          </div>


          <div className="mt-5 flex flex-wrap gap-2">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>

    {filteredFrameworks.length === 0 && (
      <div className="text-center mt-16">
        <p className="text-gray-500 text-lg">
          😢 Data tidak ditemukan
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Coba gunakan kata kunci lain
        </p>
      </div>
    )}
  </div>
);
}