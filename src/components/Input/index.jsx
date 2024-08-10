export default function Input({ icon: Icon, ...rest }) {
  return (
    <>
      <div className="flex w-[100%] mb-[10px] items-center bg-[#151419] p-[px] rounded-sm text-[#aeaeae]">
        <div className="ml-[10px]">{Icon && <Icon size={18} />}</div>
        <input
          placeholder="Pesquisar pelo título"
          className="w-[100%] bg-transparent p-[12px] ml-[-6px] focus:outline-none"
          {...rest}
        />
      </div>
    </>
  );
}
