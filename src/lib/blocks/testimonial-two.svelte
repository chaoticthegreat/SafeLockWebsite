<script>
  import {
    Avatar,
    AvatarImage,
    AvatarFallback,
  } from "../ui/avatar";
  import { Card, CardContent, CardHeader } from "../ui/card";
</script>

<section class="py-16 md:py-32">
  <div class="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
    <div
      class="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12"
    >
      <h2 class="text-4xl font-medium lg:text-5xl">
        Testimonials
      </h2>
      <p>
        More fancy text
      </p>
    </div>

    <div
      class="grid gap-4 [--color-card:var(--color-muted)] *:border-none *:shadow-none sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2 dark:[--color-muted:var(--color-zinc-900)]"
    >
      <Card
        class="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2"
      >
<!--        <CardHeader>-->
<!--          <img-->
<!--            class="h-6 w-fit dark:invert"-->
<!--            src="https://html.tailus.io/blocks/customers/nike.svg"-->
<!--            alt="Nike Logo"-->
<!--            height="24"-->
<!--            width="auto"-->
<!--          />-->
<!--        </CardHeader>-->
        <CardContent>
          <blockquote class="grid h-full grid-rows-[1fr_auto] gap-6">
            <p class="text-xl font-medium">
              "As a parent, keeping my kids safe is my top priority. SafeLock would give me peace of mind knowing that my firearm is secure and only accessible to me. I think the tracking and management features are excellent and would add an extra layer of security."
            </p>

            <div class="grid grid-cols-[auto_1fr] items-center gap-3">
              <Avatar class="size-12">
                <AvatarImage
                  src="https://tailus.io/images/reviews/shekinah.webp"
                  alt="Anonymous"
                  height="400"
                  width="400"
                  loading="lazy"
                />
                <AvatarFallback>AY</AvatarFallback>
              </Avatar>

              <div>
                <cite class="text-sm font-medium">Anonymous</cite
                >
                <span class="text-muted-foreground block text-sm"
                  >30+ Year Gun Owner</span
                >
              </div>
            </div>
          </blockquote>
        </CardContent>
      </Card>
      <Card class="md:col-span-2">
        <CardContent class="h-full pt-6">
          <blockquote class="grid h-full grid-rows-[1fr_auto] gap-6">
            <p class="text-xl font-medium">
              "Quick and secure access to my firearm is essential. A responsive biometric system like SafeLock, paired with the app's tracking feature would be a game-changer for anyone serious about firearm safety."
            </p>

            <div class="grid grid-cols-[auto_1fr] items-center gap-3">
              <Avatar class="size-12">
                <AvatarImage
                  src="https://tailus.io/images/reviews/jonathan.webp"
                  alt="Jonathan Yombo"
                  height="400"
                  width="400"
                  loading="lazy"
                />
                <AvatarFallback>AY</AvatarFallback>
              </Avatar>
              <div>
                <cite class="text-sm font-medium">Anonymous</cite>
                <span class="text-muted-foreground block text-sm"
                  >Law Enforcement Professional</span
                >
              </div>
            </div>
          </blockquote>
        </CardContent>
      </Card>
      <Card>
        <CardContent class="h-full pt-6">
          <blockquote class="grid h-full grid-rows-[1fr_auto] gap-6">
            <p>
              "The fingerprint technology that SafeLock has developed has an immense potential to be implemented in gun ranges and help more households to stay safe”
            </p>

            <div
              class="grid items-center gap-3 [grid-template-columns:auto_1fr]"
            >
              <Avatar class="size-12">
                <AvatarImage
                  src="https://tailus.io/images/reviews/yucel.webp"
                  alt="Yucel Faruksahan"
                  height="400"
                  width="400"
                  loading="lazy"
                />
                <AvatarFallback>MG</AvatarFallback>
              </Avatar>
              <div>
                <cite class="text-sm font-medium">Mr. Gan</cite>
                <span class="text-muted-foreground block text-sm"
                  >NRA Certified Weapons Instructor</span
                >
              </div>
            </div>
          </blockquote>
        </CardContent>
      </Card>
<!--      <Card class="card variant-mixed">-->
<!--        <CardContent class="h-full pt-6">-->
<!--          <blockquote class="grid h-full grid-rows-[1fr_auto] gap-6">-->
<!--            <p>-->
<!--              Great work on tailfolio template. This is one of the best personal-->
<!--              website that I have seen so far!-->
<!--            </p>-->

<!--            <div class="grid grid-cols-[auto_1fr] gap-3">-->
<!--              <Avatar class="size-12">-->
<!--                <AvatarImage-->
<!--                  src="https://tailus.io/images/reviews/rodrigo.webp"-->
<!--                  alt="Rodrigo Aguilar"-->
<!--                  height="400"-->
<!--                  width="400"-->
<!--                  loading="lazy"-->
<!--                />-->
<!--                <AvatarFallback>YF</AvatarFallback>-->
<!--              </Avatar>-->
<!--              <div>-->
<!--                <p class="text-sm font-medium">Rodrigo Aguilar</p>-->
<!--                <span class="text-muted-foreground block text-sm"-->
<!--                  >Creator, TailwindAwesome</span-->
<!--                >-->
<!--              </div>-->
<!--            </div>-->
<!--          </blockquote>-->
<!--        </CardContent>-->
<!--      </Card>-->
    </div>
  </div>
</section>
