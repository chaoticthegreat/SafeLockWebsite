<script lang="ts">
  import { Card, CardContent, CardHeader } from "../ui/card";
  import CardDecorator from "./card-decorator.svelte";
  import {Fingerprint, ShieldCheck, Smartphone, BatteryCharging} from "@lucide/svelte";
</script>

<section class="bg-zinc-50 py-16 md:py-32 dark:bg-transparent" id ="more" >
  <div class="@container mx-auto max-w-5xl px-6">
    <div class="text-center">
      <h2 class="text-balance text-4xl font-semibold lg:text-5xl">
        How it works
      </h2>
      <p class="mt-4">
        SafeLock seamlessly combines hardware innovation and app connectivity. The lock attaches securely to the trigger of the firearm, disabling it until unlocked by a verified fingerprint.
      </p>
    </div>
    <div
      class="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16"
    >
      <Card class="group shadow-zinc-950/5">
        <CardHeader class="">
          <CardDecorator>
<!--            <Zap class="size-6" aria-hidden />-->
            <Fingerprint class="size-6" aria-hidden/>
          </CardDecorator>

          <h3 class="mt-6 font-medium">Biometric Access</h3>
        </CardHeader>

        <CardContent>
          <p class="text-sm">
            Using a capacitive fingerprint sensor, SafeLock verifies the registered user in just 0.2 seconds.
          </p>
        </CardContent>
      </Card>
        <Card class="group shadow-zinc-950/5 ">
            <CardHeader class="">
                <img
                        class="rounded-(--radius) rotate-y-6"
                        src="https://static.wixstatic.com/media/9c5898_acb9602d18314922955ea18187f6a686~mv2.png/v1/fill/w_826,h_862,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202025-01-10%20at%208_14_edited.png"
                        alt="team image"
                        height=""
                        width=""
                        loading="lazy"
                />
            </CardHeader>


        </Card>

      <Card class="group shadow-zinc-950/5">
        <CardHeader class="">
          <CardDecorator>
            <ShieldCheck class="size-6" aria-hidden />
          </CardDecorator>

          <h3 class="mt-6 font-medium">Tamper-Proof Design</h3>
        </CardHeader>

        <CardContent>
          <p class=" text-sm">
            The durable locking mechanism, powered by leadscrew actuators, clamps securely around the trigger guard, preventing unauthorized use.
          </p>
        </CardContent>
      </Card>

      <Card class="group shadow-zinc-950/5">
        <CardHeader class="pb">
          <CardDecorator>
            <BatteryCharging class="size-6" aria-hidden />
          </CardDecorator>

          <h3 class="mt-6 font-medium">Battery and Failsafe</h3>
        </CardHeader>

        <CardContent>
          <p class="text-sm">
            Operates on a long-lasting rechargeable battery with a mechanical key backup for emergencies.
          </p>
        </CardContent>
      </Card>
        <Card class="group shadow-zinc-950/5 ">
            <CardHeader class="pt-16">
                <img
                        class="rounded-(--radius) rotate-y-6"
                        src="https://static.wixstatic.com/media/9c5898_8b94c800cfa94ee4adb8ae2737327032~mv2.png/v1/fill/w_638,h_514,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202025-01-07%20at%2011_14_edited_pn.png"
                        alt="team image"
                        height=""
                        width=""
                        loading="lazy"
                />
            </CardHeader>


        </Card>
      <Card class="group shadow-zinc-950/5">
        <CardHeader class="">
          <CardDecorator>
            <Smartphone class="size-6" aria-hidden />
          </CardDecorator>

          <h3 class="mt-6 font-medium">Companion App</h3>
        </CardHeader>

        <CardContent>
          <p class="text-sm">
            Provides real-time updates, including location tracking and notifications of lock access attempts.
          </p>
        </CardContent>
      </Card>


    </div>
  </div>
</section>


<!-- Card Decorator Code  -->
<!--
 <script lang="ts">
  import type { Snippet } from "svelte";
  let { children }: { children: Snippet } = $props();
</script>

<div
  class="relative mx-auto size-36 duration-500 ease-in transition-all [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]"
>
  <div
    class="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
  ></div>
  <div
    class="bg-radial to-background absolute inset-0 from-transparent to-75%"
  ></div>
  <div
    class="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t"
  >
    {@render children()}
  </div>
</div>
   -->