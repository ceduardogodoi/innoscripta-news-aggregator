import Image, { type ImageProps } from "next/image";

export function ArticleImage({ children, alt, ...props }: ImageProps) {
  return (
    <Image
      className="rounded-t bg-gray-200 object-cover transition-transform lg:group-hover:scale-125"
      fill
      alt={alt}
      {...props}
    >
      {children}
    </Image>
  );
}
