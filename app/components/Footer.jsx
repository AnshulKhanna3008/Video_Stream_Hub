import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="flex flex-col items-center">
                <h3 className="font-bold text-center">Designed and developed by Anshul Khanna</h3>
                <div className="flex items-center text-center space-x-2 mt-2">
                    <Link
                        href="https://github.com/AnshulKhanna3008"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline hover:text-sky-700 hover:scale-105"
                    >
                        Github Link
                    </Link>
                    <span>||</span>
                    <Link
                        href="https://www.linkedin.com/in/anshul-khanna-6305b4265/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline hover:text-sky-700 hover:scale-105"
                    >
                        Linkedin Link
                    </Link>
                    <span>||</span>
                    <Link
                        href="https://www.instagram.com/anshulkhanna_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline hover:text-sky-700 hover:scale-105"
                    >
                        Instagram
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Footer