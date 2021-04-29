export default function ProjectCard({title, description, href, icon}) {
    return (
        <a
            className="mb-4 hover:shadow"
            href={href}
            aria-label={title}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div
                className="transition duration-300 ease-in-out flex items-center border border-gray-200 dark:border-gray-800 rounded p-4">
                {icon === 'hone' && (
                    <div className="h-14 w-14 ml-2 mr-4">
                        <span className="sr-only">Hone.gg</span>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="h-10 w-10 min-w-sm text-gray-50 dark:text-gray-900" viewBox="0 0 500 533.5">
                            <g id="Layer_2" data-name="Layer 2">
                                <g id="Layer_1-2" fill="currentColor" data-name="Layer 1">
                                    <polygon className="cls-1"
                                             points="26.5 533.5 0 434.61 144.8 183.81 171.3 282.71 26.5 533.5"/>
                                    <polygon className="cls-1"
                                             points="243.83 181 359.21 150.09 307.98 238.83 192.6 269.75 161.68 154.36 212.92 65.62 243.83 181"/>
                                    <polygon className="cls-1"
                                             points="473.5 0 500 98.9 355.2 349.69 328.7 250.79 473.5 0"/>
                                    <polygon className="cls-2"
                                             points="256.36 352.17 140.98 383.08 192.22 294.34 307.6 263.42 338.51 378.81 287.28 467.55 256.36 352.17"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                )}
                {icon === 'mantle' && (
                    <div className="h-14 w-14 ml-2 mr-4">
                        <span className="sr-only">Mantle.gg</span>
                        <svg id="Layer_1" data-name="Layer 1" fill="currentColor" className="h-10 w-10 min-w-sm text-gray-50 dark:text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.24 48">
                            <path
                                d="M30.37,9.56l9.36,27.71-2.41-2.42-5.08-5.07-5.09,5.06-3,3-3-3L16,29.78l-5.07,5.07L8.52,37.27,17.88,9.56,21.41,11l2.71,1.1L26.84,11l3.53-1.44ZM34.74,0,24.12,4.32,13.5,0,0,40l8,8,8-8,8.1,8,8.11-8,8,8,8-8Z"/>
                        </svg>


                    </div>
                )}
                <div>
                    <h4 className="text-lg transition duration-300 ease-in-out hover:text-pink-300 font-bold tracking-tight text-white dark:text-gray-900">
                        {title}
                    </h4>
                    <p className="leading-5 text-gray-300 dark:text-gray-700">
                        {description}
                    </p>
                </div>
            </div>
        </a>
    );
}

