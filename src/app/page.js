'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const links = [
    { href: 'https://example.com/link1', label: 'Link 1' },
    { href: 'https://example.com/link2', label: 'Link 2' },
    { href: 'https://example.com/link3', label: 'Link 3' },
];

const socialLinks = [
    { href: 'https://twitter.com/yourprofile', icon: FaTwitter },
    { href: 'https://linkedin.com/in/yourprofile', icon: FaLinkedin },
    { href: 'https://github.com/yourprofile', icon: FaGithub },
];

const portfolioLinks = [
    { href: 'https://example.com/portfolio1', label: 'Portfolio 1' },
    { href: 'https://example.com/portfolio2', label: 'Portfolio 2' },
    { href: 'https://example.com/portfolio3', label: 'Portfolio 3' },
];

export default function Home() {
    const [showPortfolio, setShowPortfolio] = useState(false);

    const togglePortfolio = () => {
        setShowPortfolio(!showPortfolio);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="p-6 rounded-lg w-full max-w-xs">
                <div className="flex justify-center mb-4">
                    <Image
                        src="/profile.jpeg"
                        alt="Profile Picture"
                        width={100}
                        height={100}
                        className="rounded-full"
                    />
                </div>
                <h1 className="text-2xl font-bold mb-2 text-center">
                    Sang Hyun Han
                </h1>
                <h2 className="text-sm mb-4 text-center">
                    Happiest Web Developer in the World!
                </h2>
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        passHref
                        className="block w-full py-2 px-4 mb-3 text-center border border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-600 hover:text-white shadow-md"
                    >
                        {link.label}
                    </Link>
                ))}
                <button
                    onClick={togglePortfolio}
                    className="block w-full py-2 px-4 mb-3 text-center border border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-600 hover:text-white shadow-md"
                >
                    Portfolio
                </button>
                {showPortfolio && (
                    <div>
                        {portfolioLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                passHref
                                className="block w-full py-2 px-4 mb-3 text-center border border-indigo-500 text-indigo-500 rounded-lg hover:bg-indigo-600 hover:text-white shadow-md"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
                <div className="flex justify-center mt-4 space-x-4">
                    {socialLinks.map((social, index) => (
                        <Link key={index} href={social.href} passHref>
                            <social.icon className="text-2xl text-gray-600 hover:text-gray-800" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
