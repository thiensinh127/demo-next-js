import { FC } from 'react';
import Image from 'next/image';

interface ICustomImage  {
  key?:string,
  src :any,
  alt :string,
  width? :number,
  height? :number
}

const CustomImage: FC<ICustomImage>= ({key, src, alt, width, height,}) => {
  return   <Image key={key} src={src} alt={alt} width={width} height={height} />
}

export default CustomImage

CustomImage.defaultProps = {
    alt: '',
    width: 200,
    height: 300,
  };