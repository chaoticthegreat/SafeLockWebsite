<script lang="ts">
  const stats = [
    {
      name: "True Positive Rate",
      value: "99.04%",
    },
    {
      name: "Unlocking Time",
      value: "0.2s",
    },
    {
      name: "Lightweight Durability",
      value: "2oz",
    },
  ];
</script>

<div class="mx-auto w-full max-w-6xl px-3 py-5">
  <div class="text-center">
<!--    <span-->
<!--            class="z-10 block w-fit rounded-lg border border-blue-200/20 bg-blue-50/50 px-3 py-1.5 font-semibold uppercase leading-4 tracking-tighter dark:border-blue-800/30 dark:bg-blue-900/20 sm:text-sm"-->
<!--    >-->
<!--    <span-->
<!--            class="bg-gradient-to-b from-blue-500 to-blue-600 bg-clip-text text-transparent dark:from-blue-200 dark:to-blue-400"-->
<!--    >-->
<!--      Security like nothing else-->
<!--    </span>-->
<!--  </span>-->

    <h2
            id="features-title"
            class="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent dark:from-gray-50 dark:to-gray-300 sm:text-6xl "
    >
      Unmatched Features
    </h2>
    <!--  <p class="mt-6 max-w-3xl text-lg leading-7 text-gray-600 dark:text-gray-400">-->
    <!--    Database&rsquo; innovative architecture avoids the central bottlenecks of-->
    <!--    traditional systems, enhancing system reliability. This design ensures high-->
    <!--    productivity and security, minimizing the risk of service disruptions and-->
    <!--    outages.-->
    <!--  </p>-->
  </div>

  <dl
    class="mt-12 grid grid-cols-1 gap-y-8 dark:border-gray-800 md:grid-cols-3 md:border-y md:border-gray-200 md:py-14"
  >
    {#each stats as stat, index}
      <div
        class="border-l-2 border-green-100 pl-6 dark:border-green-900 md:border-l md:text-center lg:border-gray-200 lg:first:border-none lg:dark:border-gray-800"
      >
        <dd
          class="inline-block bg-gradient-to-t from-green-900 to-green-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent dark:from-green-700 dark:to-green-400 lg:text-6xl"
        >
          {stat.value}
        </dd>
        <dt class="mt-1 text-gray-600 dark:text-gray-400">
          {stat.name}
        </dt>
      </div>
    {/each}
  </dl>
</div>
