import React from "react";
import IcoMoon, { IconProps as IcoMoonProps } from "react-icomoon";
import iconSet from "./selection.json";

interface IconProps extends IcoMoonProps {}

const Icon: React.FC<IconProps> = (props) => (
  <IcoMoon iconSet={iconSet} {...props} />
);

export default Icon;
