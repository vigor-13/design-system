import { type AnyObject, type Assign, type DOMElements } from '../utils';

export interface VigorProps {
  csm?: CSSModule;
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
  SourceProps = AnyObject,
  OverrideProps = AnyObject,
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

export type MergeWithAs<
  OriginalElementProps,
  AsElementProps,
  ComponentProps = AnyObject,
  AsElement = As,
> = (
  | RightJoinProps<OriginalElementProps, ComponentProps>
  | RightJoinProps<AsElementProps, ComponentProps>
) & {
  as?: AsElement;
};

export interface ComponentWithAs<
  OriginalElement extends As,
  ComponentProps = AnyObject,
> {
  <AsElement extends As = OriginalElement>(
    props: MergeWithAs<
      React.ComponentProps<OriginalElement>,
      React.ComponentProps<AsElement>,
      ComponentProps,
      AsElement
    >,
  ): JSX.Element;
  propTypes?: React.WeakValidationMap<ComponentProps>;
  contextTypes?: React.ValidationMap<any>;
  defaultProps?: Partial<ComponentProps>;
  displayName?: string;
}

export interface VigorComponent<
  OriginalElement extends As,
  ComponentProps = AnyObject,
> extends ComponentWithAs<
    OriginalElement,
    Assign<VigorProps, ComponentProps>
  > {}

export type HTMLVigorComponents = {
  [Tag in DOMElements]: VigorComponent<Tag, AnyObject>;
};

export type HTMLVigorProps<Element extends As> = Omit<PropsOf<Element>, 'ref'> &
  VigorProps;
