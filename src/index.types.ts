export interface Props extends Record<string, any> {
  events?: Record<string, () => void>;
  classname?: string | string[];
  type?: string;
}

export type Template = (props: Props) => string;
