<script>
  const members = [
    {
      name: "Vivian Zhang",
      role: "Team Lead",
      avatar: "https://static.wixstatic.com/media/9c5898_8d015d4287e64cf7b99300ee7eedddd3~mv2.jpg/v1/crop/x_0,y_36,w_768,h_864/fill/w_528,h_594,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202025-01-10%20at%202_46_edited.jpg",
      link: "#",
    },
    {
      name: "Hannah Li",
      role: "Marketing and Finance Lead",
      avatar: "https://static.wixstatic.com/media/6a4e77_212e2e7a9a8f4bf4a16341da812599e6~mv2.jpg/v1/crop/x_0,y_66,w_1251,h_1408/fill/w_528,h_594,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/omag.jpg",
      link: "#",
    },
    {
      name: "Pranav Swaminathan",
      role: "Hardware Lead",
      avatar: "https://static.wixstatic.com/media/9c5898_325bed39b2024fae8e532467a4ee5efb~mv2.webp/v1/fill/w_528,h_594,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Jan%209%20Screenshot%20from%20Discord.webp",
      link: "#",
    },
    {
      name: "Ryan Abraham",
      role: "Software Lead",
      avatar: "https://alt.tailus.io/images/team/member-four.webp",
      link: "#",
    },
  ];
</script>

<section class="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
  <div class="mx-auto max-w-5xl border-t px-6">

    <div class="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
      <div class="sm:w-2/5">
        <h2 class="text-3xl font-bold sm:text-4xl">Meet the Team</h2>
      </div>
      <div class="mt-6 sm:mt-0">
        <p class="text-xl">
          We're committed in working towards a safer, more secure future.
        </p>
      </div>
    </div>
    <div class="mt-12 md:mt-24">
      <div class="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {#each members as member, index}
          <div  class="group overflow-hidden">
            <img
              class="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
              src={member.avatar}
              alt="team member"
              width="826"
              height="1239"
            />
            <div class="px-2 pt-2 sm:pb-0 sm:pt-4">
              <div class="flex justify-between">
                <h3
                  class="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider"
                >
                  {member.name}
                </h3>
              </div>
              <div class="mt-1 flex items-center justify-between">
                <span
                  class="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  >{member.role}</span
                >
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
