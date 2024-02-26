import {
  type SpaceProps,
  type LayoutProps,
  type FlexboxProps,
  ColorProps,
} from './config';
import { BackgroundProps } from './config/background';

export interface StyleProps
  extends LayoutProps,
    SpaceProps,
    FlexboxProps,
    ColorProps,
    BackgroundProps {}

export interface SystemProps extends StyleProps {}
