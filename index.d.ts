declare module "*.hbs" {
  function template(props?: Object): string;
  export default template;
}

declare module "uuid";
