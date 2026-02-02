<template>
    <footer class="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Main footer content -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <!-- Company info -->
                <div class="lg:col-span-1">
                    <div class="text-2xl font-bold tracking-tight mb-4">
                        <span class="text-red-600">MRECASOL </span>
                    </div>
                    <p class="text-gray-400 mb-6">
                        Aizsargājiet savu automašīnu un saglabājiet tās vērtību ar mūsu modernajiem korozijas novēršanas
                        risinājumiem.
                    </p>
                    <div class="flex space-x-4">
                        <a href="https://www.facebook.com/autboost.lv/"
                            class="text-gray-400 hover:text-red-600 transition duration-300">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Services -->
                <!-- <div>
                    <h3 class="text-lg font-semibold mb-4 text-red-600">Our Services</h3>
                    <ul class="space-y-3">
                        <li><a href="#" class="text-gray-400 hover:text-white transition duration-300">Undercoating
                                Protection</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition duration-300">Electronic Rust
                                Prevention</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition duration-300">Cavity Wax
                                Protection</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition duration-300">Rust Repair &
                                Restoration</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition duration-300">Annual Inspection
                                Service</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition duration-300">Commercial Fleet
                                Protection</a></li>
                    </ul>
                </div> -->

                <!-- Quick links -->
                <!-- <div>
                    <h3 class="text-lg font-semibold mb-4 text-red-600">Quick Links</h3>
                    <ul class="space-y-3">
                        <li><a href="#" class="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition duration-300">Our Process</a>
                        </li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition duration-300">Gallery</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition duration-300">Testimonials</a>
                        </li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition duration-300">FAQ</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition duration-300">Blog</a></li>
                    </ul>
                </div> -->

                <!-- Contact info -->
                <div>
                    <h3 class="text-lg font-semibold mb-4 text-red-600">Kontakti</h3>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <svg class="w-5 h-5 text-red-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span class="text-gray-400">Liepājas iela 5, Ludza</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-red-600 mr-3" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span class="text-gray-400">+371 20055323</span>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-red-600 mr-3" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span class="text-gray-400">www.autoboost.lv</span>
                        </li>
                        <li class="flex items-center pt-4">
                            <a href="#"
                                class="px-4 py-2 bg-orange-600 text-white text-sm font-medium rounded-md hover:bg-orange-700 transition duration-300">
                                Schedule Inspection
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Newsletter -->
            <div class="border-t border-gray-800 pt-8 mb-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h3 class="text-lg font-semibold mb-2 text-red-600">Esiet aizsargāti</h3>
                        <!-- <p class="text-gray-400">Subscribe to our newsletter for maintenance tips and exclusive offers.
                        </p> -->
                    </div>
                    <div>
                        <!-- <form class="flex flex-col sm:flex-row gap-3">
                            <input type="email" placeholder="Your email address"
                                class="flex-grow px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                            <button type="submit"
                                class="px-6 py-2 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition duration-300 whitespace-nowrap">
                                Subscribe
                            </button>
                        </form> -->
                    </div>
                </div>
            </div>

            <!-- Bottom footer -->
            <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-500 text-sm mb-4 md:mb-0">
                    © Cubelligent
                </p>
                <div class="flex space-x-6">
                    <a href="#" id="open_preferences_center"
                        class="text-gray-500 hover:text-red-600 text-sm transition duration-300">Konfidencialitātes
                        politika</a>
                </div>
            </div>
        </div>
    </footer>
</template>
