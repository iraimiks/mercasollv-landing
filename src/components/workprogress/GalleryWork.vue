<template>
    <section class="py-20 bg-gray-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section header -->
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-extrabold">
                    Skatiet mūsu aizsardzību darbībā
                </h2>
                <p class="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                    Noskatieties šos video, lai redzētu, kā darbojas mūsu rūsas aizsardzības process, un uzklausiet
                    apmierinātu klientu atsauksmes par viņu pieredzi.
                </p>
            </div>

            <!-- Video gallery grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Video 1 -->
                <div
                    class="bg-gray-800 rounded-xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition duration-300">
                    <!-- Custom aspect ratio -->
                    <div class="relative aspect-[4/3] bg-gradient-to-b overflow-hidden">
                        <div class="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
                            <div
                                class="bg-red-600/10 rounded-lg overflow-hidden w-full h-full border border-red-600/30">
                                <video controls class="w-full h-full object-contain">
                                    <source src="/video/work-1.mp4" type="video/mp4">
                                </video>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Video 2 -->
                <div
                    class="bg-gray-800 rounded-xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition duration-300">
                    <div class="relative aspect-[4/3] bg-gradient-to-b overflow-hidden">
                        <div class="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
                            <div
                                class="bg-red-600/10 rounded-lg overflow-hidden w-full h-full border border-red-600/30">
                                <video controls class="w-full h-full object-contain">
                                    <source src="/video/work-2.mp4" type="video/mp4">
                                </video>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Video 3 -->
                <div
                    class="bg-gray-800 rounded-xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition duration-300">
                    <div class="relative aspect-[4/3] bg-gradient-to-b overflow-hidden">
                        <div class="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
                            <div
                                class="bg-red-600/10 rounded-lg overflow-hidden w-full h-full border border-red-600/30">
                                <video controls class="w-full h-full object-contain">
                                    <source src="/video/work-3.mp4" type="video/mp4">
                                </video>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Video 4 -->
                <div
                    class="bg-gray-800 rounded-xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition duration-300">
                    <div class="relative aspect-[4/3] bg-gradient-to-b overflow-hidden">
                        <div class="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
                            <div
                                class="bg-red-600/10 rounded-lg overflow-hidden w-full h-full border border-red-600/30">
                                <video controls class="w-full h-full object-contain">
                                    <source src="/video/work-4.mp4" type="video/mp4">
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CTA section -->
            <!-- <div class="mt-16 text-center">
                <div class="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 shadow-xl">
                    <h3 class="text-2xl font-bold mb-4">Want to See More?</h3>
                    <p class="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Visit our YouTube channel for more videos showcasing our rust protection process, customer
                        reviews, and educational content about vehicle maintenance.
                    </p>
                    <a href="#"
                        class="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition duration-300">
                        View Our YouTube Channel
                        <svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div> -->
        </div>
    </section>
</template>