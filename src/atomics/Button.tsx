import { FC } from 'react';
import { Button } from 'antd';

interface ICustomButton {
  children?: React.ReactNode;
  color?: string;
  backgroundColor?: string;
  onClick?: () => void;
  borderRadius?: string;
  width?: string;
  border?: string;
  height?: string;
  fontWeight?: string;
}

const CustomButton: FC<ICustomButton> = ({
  border,
  color,
  backgroundColor,
  children,
  height,
  onClick,
  borderRadius,
  width,
  fontWeight,
}) => {
  return (
    <Button
      onClick={onClick}
      className="Button"
      style={{
        backgroundColor,
        border,
        borderRadius,
        height,
        width,
        color,
        fontWeight,
      }}
    >
      {children}
    </Button>
  );
};

CustomButton.defaultProps = {
  color: '#000000',
  backgroundColor: '#ffffff',
  borderRadius:"20px",
  width: "120px",
  height: "35px",
  fontWeight:"500"
};
export default CustomButton;
