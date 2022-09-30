import { Grid } from 'antd';
import CustomImage from 'atomics/Image';
import { FC } from 'react';
interface Props {
  data: {
    photos: [];
  };
}
const { useBreakpoint } = Grid;
const LoadedImages: FC<Props> = ({ data }) => {
  const { photos = [] } = data;
  const screen = useBreakpoint();
  return (
    <div className="Images">
      {photos.map((item) => {
        const { src: { large = '' } = {}, id = '' } = item;
        return (
          <div key={id} className="container">
            <CustomImage
              className="img"
              key={id}
              width={screen.lg ? 250 : 200}
              height={screen.lg ? 400 : 300}
              a={id}
              src={large}
              alt=""
            />
            <div className="overlay"></div>
          </div>
        );
      })}
    </div>
  );
};

export default LoadedImages;
