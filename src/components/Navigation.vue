<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const isHidden = ref(false);

function goTo(pathTo) {
    router.push(pathTo)
}
</script>
<template>
    <nav id="nav-main" class="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-xl">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <div class="flex-shrink-0 flex items-center">
                    <div class="text-xl font-bold tracking-tight cursor-pointer" @click='goTo("/")'>
                        <span class="text-red-600">MERCASOL </span>
                    </div>
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                        <a href="#" class="px-3 py-2 rounded-md text-sm font-medium bg-red-500 text-white"
                            @click='goTo("/")'>Galvenā</a>
                        <a href="#"
                            class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition duration-300"
                            @click='goTo("/workProgress")'>Par Mercasol</a>
                        <a href="#"
                            class="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition duration-300"
                            @click='goTo("/priceInfo")'>Cenu lapa</a>
                        <!-- <a href="#"
                            class="px-3 py-2 rounded-md text-sm font-medium bg-gray-700 text-white hover:bg-orange-600 transition duration-300"
                            @click='goTo("/shop")'>Veikals</a> -->
                    </div>
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden">
                    <button @click="isHidden = !isHidden" class="text-gray-300 hover:text-white focus:outline-none">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Navigation (hidden by default) -->
        <div class="md:hidden" :class="{ 'hidden': isHidden }">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium bg-orange-600 text-white"
                    @click='goTo("/")'>Galvenā</a>
                <a href="#"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                    @click='goTo("/workProgress")'>Darba gaita</a>
                <a href="#"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                    @click='goTo("/priceInfo")'>Cenu lapa</a>
                <a href="#"
                    class="block px-3 py-2 rounded-md text-base font-medium bg-gray-700 text-white hover:bg-orange-600"
                    @click='goTo("/shop")'>Veikals</a>
            </div>
        </div>
    </nav>
</template>