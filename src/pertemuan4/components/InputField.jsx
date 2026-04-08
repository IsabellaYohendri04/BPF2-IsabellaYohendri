export default function InputField() {
  return (
    <div className="m-4">
      <label className="block mb-2 text-sm font-medium 
      text-gray-700">
        Nama
      </label>
      <input
        type="text"
        placeholder="Masukkan nama..."
        className="w-full px-4 py-2 border rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}