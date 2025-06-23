<script>
  import {MapPinHouse, BellRing, Logs} from "@lucide/svelte";
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
          <p class="mt-6">
            The SafeLock app is your ultimate tool for firearm accountability and control. The SafeLock app is your ultimate tool for firearm accountability and control.
          </p>
        </div>
        <ul class="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
          <li>
            <MapPinHouse class="size-5" />
            Real Time Location Tracking
          </li>
          <li>
            <BellRing class="size-5" />
            Instant Notifications Of Lock Activity
          </li>
          <li>
            <Logs class="size-5" />
            Detailed User Access Logs
          </li>
        </ul>
      </div>
      <div
        class="border-border/50 relative rounded-3xl border p-3 lg:col-span-3"
      >
        <div
          class="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700"
        >
          <img
            src="/app.png"
            class="hidden rounded-[15px] dark:block"
            alt="payments illustration dark"
            width={1207}
            height={929}
          />
          <img
            src="/app.png"
            class="rounded-[15px] shadow dark:hidden"
            alt="payments illustration light"
            width={1207}
            height={929}
          />
        </div>
      </div>
    </div>
  </div>
</section>
