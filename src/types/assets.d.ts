type StaticImageData = { src: string; height: number; width: number; blurDataURL?: string };
declare module "*.jpg" { const src: StaticImageData; export default src; }
declare module "*.jpeg" { const src: StaticImageData; export default src; }
declare module "*.png" { const src: StaticImageData; export default src; }
declare module "*.css" { const src: string; export default src; }
