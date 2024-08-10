export default function Tag({ title, ...rest }) {
    return (
      <div className="inline-block">
        <div {...rest} className=" text-[13px] font-medium py-[5px] px-[14px] rounded-[5px] mr-[6px] bg-[#ca6b12] text-black">
          {title}
        </div>
      </div>    
    );
}