<script>
    import Button from "../ui/button/button.svelte";

    // You can store Hero Header Component in seperate file
    // I have used snippet for better readability

    // Hero Header Component

    import Menu from "@lucide/svelte/icons/menu";
    import X from "@lucide/svelte/icons/x";
    import ArrowRight from "@lucide/svelte/icons/arrow-right";
    import { scrollY } from "svelte/reactivity/window";
    import Mail from "@lucide/svelte/icons/mail";
    import SendHorizonal from "@lucide/svelte/icons/send-horizontal";

    import {blogPosts} from "$lib/content/blogPosts.js";
</script>

<div>
    <main>
        <section class="overflow-hidden">
            <div class="relative mx-auto max-w-5xl px-6 py-28 lg:py-20">
                <div class="lg:flex lg:items-center lg:gap-12">
                    <div
                            class="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left"
                    >
                        <a
                                href="/blog/{blogPosts[0].slug}"
                                class="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border p-1 pr-3 lg:ml-0"
                        >
              <span
                      class="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs"
              >New</span
              >
                            <span class="text-sm">{blogPosts[0].title}</span>
                            <span class="bg-(--color-border) block h-4 w-px"></span>

                            <ArrowRight class="size-4" />
                        </a>

                        <h1
                                class="mt-10 text-balance text-4xl font-bold md:text-5xl xl:text-5xl"
                        >
                            Protect what matters most, with SafeLock
                        </h1>
                        <p class="mt-8">
                            At SafeLock, our mission is to revolutionize firearm safety by providing innovative, accessible, and reliable solutions that encourage responsible storage practices.
                        </p>

                        <div>

                            <form
                                    action=""
                                    class="mx-auto my-10 max-w-sm lg:my-12 lg:ml-0 lg:mr-auto"
                            >
                                <!--                <div-->
                                <!--                  class="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(&#45;&#45;radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2"-->
                                <!--                >-->
                                <!--                  <Mail-->
                                <!--                    class="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5"-->
                                <!--                  />-->

                                <!--                  <input-->
                                <!--                    placeholder="Your mail address"-->
                                <!--                    class="h-14 w-full bg-transparent pl-12 focus:outline-none"-->
                                <!--                    type="email"-->
                                <!--                  />-->

                                <div class="md:pr-1.5 lg:pr-0">
                                    <Button  variant="blue" href="https://forms.gle/iKnK2U7AwRsySWqU9" aria-label="submit" class="rounded-(--radius)">
                                        <span class="hidden md:block">Support Us</span>
                                        <SendHorizonal
                                                class="relative mx-auto size-5 md:hidden"
                                                strokeWidth={2}
                                        />
                                    </Button>
                                </div>
                                <!--                </div>-->
                            </form>

                        </div>
                    </div>
                </div>
                <div class="absolute inset-0 -mx-4 rounded-3xl p-3 lg:col-span-3">
                    <div class="relative">
                        <div
                                class="bg-radial-[at_65%_25%] to-background z-1 -inset-17 absolute from-transparent to-60%"
                        ></div>

                        <!--            <img-->
                        <!--              class="hidden dark:block"-->
                        <!--              src="/safelock-dark.png"-->
                        <!--              alt="app illustration"-->
                        <!--              width={2796}-->
                        <!--              height={2008}-->
                        <!--            />-->
                        <img
                                class="dark:hidden"
                                src="/safelock-light.png"
                                alt="app illustration"
                                width={2796}
                                height={2008}
                        />
                        <video class ="hidden dark:block ml-auto pt-10 pl-50 max-w-full h-auto" width="1500" height="1500" loop="true" autoplay="autoplay" muted>
                            <source src="/safelockvid.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    </main>
</div>

