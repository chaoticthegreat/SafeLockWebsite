<script>
    import { onMount } from 'svelte';
    import {Crown} from "@lucide/svelte";

    let displayedAmount = 0;
    const targetAmount = 8500;
    const duration = 5000; // 2 seconds
    let sectionEl;
    let animationStarted = false;

    const easeOutExpo = (t) => {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !animationStarted) {
                    animationStarted = true;
                    const startTime = Date.now();

                    const updateAmount = () => {
                        const elapsedTime = Date.now() - startTime;
                        if (elapsedTime < duration) {
                            const progress = easeOutExpo(elapsedTime / duration);
                            displayedAmount = Math.ceil(progress * targetAmount);
                            requestAnimationFrame(updateAmount);
                        } else {
                            displayedAmount = targetAmount;
                        }
                    };
                    requestAnimationFrame(updateAmount);
                }
            },
            { threshold: 0.5 }
        );

        observer.observe(sectionEl);

        return () => observer.disconnect();
    });
</script>

<section bind:this={sectionEl} class="py-4 md:py-4 text-center">
    <div class="mx-auto max-w-5xl px-6">
        <h2 class="text-7xl font-bold favi-green mb-4">
            ${displayedAmount.toLocaleString()} Raised
        </h2>
    </div>
</section>

<section class="py-16 md:py-32">
    <div class="mx-auto max-w-5xl px-6 space-y-12">

        <div class="grid md:grid-cols-2 gap-16 items-start">

            <!-- Sponsors Section -->
            <div class="text-center">
                <h2 class="text-4xl font-medium lg:text-5xl">Our Sponsors</h2>
                <div
                        class="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12"
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
                    <img
                            class="h-30 w-fit rounded-2xl hover:scale-125 transition-transform duration-300"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQT2kq1nCfnSfDqxRTw21G9s0HYMHEkyZELg&s"
                            alt="SVYEP Logo"
                    />
                    <img
                            class="h-30 w-fit rounded-2xl hover:scale-125 transition-transform duration-300"
                            src="https://pbs.twimg.com/media/GuOTX8lWQAA52dD.jpg"
                            alt="Berkeley Summit House Logo"
                    />

                </div>
            </div>

            <!-- Award-Winning Concept Section -->
            <div class="text-center">
                <h2 class="text-4xl font-medium lg:text-5xl">Award-Winning Concept</h2>
                <ul class="mt-12 flex flex-col items-center md:items-start space-y-4 text-2xl">
                    <li class="flex items-center gap-3"><Crown class="text-yellow-500 size-5 shrink-0" /> <span>2nd Place President's Business Challenge</span></li>
                    <li class="flex items-center gap-3"><Crown class="text-yellow-500 size-5 shrink-0" /> <span>3rd Place Global Blue Ocean Competition</span></li>
                    <li class="flex items-center gap-3"><Crown class="text-yellow-500 size-5 shrink-0" /> <span>2x Diamond Challenge Global Semi-finalist</span></li>
                    <li class="flex items-center gap-3"><Crown class="text-yellow-500 size-5 shrink-0" /> <span>2x Conrad Challenge Innovator Award</span></li>
                    <li class="flex items-center gap-3"><Crown class="text-yellow-500 size-5 shrink-0" /> <span>2nd Place Youth Venture Business Challenge</span></li>
                </ul>
            </div>

        </div>
    </div>
</section>


<style>
    .favi-green {
        color: #b2c671;
    }
</style>
