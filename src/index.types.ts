export interface Props extends Record<string, unknown> {
  events?: Record<string, () => void>;
}

export type Template = (props: Props) => string;
