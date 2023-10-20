---
to: "<%= have_props ? `${abs_path}/type.ts` : null %>"
---

<% if (have_props) { -%>
export type <%= props_name %> = {
}
<% } -%>
