const Footer = () => {
    return (
        <div className="mt-10">
            <footer class="w-full p-4 bg-white rounded-lg shadow md:p-6 dark:bg-gray-800">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">Anneroger</a>. All Rights Reserved.
                    </span>
                        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                            <li>
                                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                            </li>
                            <li>
                                <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline">Contact</a>
                            </li>
                        </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer;