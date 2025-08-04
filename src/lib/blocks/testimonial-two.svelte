<script>
    import {
        Avatar,
        AvatarImage,
        AvatarFallback,
    } from "../ui/avatar";
    import { Card, CardContent } from "../ui/card";
    import { onMount } from "svelte";

    let current = 0;
    const intervalTime = 6000; // 6 seconds

    const testimonials = [
        {
            text: `"As a parent, keeping my kids safe is my top priority. SafeLock would give me peace of mind knowing that my firearm is secure and only accessible to me. I think the tracking and management features are excellent and would add an extra layer of security."`,
            name: "Anonymous",
            title: "30+ Year Gun Owner",
            img: "https://tailus.io/images/reviews/shekinah.webp",
            fallback: "AY"
        },
        {
            text: `"Quick and secure access to my firearm is essential. A responsive biometric system like SafeLock, paired with the app's tracking feature would be a game-changer for anyone serious about firearm safety."`,
            name: "Anonymous",
            title: "Law Enforcement Professional",
            img: "https://tailus.io/images/reviews/jonathan.webp",
            fallback: "AY"
        },
        {
            text: `"The fingerprint technology that SafeLock has developed has an immense potential to be implemented in gun ranges and help more households to stay safe”`,
            name: "Mr. Gan",
            title: "NRA Certified Weapons Instructor",
            img: "https://tailus.io/images/reviews/yucel.webp",
            fallback: "MG"
        }
    ];

    const next = () => current = (current + 1) % testimonials.length;
    const prev = () => current = (current - 1 + testimonials.length) % testimonials.length;

    let interval;
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
    <div class="mx-auto max-w-4xl px-6 text-center space-y-12">
        <h2 class="text-4xl font-medium lg:text-5xl">Testimonials</h2>

        <div class="relative">
            {#each testimonials as t, i}
                {#if i === current}
                    <Card
                            class="transition-all duration-500 ease-in-out opacity-100 scale-100"
                    >
                        <CardContent class="p-6 md:p-10">
                            <blockquote class="grid gap-6">
                                <p class="text-xl font-medium"> {t.text} </p>
                                <div class="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar class="size-12">
                                        <AvatarImage src={t.img} alt={t.name} loading="lazy" />
                                        <AvatarFallback>{t.fallback}</AvatarFallback>
                                    </Avatar>
                                    <div class="text-left">
                                        <cite class="text-sm font-medium">{t.name}</cite>
                                        <span class="block text-sm text-muted-foreground">
                      {t.title}
                    </span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                {:else}
                    <div class="hidden"></div>
                {/if}
            {/each}

            <!-- Navigation buttons -->
            <div class="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                        on:click={prev}
                        class="rounded-full p-2 hover:bg-muted transition"
                        aria-label="Previous"
                >
                    &lt;
                </button>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2">
                <button
                        on:click={next}
                        class="rounded-full p-2 hover:bg-muted transition"
                        aria-label="Next"
                >
                    &gt;
                </button>
            </div>
        </div>

        <!-- Dots indicator -->
        <div class="flex justify-center gap-2 mt-6">
            {#each testimonials as _, index}
                <button
                        class={`h-2 w-2 rounded-full transition-colors ${index === current ? 'bg-primary' : 'bg-muted'}`}
                        on:click={() => current = index}
                />
            {/each}
        </div>
    </div>
</section>

<style>
    section:focus {
        outline: none;
    }
</style>
