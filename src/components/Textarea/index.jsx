export default function Textarea({ value, ...rest }) {
  return (
    <textarea
      {...rest}
      className="w-full h-36 bg-[#151419] border-none resize-none mb-[-0px] rounded-sm p-4 text-[#aeaeae] text-start focus:outline-none mr-2"
    >
      {value}
    </textarea>
  );
}
