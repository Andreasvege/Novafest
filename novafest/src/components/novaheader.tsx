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
        className="nova-header inline relative hover-glitch"
        style={{
          ["--c" as string]: color,
          ["--bg" as string]: bgColor,
          color: color,
          backgroundColor: bgColor,
          textShadow: `-2px -2px 0 ${bgColor}, 2px -2px 0 ${bgColor}, -2px 2px 0 ${bgColor}, 2px 2px 0 ${bgColor}`,
          padding: "2px 8px",
          top: "5px",
          left: "0px",
        }}
      >
        {children}
      </span>
    </h2>
  );
}
