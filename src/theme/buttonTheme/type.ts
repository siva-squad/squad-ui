type VariantUnion<T extends object> = keyof T;

export type ComponentVariants<T extends object> = {
  [K in keyof T & { class: string }]: VariantUnion<K>;
};
