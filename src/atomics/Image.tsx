import { FC } from 'react';
import Image from 'next/image';

interface ICustomImage {
  a?: string;
  src: any;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  objectFit?: any;
  layout?:any;
}

const CustomImage: FC<ICustomImage> = ({
  a,
  className,
  src,
  alt,
  width,
  height,
  layout,
  objectFit,
}) => {
  return (
    <Image
      className={className}
      key={a}
      src={src}
      alt={alt}
      width={width}
      height={height}
      objectFit={objectFit}
      layout={layout}
    />
  );
};

export default CustomImage;

CustomImage.defaultProps = {
  alt: '',
  width: 200,
  height: 300,
};
