type Props = {
  children: React.ReactNode;
  color?: string;
  bgColor?: string;
};

export default function NovaHeader({
  children,
  color = "var(--NovaGreen)",
  bgColor = "var(--NovaBlack)",
}: Props) {
  return (
    <h2 className="text-5xl lg:text-6xl font-bold mt-12">
      <span
        className="nova-header hover-glitch"
        style={{
          ["--c" as string]: color,
          ["--bg" as string]: bgColor,
        }}
      >
        <span className="nova-header-text">{children}</span>
      </span>
    </h2>
  );
}
