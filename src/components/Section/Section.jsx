export default function Section({ title, children }) {
    return (
      <div className="">
        <h2 className="pb-[16px] mb-[25px] mt-[50px] border-b-[2px] border-solid border-[#303030] font-normal text-[20px] text-[#6b6b6b]  ">
          {title}
        </h2>
        {children}
      </div>
    );
}