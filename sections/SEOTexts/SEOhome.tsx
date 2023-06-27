export interface SEOProps {
  text: string;
  description?: string;
}

export default function SEOhome({ text, description }: SEOProps) {
  return (
    <>
      <div
        class={`container flex flex-col gap-1 bg-[#f2f2f2] text-base-content shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] max-sm:px-6 px-0 py-2 my-6 rounded-[24px_0px] items-center max-w-[1304px] max-sm:my-4 max-sm:text-center`}
      >
        <h1 class={`text-1m font-bold leading-8 lg:leading-2 `}>
          {text}
        </h1>
        <h2 class={`leading-6 lg:leading-8 font-thin`}>
          {description}
        </h2>
      </div>
    </>
  );
}
