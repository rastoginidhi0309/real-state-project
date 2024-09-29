import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            {/* ========== HEADER ========== */}
            <header className="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
                <nav className="relative max-w-[85rem] w-full mx-auto flex items-center justify-between gap-3 py-2 px-4 sm:px-6 lg:px-8">
                    <Link
                        className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
                        href="/"
                        aria-label="Brand"
                    >
                        Dream Homes
                    </Link>
                    <div className="md:order-3 flex justify-end items-center gap-x-1">
                        {/* Collapse Button */}
                        <button
                            type="button"
                            className="md:hidden relative p-2 flex items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            id="hs-header-base-collapse"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="hs-header-base"
                            aria-label="Toggle navigation"
                            data-hs-overlay="#hs-header-base"
                        >
                            Menu
                            <svg
                                className="shrink-0 size-4 ms-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={12} cy={5} r={1} />
                                <circle cx={12} cy={19} r={1} />
                            </svg>
                        </button>
                        {/* End Collapse Button */}
                        <div className="hidden md:inline-block md:me-2">
                            <div className="w-px h-4 bg-gray-300 dark:bg-neutral-700" />
                        </div>
                        {/* Offcanvas Toggle */}
                        <button
                            type="button"
                            className="relative size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="hs-header-base-offcanvas"
                            aria-label="Toggle navigation"
                            data-hs-overlay="#hs-header-base-offcanvas"
                        >
                            <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect width={18} height={18} x={3} y={3} rx={2} />
                                <path d="M15 3v18" />
                                <path d="m8 9 3 3-3 3" />
                            </svg>
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                        {/* End Offcanvas Toggle */}
                    </div>
                    {/* Collapse */}
                    <div
                        id="hs-header-base"
                        className="hs-overlay [--auto-close:md] hs-overlay-open:translate-x-0 -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white border-e basis-full grow md:order-2 md:static md:block md:h-auto md:max-w-none md:w-auto md:border-e-transparent md:transition-none md:translate-x-0 md:z-40 md:basis-auto dark:bg-neutral-800 dark:border-e-gray-700 md:dark:border-e-transparent hidden "
                        role="dialog"
                        tabIndex={-1}
                        aria-label="Sidebar"
                        data-hs-overlay-close-on-resize=""
                    >
                        <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                            <div className="py-2 md:py-0 px-2 md:px-0 flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
                                {/* Offcanvas Header */}
                                <div className="md:hidden p-2 flex justify-between items-center">
                                    <h3
                                        id="hs-header-base-label"
                                        className="font-bold text-gray-800 dark:text-white"
                                    >
                                        Menu title
                                    </h3>
                                    <button
                                        type="button"
                                        className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                                        aria-label="Close"
                                        data-hs-overlay="#hs-header-base"
                                    >
                                        <span className="sr-only">Close</span>
                                        <svg
                                            className="shrink-0 size-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M18 6 6 18" />
                                            <path d="m6 6 12 12" />
                                        </svg>
                                    </button>
                                </div>
                                {/* End Offcanvas Header */}
                                <div className="grow">
                                    <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">

                                        <Link
                                            className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                            href="/"
                                        >
                                            <svg
                                                className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                                <circle cx={12} cy={7} r={4} />
                                            </svg>
                                            Home
                                        </Link>
                                        <Link
                                            className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                            href="/addproperty"
                                        >
                                            <svg
                                                className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M12 12h.01" />
                                                <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                                                <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                                                <rect width={20} height={14} x={2} y={6} rx={2} />
                                            </svg>
                                            Add New Property
                                        </Link>
                                        <Link
                                            className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                            href="/list"
                                        >
                                            <svg
                                                className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                                                <path d="M18 14h-8" />
                                                <path d="M15 18h-5" />
                                                <path d="M10 6h8v4h-8V6Z" />
                                            </svg>
                                            Browse Properties
                                        </Link>
                                        <Link
                                            className="p-2 flex items-center text-sm text-white bg-blue-500 hover:bg-blue-300 rounded-lg focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                            href="/signup"
                                        >
                                            <svg
                                                className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                                                <path d="M18 14h-8" />
                                                <path d="M15 18h-5" />
                                                <path d="M10 6h8v4h-8V6Z" />
                                            </svg>
                                            Signup
                                        </Link>
                                        <Link
                                            className="p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                            href="/login"
                                        >
                                            <svg
                                                className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                                                <path d="M18 14h-8" />
                                                <path d="M15 18h-5" />
                                                <path d="M10 6h8v4h-8V6Z" />
                                            </svg>
                                            Login
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Collapse */}
                </nav>
            </header>
            {/* ========== END HEADER ========== */}
            {/* Offcanvas */}
            <div
                id="hs-header-base-offcanvas"
                className="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-e dark:bg-neutral-800 dark:border-neutral-700"
                role="dialog"
                tabIndex={-1}
                aria-labelledby="hs-header-base-offcanvas-label"
            >
                <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                    <h3
                        id="hs-header-base-offcanvas-label"
                        className="font-bold text-gray-800 dark:text-white"
                    >
                        Offcanvas title
                    </h3>
                    <button
                        type="button"
                        className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                        aria-label="Close"
                        data-hs-overlay="#hs-header-base-offcanvas"
                    >
                        <span className="sr-only">Close</span>
                        <svg
                            className="shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-4">
                    <p className="text-gray-800 dark:text-neutral-400">
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
                    </p>
                </div>
            </div>
            {/* End Offcanvas */}
        </>

    )
}

export default Navbar
