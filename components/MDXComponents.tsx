import type { ImgHTMLAttributes } from "react";
import type { MDXComponents } from "mdx/types";

export function MdxImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  const { src, alt, style, ...rest } = props;

  return (
    <img
      {...rest}
      src={src}
      alt={alt || ""}
      style={{
        display: "block",
        maxWidth: "100%",
        height: "auto",
        margin: "32px auto",
        ...style,
      }}
    />
  );
}

export function Callout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="my-8 rounded-xl border border-[#2F3E46]/20 bg-white px-6 py-5 text-[16px] leading-6 text-[#2F3E46]">
      {children}
    </div>
  );
}

export const fundamentalsMdxComponents: MDXComponents = {
  Callout,
  img: MdxImage,
};