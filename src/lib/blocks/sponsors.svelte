<script>
    import { onMount } from "svelte";
    import {Crown} from "@lucide/svelte";

    let current = 0;
    const sections = ["sponsors", "awards"];
    const intervalTime = 6000; // 6 seconds
    let interval;

    const next = () => current = (current + 1) % sections.length;
    const prev = () => current = (current - 1 + sections.length) % sections.length;

    onMount(() => {
        interval = setInterval(next, intervalTime);
        return () => clearInterval(interval);
    });

    const handleKey = (e) => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
    };
</script>

<section class="py-16 md:py-32" on:keydown={handleKey} tabindex="0">
    <div class="mx-auto max-w-5xl px-6 text-center space-y-12">

        <!-- Section Carousel -->
        <div class="relative transition-all duration-500 ease-in-out">

            {#if sections[current] === "sponsors"}
                <!-- Sponsors Section -->
                <div>
                    <h2 class="text-4xl font-medium lg:text-5xl">Our Sponsors</h2>
                    <div
                            class="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12"
                    >
                        <img
                                class="h-30 w-fit rounded-2xl hover:scale-125 transition-transform duration-300"
                                src="https://blueoceancompetition.org/wp-content/uploads/2024/05/Blue-Ocean-Competition-Logo.png"
                                alt="Blue Ocean Logo"
                        />
                        <img
                                class="h-30 w-fit rounded-2xl hover:scale-125 transition-transform duration-300"
                                src="https://assets.biola.edu/4396738754672012438/attachment/5fa43caf97f6410001fb2a8a/preferred-logo-horizontal.jpg"
                                alt="Biola University Logo"
                        />
                    </div>
                </div>
            {:else if sections[current] === "awards"}
                <!-- Award-Winning Concept Section -->
                <div>
                    <h2 class="text-4xl font-medium lg:text-5xl">Award-Winning Concept</h2>
                    <ul class="mt-10 flex flex-col items-center space-y-4 text-2xl">
                        <li class="flex items-center gap-3"><Crown class="text-yellow-500  size-5" /> <span>2nd Place President's Business Challenge</span></li>
                        <li class="flex items-center gap-3"><Crown class="text-yellow-500  size-5" /> <span>3rd Place Global Blue Ocean Competition</span></li>
                        <li class="flex items-center gap-3"><Crown class="text-yellow-500  size-5" /> <span>2x Diamond Challenge Global Semi-finalist</span></li>
                        <li class="flex items-center gap-3"><Crown class="text-yellow-500  size-5" /> <span>2x Conrad Challenge Innovator Award</span></li>
                    </ul>
                </div>
            {/if}


        </div>

        <!-- Dots -->
        <div class="flex justify-center gap-2 mt-6">
            {#each sections as _, index}
                <button
                        class={`h-2 w-2 rounded-full transition-colors ${index === current ? 'bg-primary' : 'bg-muted'}`}
                        on:click={() => current = index}
                ></button>
            {/each}
        </div>

    </div>
</section>

<style>
    section:focus {
        outline: none;
    }
</style>
