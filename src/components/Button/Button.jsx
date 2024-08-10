export default function Button({ title, loading = false, ...rest }) {
  return (
    <button
      className="bg-[#ca6b12] text-black h-56px border-none p-[px] rounded-[10px] font-medium disabled:opacity-75"
      disabled={loading}
      {...rest}
    >
      {loading ? "Carregando..." : title}
    </button>
  );
}
