import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/logo.svg"

const LinkItem = ({href, children, isPrimary}) => {
    return (
        <Link className="text-white aria-primary:text-[#00489c] aria-primary:px-2 aria-primary:py-1 aria-primary:rounded-lg aria-primary:font-semibold aria-primary:bg-white hover:scale-105 hover:border-b-white border-b border-b-transparent transition-all" aria-primary={isPrimary ? "true" : "false"} href={href}>{children}</Link>
    )
}

const Header = () => {
    return (
        <header className="text-white/80 fixed left-0 right-0 h-20 z-50 backdrop-blur-xl">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex gap-10 items-center">
                    <div className="h-20 relative w-36">
                        <Image src={Logo} fill />
                    </div>
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
                    <LinkItem href="#" isPrimary>Book a Call</LinkItem>
                </div>
            </div>
        </header>
    )
}

export default Header;