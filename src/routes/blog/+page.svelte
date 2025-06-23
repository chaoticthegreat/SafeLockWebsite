<script>
    import {blogPosts} from '$lib/content/blogPosts.js';
</script>

<section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
    <h1 class="text-4xl font-bold text-center mb-10">Latest Posts</h1>

    <div class="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {#each blogPosts as post}
            <a
                    href={`/blog/${post.slug}`}
                    class="group bg-muted rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:bg-border transition-all duration-200"
            >
                <!-- Optional Thumbnail -->
                <div class="h-48 w-full bg-gray-800 overflow-hidden">
                    <img
                            src={post.img}
                            alt="Post thumbnail"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <!-- Text Content -->
                <div class="p-6">
                    <h2 class="text-2xl font-semibold mb-1">{post.title}</h2>
                    <p class="text-sm text-gray-400">{post.date}</p>
                    <p class="mt-3 text-gray-300 line-clamp-3">{post.description}</p>
                </div>
            </a>
        {/each}
    </div>
</section>
