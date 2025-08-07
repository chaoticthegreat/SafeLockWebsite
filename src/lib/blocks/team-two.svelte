<script>
    let selected = null;

    const members = [
        {
            name: "Vivian Zhang",
            role: "Team Lead",
            avatar: "https://static.wixstatic.com/media/9c5898_8d015d4287e64cf7b99300ee7eedddd3~mv2.jpg/v1/crop/x_0,y_36,w_768,h_864/fill/w_528,h_594,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202025-01-10%20at%202_46_edited.jpg",
            bio: "With a strong academic foundation, Vivian complements her studies with real-world experience, such as serving as Marketing Director for Valley Christian DECA, where she has mentored students, managed social media platforms, and led successful campaigns. Vivian's exceptional talents are reflected in her awards, including 1st Place at the Nationally Global Entrepreneurship Competition, 4th Place at DECA's International Career Development Conference, and 1st Place in the Harvard Crimson Global Case Competition. Beyond these, Vivian has held leadership roles such as VP of Finance for Walley’s Student Store, generating over $40,000 in revenue in the 23-24 school year.",
        },
        {
            name: "Hannah Li",
            role: "Marketing and Finance Lead",
            avatar: "https://static.wixstatic.com/media/6a4e77_212e2e7a9a8f4bf4a16341da812599e6~mv2.jpg/v1/crop/x_0,y_66,w_1251,h_1408/fill/w_528,h_594,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/omag.jpg",
            bio: "Hannah channels her passion for advocacy and innovation into driving meaningful change. As the first debater from her school to qualify for the prestigious Tournament of Champions and ranked as high as 13th in the nation, she frequently tackles pressing societal issues like gun violence, using SafeLock as a platform to transform advocacy into real-world solutions. Her dedication and innovative spirit are exemplified by her 1st place win in the Harvard Global Case Competition, 7th Place at the DECA International Career Development Conference, 7th Place National Debate Speaker Award, and leadership roles as iStart Valley Youth Innovation Director, Debate Content Lead, Mock Trial Secretary, and DECA Curriculum Officer.",
        },
        {
            name: "Pranav Swaminathan",
            role: "Hardware Lead",
            avatar: "https://static.wixstatic.com/media/9c5898_325bed39b2024fae8e532467a4ee5efb~mv2.webp/v1/fill/w_528,h_594,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Jan%209%20Screenshot%20from%20Discord.webp",
            bio: "A robotics enthusiast with over five years of experience, Pranav has instructed over 160 high school students in India in STEM, sharing his expertise and passion for the field. He is fluent in the CAD platform OnShape and excels in rapid prototyping, particularly with soldering and 3D printing along with his extensive experience in circuit design. An award-winning participant in the DELL Tech Challenge (Outstanding Overall) and a Diamond Challenge semifinalist for designing a biodegradable battery, Pranav was formerly the mechanical and innovation project co-lead of FLL Team 25 WarriorBots and is now an active member of FRC Team 3256 WarriorBorgs. Currently, he is designing prosthetics for mobility-impaired cows in India and serves as co-founder and CEO of  a Bay Area-based robotics education company focused on serving low-income communities.",
        },
        {
            name: "Ryan Abraham",
            role: "Software Lead",
            avatar: "/ryan.jpg",
            bio: "Ryan develops and maintains the software architecture for all our systems.",
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
                    <div class="group relative overflow-hidden">
                        <!-- Member Image -->
                        <img
                                class="h-96 w-full rounded-md object-cover object-top transition-all duration-500 group-hover:h-[22.5rem] group-hover:rounded-xl"
                                src={member.avatar}
                                alt="team member"
                                width="826"
                                height="1239"
                        />

                        <!-- Overlay -->
                        {#if selected === index}
                            <div
                                    class="absolute inset-0 z-10 flex flex-col justify-center bg-black/80 text-white p-6 backdrop-blur-sm transition-all duration-500 animate-slideIn"
                            >
                                <button
                                        class="self-end text-xl text-white hover:text-red-400 transition"
                                        on:click={() => (selected = null)}
                                >
                                    ×
                                </button>
                                <h3 class="text-xl font-semibold mb-2">{member.name}</h3>
                                <p class="text-xs opacity-90">{member.bio}</p>
                            </div>
                        {/if}

                        <!-- Info Section -->
                        <div class="px-2 pt-2 sm:pb-0 sm:pt-4">
                            <div class="flex justify-between items-center">
                                <h3
                                        class="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider"
                                >
                                    {member.name}
                                </h3>
                                <a
                                        class="text-sm text-blue-600 hover:underline"
                                        on:click={() => (selected = index)}
                                >Learn more</a
                                >
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


<style>
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-slideIn {
        animation: slideIn 0.4s ease-out forwards;
    }
</style>
