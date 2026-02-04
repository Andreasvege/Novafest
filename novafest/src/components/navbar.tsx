import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="p-6 m-4 bg-white rounded-2xl border border-gray-200 shadow-md text-black text-xl">
            <div className="flex justify-between items-center">
                <ul className="flex gap-6">
                    <li className="font-bold hover:text-red-600 hover:rotate-3">
                        <Link href="/">Novafest</Link>
                    </li>
                    <li className="hover:text-red-600 hover:rotate-3">
                        <Link href="/program">Program</Link>
                    </li>
                    <li className="hover:text-red-600 hover:rotate-3">
                        <Link href="/artister">Artister</Link>
                    </li>
                    <li className="hover:text-red-600 hover:rotate-3">
                        <Link href="/om">Om oss</Link>
                    </li>
                </ul>
                <Link href="/billetter" className="font-bold hover:text-red-600 hover:rotate-3">
                    Billetter
                </Link>
            </div>
        </nav>
    );
};