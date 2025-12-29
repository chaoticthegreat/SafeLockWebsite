<script>
    import Zap from "@lucide/svelte/icons/zap";
    import {BicepsFlexed} from "@lucide/svelte";
    import {Icon} from "@lucide/svelte";
    import {peace} from "@lucide/lab"
</script>



<section class="py-16 md:py-32">
    <div class="mx-auto max-w-6xl px-6">
        <div class="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">

            <!-- Image Section FIRST -->
            <div class="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">

                    <img
                            src="/whysafelock-gun.png"
                            class=" rounded-[15px] "
                            alt="payments illustration dark"
                            width={1207}
                            height={929}
                    />

            </div>

            <!-- Text/Features Section SECOND -->
            <div class="lg:col-span-2">
                <div class="md:pr-6 lg:pr-0">
                    <h2 class="text-4xl font-semibold lg:text-5xl">
                        Why Safelock?
                    </h2>
                    <p class="mt-6 text-xl">
                        Traditional locks can be cumbersome and unreliable under stress. SafeLock eliminates these challenges with:
                    </p>
                </div>
                <ul class="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3 text-xl">
                    <li>
                        <Zap class="size-5" />
                        Lightning-fast reaction times
                    </li>
                    <li>
                        <BicepsFlexed class="size-5" />
                        A tamper-proof, durable design
                    </li>
                    <li>
                        <Icon iconNode={peace} class="size-5" />
                        Peace of mind through smart app integration
                    </li>
                </ul>
                <p class ="text-xl mt-6">With SafeLock, gun owners gain unprecedented control and accountability, making firearm safety effortless and effective.</p>
            </div>

        </div>
    </div>
</section>
