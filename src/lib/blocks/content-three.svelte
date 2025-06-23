<script>
  import Button from "../ui/button/button.svelte";
  import ChevronRight from "@lucide/svelte/icons/chevron-right";
</script>

<section class="py-16 md:py-16">
  <div class="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
    <video  width="1920" height="1080" loop="true" autoplay="autoplay" muted>
      <source src="/yabadabadoo.mp4" type="video/mp4" />
    </video>

    <div class="grid gap-6 md:grid-cols-2 md:gap-12">
      <h2 class="text-4xl font-medium">
        Secure. Smart. SafeLock.
      </h2>
      <div class="space-y-6">
        <p>
          SafeLock is a cutting-edge biometric gun lock designed to enhance firearm security while maintaining accessibility. With its sleek, lightweight design and advanced technology, SafeLock offers gun owners peace of mind, ensuring that firearms can only be accessed by registered users.
        </p>

        <Button href="#more" variant="secondary" size="sm" class="gap-1 pr-1.5">
          <span>Learn More</span>
          <ChevronRight class="size-2" />
        </Button>
      </div>
    </div>
  </div>
</section>
