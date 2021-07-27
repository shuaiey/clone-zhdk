import Link from "next/link";

export default function MyLink({ href = "#", children, ...props }) {
  const native =
    href.startsWith("http") || href.startsWith("mailto") || href.startsWith("#");
  const A = (
    <a href={href} {...props}>
      {children}
    </a>
  );

  return native ? A : <Link href={href}>{A}</Link>;
}
