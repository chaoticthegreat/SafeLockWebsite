<script>
    // This section is purely static, so no JavaScript is needed.
    // We can define the stats here if we want to make the component more dynamic later.
    const stats = [
        { value: '40,000+', description: 'are killed by guns every year' },
        { value: '27,000+', description: 'die by gun suicide every year' },
    ];

    const stats2 = [
        { value: '2,800+', description: 'children died from unintentional shootings in the past decade' },
        { value: '4.8M', description: 'live in homes with loaded, unlocked guns' },
    ];


</script>

<section class="text-white font-sans py-20 sm:py-28">
    <div class="container mx-auto px-6 lg:px-8 max-w-7xl">

        <div class="text-center mb-16">
            <h2 class="text-4xl sm:text-5xl font-bold tracking-tight">
                Gun Violence is a National Crisis
            </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center justify-center">

            <div class="flex flex-col gap-y-24">
                {#each stats as stat}
                    <div class="">
                        <p class="text-7xl font-bold text-emerald-400">{stat.value}</p>
                        <p class="mt-2 text-xl text-gray-300">{stat.description}</p>
                    </div>
                {/each}
            </div>
            <div class="flex flex-col gap-y-16">
                {#each stats2 as stat}
                    <div class="">
                        <p class="text-7xl font-bold text-emerald-400">{stat.value}</p>
                        <p class="mt-2 text-xl text-gray-300">{stat.description}</p>
                    </div>
                {/each}
            </div>

            <div class="flex flex-col space-y-4 w-fit items-center">

                <div class="bg-background/60 border border-gray-800 p-8 rounded-xl w-fit">
                    <p class="text-lg font-medium text-gray-300">Locking guns is key...</p>
                    <p class="text-6xl sm:text-7xl font-bold text-white my-2">
                        85%
                    </p>
                    <p class="text-xl font-medium text-emerald-400">fewer injuries with locked guns</p>
                </div>

                <div class="bg-background/60 border border-gray-800 p-8 rounded-xl w-fit ">
                    <p class="text-lg font-medium text-gray-300">However...</p>
                    <p class="text-6xl sm:text-7xl font-bold text-white my-2">
                        45%
                    </p>
                    <p class="text-xl font-medium text-emerald-400">don't lock due to fear of delays </p>
                </div>

            </div>
        </div>
    </div>
</section>
