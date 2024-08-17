import Tag from "../Tag/Tag";

export default function Note({ data, ...rest }) {
  return (
    <>
      <div>
        <button
          {...rest}
          className="w-[100%]  bg-[#343444] hover:bg-[#2a2a36] rounded-xl border-none p-[22px] mb-[16px]"
        >
          <h1 className="flex-1 text-left font-bold text-xl text-white">
            {data.title}
          </h1>

          {data.tags && (
            <footer className="flex w-[100%] mt-[24px]">
              {data.tags.map((tag) => (
                <Tag key={tag.id} title={tag.name} />
              ))}
            </footer>
          )}
        </button>
      </div>
    </>
  );
}
