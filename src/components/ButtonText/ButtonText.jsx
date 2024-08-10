export default function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <div
      {...rest}
      type="button"
      className={`transition-colors duration-[0.3s] font-medium hover:text-[#ca6b12] rounded-[5px] my-[-10px] px-[5px] hover:cursor-pointer ${
        isActive ? "text-[#ca6b12]" : "text-[#848484]"
      }`}
    >
      {title}
    </div>
  );
}
