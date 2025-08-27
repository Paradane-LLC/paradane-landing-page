import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/logo.svg"

const LinkItem = ({href, children}) => {
    return (
        <Link className="text-zinc-800 hover:scale-105 hover:border-b-white border-b border-b-transparent transition-all" href={href}>{children}</Link>
    )
}

const Header = () => {
    return (
        <header className="bg-zinc-50 max-w-7xl mx-auto rounded-xl px-10 mt-5 fixed left-0 right-0 h-20 z-50">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex gap-10 items-center">
                    <Link href="/" className="h-20 relative w-36">
                        <Image src={Logo} fill />
                    </Link>
                    <div className="flex gap-5 items-center text-sm">
                        <LinkItem href="#">Services</LinkItem>
                        <LinkItem href="#">Portfolio</LinkItem>
                        <LinkItem href="#">Resources</LinkItem>
                        <LinkItem href="#">Contact</LinkItem>
                    </div>
                </div>
                <div className="flex gap-5 items-center text-sm">
                    <LinkItem href="#">Careers</LinkItem>
                    <LinkItem href="#">Legal</LinkItem>
                    <LinkItem href="#">Book a Call</LinkItem>
                </div>
            </div>
        </header>
    )
}

export default Header;