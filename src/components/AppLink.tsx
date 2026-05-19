import type { NavLinkProps } from "react-router";
import { NavLink } from "react-router";

export default function AppLink(props: NavLinkProps) {
  return (
    <NavLink
      {...props}
      className={({ isActive, isPending }) =>
        [isActive ? "active" : "", isPending ? "pending" : "", props.className]
          .filter(Boolean)
          .join(" ")
      }
    />
  );
}
