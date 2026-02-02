<template>
    <section id="hero" class="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <!-- Background texture with rust pattern inspiration -->
        <div
            class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2Utb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNIDAgMCBMIDYwIDYwIE0gNjAgMCBMIDAgNjAiLz48L2c+PC9zdmc+')] opacity-20">
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <!-- Left content -->
                <div>
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        Pretrūsas apstrādes centrs
                        <span class="text-red-600">Latgalē</span>
                    </h1>
                    <p class="mt-6 text-lg text-gray-300 max-w-2xl">
                        Profesionāli pretkorozijas apkalpojumi, kas pagarina jūsu transportlīdzekļa kalpošanas laiku un
                        saglabā tā vērtību.
                    </p>
                    <div class="mt-8 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                        <a href="#"
                            class="px-6 py-3 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition duration-300 text-center">
                            Pieteikties bezmaksas aspkatei
                        </a>
                        <a href="#"
                            class="px-6 py-3 bg-gray-700 text-white font-medium rounded-md hover:bg-gray-600 transition duration-300 text-center">
                            Mūsu darba procesu
                        </a>
                    </div>
                    <div class="mt-10 flex items-center space-x-8">
                        <div class="flex items-center">
                            <svg class="h-6 w-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            <span class="text-sm">Tīrīšana un sagatavošana</span>
                        </div>
                        <div class="flex items-center">
                            <svg class="h-6 w-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            <span class="text-sm">Virsbūves pārbaude</span>
                        </div>
                        <div class="flex items-center">
                            <svg class="h-6 w-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7" />
                            </svg>
                            <span class="text-sm">Mercasol uzklāšana</span>
                        </div>
                    </div>
                </div>

                <!-- Right content - visual element -->
                <div class="bg-gray-800 rounded-xl p-6 shadow-2xl transform rotate-1 mt-10">
                    <div
                        class="p-10 aspect-w-16 aspect-h-9 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg overflow-hidden text-center">

                        <h3 class="text-xl font-bold text-white">Augstākā līmeņa aizsardzība ar Mercasol</h3>
                        <p class="mt-2 text-gray-300">Protikorozijas apstrāde ir vienīgā efektīvā metode cīņā pret rūsu,
                            un augstas kvalitātes materiālu izmantošana garantē, ka tuvākajā laikā par rūsas problēmām
                            varēsiet aizmirst.</p>
                    </div>

                    <!-- Decorative elements -->
                    <div
                        class="absolute -top-4 -right-4 w-28 h-28 bg-orange-500 rounded-full mix-blend-overlay filter blur-xl opacity-30 animate-pulse">
                    </div>
                    <div
                        class="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500 rounded-full mix-blend-overlay filter blur-xl opacity-20 animate-pulse delay-1000">
                    </div>
                </div>
            </div>
        </div>

        <!-- Wavy bottom divider -->
        <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg class="relative block w-full h-16 text-gray-900" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z"
                    class="fill-current"></path>
            </svg>
        </div>
    </section>
</template>