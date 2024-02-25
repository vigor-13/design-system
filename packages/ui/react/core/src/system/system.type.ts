import type { StyleXStyles } from '@stylexjs/stylex';
import { type Assign, type DOMElements } from '../utils';
import {
  type SystemProps,
  type StyleProps,
} from '../styled-system/system.type';

export interface VigorProps extends SystemProps {
  /**
   * StyleX 스타일 객체
   */
  styles?: StyleXStyles;
}

export type As = React.ElementType;

export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As;
};

export type OmitCommonProps<Target, OmitAdditionalProps> = Omit<
  Target,
  'as' | keyof OmitAdditionalProps
>;

export type RightJoinProps<
  SourceProps extends object = {},
  OverrideProps extends object = {},
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

export type MergeWithAs<
  ElementProps extends object,
  AsElementProps extends object,
  ComponentProps extends object = {},
  AsElement = As,
> = (
  | RightJoinProps<ElementProps, ComponentProps>
  | RightJoinProps<AsElementProps, ComponentProps>
) & {
  as?: AsElement;
};

export interface ComponentWithAs<
  Element extends As,
  Props extends object = {},
> {
  <AsElement extends As = Element>(
    props: MergeWithAs<
      React.ComponentProps<Element>,
      React.ComponentProps<AsElement>,
      Props,
      AsElement
    >,
  ): JSX.Element;

  displayName?: string;
  propTypes?: React.WeakValidationMap<Props>;
  contextTypes?: React.ValidationMap<any>;
  defaultProps?: Partial<Props>;
  id?: string;
}

export interface VigorComponent<Element extends As, Props extends object = {}>
  extends ComponentWithAs<Element, Assign<VigorProps, Props>> {}

export type HTMLVigorComponents = {
  [Tag in DOMElements]: VigorComponent<Tag, {}>;
};

export type HTMLVigorProps<Element extends As> = Omit<
  PropsOf<Element>,
  'ref' | keyof StyleProps
> &
  VigorProps & { as?: As };
