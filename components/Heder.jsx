
import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
// import { checkUser } from "@/lib/checkUser";
import Image from "next/image";

const Header = async () => {
    // await checkUser();

    return (
        <header className="fixed top-0 w-full bg-[#09095D] text-white backdrop-blur-md z-50 border-b">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/">
                    <Image
                        src={"/logo.png"}
                        alt="Welth Logo"
                        width={200}
                        height={60}
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                {/* Navigation Links - Different for signed in/out users */}
                <div className="hidden md:flex items-center space-x-8">
                    <SignedOut>
                        <a href="#features" className="text-white">
                            Features
                        </a>
                        <a
                            href="#testimonials"
                            className="text-white"
                        >
                            Testimonials
                        </a>
                    </SignedOut>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4">
                    <SignedIn>
                        <Link
                            href="/dashboard"
                            className="text-black hover:text-gray-600 flex items-center gap-2"
                        >
                            <Button variant="outline">
                                <LayoutDashboard size={18} />
                                <span className="hidden md:inline text-black">Dashboard</span>
                            </Button>
                        </Link>
                        {/* <a href="/transaction/create">
                            <Button className="flex items-center gap-2 bg-white">
                                <PenBox size={18} className="text-black" />
                                <span className="hidden md:inline text-black ">Add Transaction</span>
                            </Button>
                        </a> */}


                        <Link
                            href="/transaction/create"
                            className="text-black hover:text-gray-600 flex items-center gap-2"
                        >
                            <Button variant="outline">
                                <PenBox size={18} className="text-black" />
                                <span className="hidden md:inline text-black">Add Transaction</span>
                            </Button>
                        </Link>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton forceRedirectUrl="/dashboard">
                            <Button variant="outline" className="text-black">Login</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10",
                                },
                            }}
                        />
                    </SignedIn>
                </div>
            </nav>
        </header>

    );
};

export default Header;