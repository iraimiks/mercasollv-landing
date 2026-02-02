<template>
    <section class="py-20 bg-gray-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section header -->
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 shadow-2xl">
                    <div class="flex flex-col lg:flex-row items-center justify-between gap-8">

                        <!-- Logo and Title Section -->
                        <div class="flex-1 text-center lg:text-left">
                            <div class="flex items-center justify-center lg:justify-start gap-4 mb-6">
                                <img class="w-16 h-16 md:w-20 md:h-20 object-contain rounded-lg shadow-lg"
                                    src="/images/logo/mercasol-logo.jpg" alt="Mercasol Logo" />
                                <div>
                                    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                                        <span
                                            class="text-red-500 bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                                            Mercasol
                                        </span>
                                    </h2>
                                    <p class="text-sm text-gray-400 mt-1">Rūsas apstrādes speciālisti</p>
                                </div>
                            </div>

                            <!-- Content -->
                            <p class="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                                Pilnīga pretrūsas apstrāde ir vērtīgs ieguldījums jūsu automašīnā. Šajā apstrādē mēs
                                izejam cauri
                                visām vietām, kur var konstatēt rūsu, lai novērstu rūsas izplatīšanos un novērstu tās
                                progresu.
                                Apstrāde ir piemērota tiem, kuri plāno glabāt automašīnu ilgāk par 6 gadiem vai ja
                                aizsardzība pret
                                rūsu ir neatbilstoša.
                            </p>

                            <!-- Features/Callout -->
                            <div class="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                                <span
                                    class="px-4 py-2 bg-red-600/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium">
                                    Ilgtermiņa aizsardzība
                                </span>
                                <span
                                    class="px-4 py-2 bg-red-600/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium">
                                    Profesionāla apstrāde
                                </span>
                                <span
                                    class="px-4 py-2 bg-red-600/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium">
                                    6+ gadiem
                                </span>
                            </div>
                        </div>

                        <!-- Optional Image/Icon Section (if you have additional visual) -->
                        <div class="hidden lg:block flex-shrink-0">
                            <div
                                class="w-48 h-48 bg-gradient-to-br from-red-900/20 to-transparent rounded-full flex items-center justify-center">
                                <svg class="w-32 h-32 text-red-500 opacity-70" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Feature boxes grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-5">
                <!-- Box 1 -->
                <div class="bg-gray-800 rounded-xl p-6 shadow-xl flex items-start">
                    <div class="flex-shrink-0 mr-5">
                        <div class="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold mb-2">Ilgāks automašīnas kalpošanas laiks</h3>
                        <p class="text-gray-300">Aizsargājiet savu ieguldījumu, novēršot korozijas bojājumus, kas var
                            ievērojami saīsināt automašīnas mūžu.</p>
                    </div>
                </div>

                <!-- Box 2 -->
                <div class="bg-gray-800 rounded-xl p-6 shadow-xl flex items-start">
                    <div class="flex-shrink-0 mr-5">
                        <div class="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold mb-2">Augstāka tālākpārdošanas vērtība</h3>
                        <p class="text-gray-300">Saglabājiet automašīnas vērtību ar dokumentētu aizsardzību pret rūsu –
                            tas ir būtisks faktors pircējiem.</p>
                    </div>
                </div>

                <!-- Box 3 -->
                <div class="bg-gray-800 rounded-xl p-6 shadow-xl flex items-start">
                    <div class="flex-shrink-0 mr-5">
                        <div class="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM16.707 7.293a1 1 0 00-1.414-1.414L11 10.586 8.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l5-5z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold mb-2">Konstrukcijas noturība</h3>
                        <p class="text-gray-300">Novērsiet koroziju, kas apdraud automašīnas drošību un vadāmības
                            īpašības.</p>
                    </div>
                </div>

                <!-- Box 4 -->
                <div class="bg-gray-800 rounded-xl p-6 shadow-xl flex items-start">
                    <div class="flex-shrink-0 mr-5">
                        <div class="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold mb-2">Samazinātas apkopes izmaksas</h3>
                        <p class="text-gray-300">Izvairieties no dārgām remonta izmaksām, ko izraisa rūsas bojājumi
                            svarīgām detaļām, piemēram, bremzēm, izpūtējam un piekarei.</p>
                    </div>
                </div>

                <!-- Box 5 -->
                <div class="bg-gray-800 rounded-xl p-6 shadow-xl flex items-start">
                    <div class="flex-shrink-0 mr-5">
                        <div class="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold mb-2">Uzlabo auto darbību</h3>
                        <p class="text-gray-300">Sniedz ilgtermiņa drošību ar iespēju pārnest garantiju, ja pārdodat
                            automašīnu.</p>
                    </div>
                </div>

                <!-- Box 6 -->
                <div class="bg-gray-800 rounded-xl p-6 shadow-xl flex items-start">
                    <div class="flex-shrink-0 mr-5">
                        <div class="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold mb-2">Aizsardzība visos klimata apstākļos</h3>
                        <p class="text-gray-300">Mūsu īpašās formulas darbojas jebkurā vidē – no piekrastes sāļā gaisa
                            līdz ziemas ceļu sāls apstākļiem.</p>
                    </div>
                </div>
            </div>

            <!-- CTA section -->
            <div class="mt-16 text-center">
                <div class="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 shadow-xl">
                    <h3 class="text-2xl font-bold mb-4">Kā tiek nodrošināta pretrūsas aizsardzība</h3>
                    <p class="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Katra pretrūsas apstrāde tiek veikta savā īpašā veidā ar unikālu aprīkojumu un atlasītiem
                        pretrūsas produktiem dažādām detaļām. Katrs automašīnas modelis tiek apstrādāts saskaņā ar
                        unikālu izsmidzināšanas grafiku. Kopā apstrāde ilgst 3 dienas.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section class="py-20 bg-gray-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Section header -->
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-extrabold">
                    Pilnīga <span class="text-orange-500">Pretrūsas Apstrāde</span>
                </h2>
                <div class="mt-8 max-w-4xl mx-auto">
                    <p class="text-lg text-gray-300 mb-6">
                        Pilnīga pretrūsas apstrāde ir vērtīgs ieguldījums jūsu automašīnā. Šajā apstrādē mēs izejam
                        cauri visām
                        vietām, kur var konstatēt rūsu, lai novērstu rūsas izplatīšanos un novērstu tās progresu.
                        Apstrāde ir
                        piemērota tiem, kuri plāno glabāt automašīnu ilgāk par 6 gadiem vai ja aizsardzība pret rūsu ir
                        neatbilstoša.
                    </p>
                    <p class="text-lg text-gray-300">
                        Katra pretrūsas apstrāde tiek veikta savā īpašā veidā ar unikālu aprīkojumu un atlasītiem
                        pretrūsas produktiem
                        dažādām detaļām. Katrs automašīnas modelis tiek apstrādāts saskaņā ar unikālu izsmidzināšanas
                        grafiku. Kopā
                        apstrāde ilgst 3 dienas.
                    </p>
                </div>
            </div>

            <!-- Process steps -->
            <div class="space-y-8">
                <!-- Step 1 -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="bg-gray-800 rounded-xl p-6 shadow-xl">
                        <div class="flex flex-col md:flex-row items-start">
                            <div class="flex-1">
                                <div class="flex items-center mb-4">
                                    <div
                                        class="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-4">
                                        <span class="text-white font-bold">1</span>
                                    </div>
                                    <h3 class="text-xl font-bold">Demontāža</h3>
                                </div>
                                <p class="text-gray-300">
                                    Automašīna tiek pacelta un riteņi ir noskrūvēti. Visa plastmasa apakšpusē un
                                    iekšējie ekrāni ir
                                    demontēti.
                                </p>
                            </div>
                            <div class="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                                <div
                                    class="w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                                    <div class="text-center text-gray-400">
                                        <span class="text-xs"><img src="/images/rust/1.jpg" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Step 2 -->
                    <div class="bg-gray-800 rounded-xl p-6 shadow-xl">
                        <div class="flex flex-col md:flex-row items-start">
                            <div class="flex-1">
                                <div class="flex items-center mb-4">
                                    <div
                                        class="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-4">
                                        <span class="text-white font-bold">2</span>
                                    </div>
                                    <h3 class="text-xl font-bold">Augstspiediena mazgāšana</h3>
                                </div>
                                <p class="text-gray-300">
                                    Riteņu arkas un šasijas tiek rūpīgi mazgātas ar augstspiediena mazgāšanu un pēc
                                    mazgāšanas tiek veikta
                                    auto apskate.
                                </p>
                            </div>
                            <div class="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                                <div
                                    class="w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                                    <div class="text-center text-gray-400">
                                        <span class="text-xs"><img src="/images/rust/2.jpg" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Step 3 -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="bg-gray-800 rounded-xl p-6 shadow-xl">
                        <div class="flex flex-col md:flex-row items-start">
                            <div class="flex-1">
                                <div class="flex items-center mb-4">
                                    <div
                                        class="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-4">
                                        <span class="text-white font-bold">3</span>
                                    </div>
                                    <h3 class="text-xl font-bold">Žāvēšana</h3>
                                </div>
                                <p class="text-gray-300">
                                    Automašīnu žāvē nakti, pirms 2. dienā sākas pretrūsas apstrāde.
                                </p>
                            </div>
                            <div class="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                                <div
                                    class="w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                                    <div class="text-center text-gray-400">
                                        <span class="text-xs"><img src="/images/rust/3.jpg" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Step 4 -->
                    <div class="bg-gray-800 rounded-xl p-6 shadow-xl">
                        <div class="flex flex-col md:flex-row items-start">
                            <div class="flex-1">
                                <div class="flex items-center mb-4">
                                    <div
                                        class="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-4">
                                        <span class="text-white font-bold">4</span>
                                    </div>
                                    <h3 class="text-xl font-bold">Detaļu apstrāde</h3>
                                </div>
                                <p class="text-gray-300">
                                    Mūsu pilnīgā pretrūsas apstrāde sākas ar dobumu iekšējo apstrādi gan durvju, pārsega
                                    un bagāžas
                                    nodalījuma durvju ielocēs ar Mercasol 831 ML, kas ir labi iekļūstošs produkts.
                                </p>
                            </div>
                            <div class="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                                <div
                                    class="w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                                    <div class="text-center text-gray-400">
                                        <span class="text-xs"><img src="/images/rust/4.jpg" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Step 5 -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div class="bg-gray-800 rounded-xl p-6 shadow-xl">
                        <div class="flex flex-col md:flex-row items-start">
                            <div class="flex-1">
                                <div class="flex items-center mb-4">
                                    <div
                                        class="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-4">
                                        <span class="text-white font-bold">5</span>
                                    </div>
                                    <h3 class="text-xl font-bold">Ritošās daļas apstrāde</h3>
                                </div>
                                <p class="text-gray-300">
                                    Sarūsējušās virsmas tiek iepriekš apstrādātas ar rūsas pārveidotāju.
                                    Ritnes metinātās šuves un lokšņu metāla savienojumus vispirms
                                    apsmidzina ar plānu un caurlaidīgu līdzekli.
                                    Pēc tam riteņu arkas, šasijas, degvielas tvertne
                                    un bremžu caurules no ārpuses tiek apstrādātas ar
                                    Mercasol 847 AL, kas ir ļoti izturīgs pretrūsas produkts,
                                    kas iztur mehānisku nodilumu, un ir labas pretkorozijas
                                    aizsardzības līdzeklis ilgu laiku.
                                </p>
                            </div>
                            <div class="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                                <div
                                    class="w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                                    <div class="text-center text-gray-400">
                                        <span class="text-xs">
                                            <img src="/images/rust/5.jpg" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Step 6 -->
                    <div class="bg-gray-800 rounded-xl p-6 shadow-xl">
                        <div class="flex flex-col md:flex-row items-start">
                            <div class="flex-1">
                                <div class="flex items-center mb-4">
                                    <div
                                        class="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mr-4">
                                        <span class="text-white font-bold">6</span>
                                    </div>
                                    <h3 class="text-xl font-bold">Noslēguma pārbaude</h3>
                                </div>
                                <p class="text-gray-300">
                                    Visas noņemtās detaļas tiek samontētas un visa automašīna tiek mazgāta no ārpuses ar
                                    rokām. Apstrādi
                                    pārbauda un izsniedz vērtību apliecinošu dokumentu.
                                </p>
                            </div>
                            <div class="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                                <div
                                    class="w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                                    <div class="text-center text-gray-400">
                                        <span class="text-xs">
                                            <img src="/images/rust/6.jpg" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CTA section -->
            <div class="mt-16 text-center">
                <div class="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 shadow-xl">
                    <h3 class="text-2xl font-bold mb-4">Vai vēlaties uzzināt vairāk par mūsu pretrūsas apstrādes
                        procesu?</h3>
                    <p class="text-gray-300 mb-6 max-w-2xl mx-auto">
                        Sazinieties ar mums, lai saņemtu detalizētu informāciju un bezmaksas konsultāciju par jūsu
                        automašīnas aizsardzību.
                    </p>
                    <a href="https://wa.me/+37120055323" target="_blank"
                        class="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition duration-300">
                        Sazināties ar speciālistu
                        <svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>