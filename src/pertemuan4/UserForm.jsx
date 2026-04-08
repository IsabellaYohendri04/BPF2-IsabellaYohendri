import InputField from "./components/InputField";

export default function UserForm() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-xl font-bold mb-4">Form User</h1>

      <InputField 
        label="Nama" 
        type="text" 
        placeholder="Silahkan ketik Nama..." 
      />

      <InputField 
        label="Email" 
        type="email" 
        placeholder="Silahkan ketik EMail..." 
      />

      <InputField 
        label="Tanggal Lahir" 
        type="date" 
      />

      <button className="bg-blue-500 text-white px-4 py-2 mx-4
       mt-4 rounded shadow-lg">
        Submit
      </button>
    </div>
  );
}