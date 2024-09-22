declare module "*.svg" {
  import * as React from "react";
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string; // Default export as string
  export { ReactComponent };
  export default src;
}
