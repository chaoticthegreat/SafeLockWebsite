<script>
  import {MapPinHouse, BellRing, Logs, Settings} from "@lucide/svelte";
</script>

<section class="py-16 md:py-16">
  <div class="mx-auto max-w-6xl px-6">
    <div
      class="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24"
    >
      <div class="lg:col-span-2">
        <div class="md:pr-6 lg:pr-0">
          <h2 class="text-4xl font-semibold lg:text-5xl">
            Meet the App
          </h2>
            <h3 class ="text-2xl italic">Your Partner in Firearm Safety</h3>
          <p class="mt-6 text-xl">
            The SafeLock app is your ultimate tool for firearm accountability and control. The SafeLock app is your ultimate tool for firearm accountability and control.
          </p>
        </div>
        <ul class="mt-8 divide-y border-y *:py-3 text-xl">
          <li class="flex items-center gap-3">
            <MapPinHouse class="size-5" />
            Real Time Location Tracking
          </li>
          <li class="flex items-center gap-3">
            <BellRing class="size-5" />
            Instant Notifications Of Lock Activity
          </li>
          <li class="flex items-center gap-3">
            <Logs class="size-5" />
            Detailed User Access Logs
          </li>
          <li>
            <div class="flex items-center gap-3">
              <Settings class="size-5" />
              Custom Profiles & Controls
            </div>
            <ul class="list-disc pl-12 pt-2 text-lg">
              <li>Set access radius</li>
              <li>Real-time access restriction</li>
              <li>Custom alerts</li>
            </ul>
          </li>
        </ul>
      </div>
      <div
        class=" relative rounded-3xl  p-3 lg:col-span-3"
      >
        <div
          class="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-black"
        >
          <img
            src="/app.png"
            class="hidden rounded-[15px] dark:block"
            alt="payments illustration dark"
            width={1207}
            height={929}
          />

        </div>
      </div>
    </div>
  </div>
</section>
