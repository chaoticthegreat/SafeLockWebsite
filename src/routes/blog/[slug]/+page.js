import {blogPosts} from "$lib/content/blogPosts.js";
import { error } from '@sveltejs/kit';

export const load = ({ params })  => {
    const post = blogPosts.find(p => p.slug === params.slug);
    if (!post) {
        error(404, {
            message: 'Not found'
        });
    }
    return { post };
};