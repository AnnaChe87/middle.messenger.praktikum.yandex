export interface Props extends Record<string, any> {
  events?: Record<string, (event?: Event) => void>;
  classname?: string[];
  type?: string;
}

export type Template = (props: Props) => string;
