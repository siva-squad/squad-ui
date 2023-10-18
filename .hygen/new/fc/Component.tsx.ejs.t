---
to: <%= abs_path %>/<%= component_name %>.tsx
---
import { clsx } from 'clsx';

<% if (have_props) { -%>
import type { <%= props_name %> } from './type';
<% } -%>

export const <%= component_name %> = (<%= props %>) => {
  return <></>;
}
