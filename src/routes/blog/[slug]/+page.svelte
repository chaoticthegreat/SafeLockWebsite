<script>



    let {data} = $props();
</script>


<article class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <!-- Blog Image -->
    <div class="mb-6">
        <img
                src={data.post.img}
                alt="Blog cover"
                class="w-full h-64 object-cover rounded-xl shadow-md"
        />
    </div>

    <!-- Title & Date -->
    <header class="mb-8 text-center">
        <h1 class="text-4xl font-bold tracking-tight mb-2">{data.post.title}</h1>
        <p class="text-gray-400 text-sm">{data.post.date}</p>
    </header>

    <!-- Content -->
    <section class="prose prose-invert max-w-none text-gray-200 leading-relaxed">
        {#each data.post.content as postContent}
            <p class="mt-6">{postContent}</p>
        {/each}

    </section>
</article>
