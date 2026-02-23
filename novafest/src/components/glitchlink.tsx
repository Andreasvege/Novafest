import Link from "next/link";

type GlitchLinkProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
};

export function GlitchLink({ href, children, className = "" }: GlitchLinkProps) {
    const isExternal = href.startsWith("http");

    if(isExternal) {
        return (
            <a href={href} className={className}>
                {children}
            </a>
        );
    }
    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
}