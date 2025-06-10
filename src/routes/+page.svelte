<script>
	import HeroSix from "\$lib/blocks/hero-six.svelte";
	import { toggleMode,mode } from "mode-watcher";
	import Button  from '$lib/ui/button/button.svelte';
    import ContentOne from "$lib/blocks/content-one.svelte";
    import TestimonialTwo from "$lib/blocks/testimonial-two.svelte";
    import FooterOne from "$lib/blocks/footer-one.svelte";
    import TeamTwo from "$lib/blocks/team-two.svelte";
    import CtaThree from "$lib/blocks/cta-three.svelte";
</script>

<div>
	<HeroSix/>
	<ContentOne/>
	<TestimonialTwo/>
	<TeamTwo/>
	<CtaThree/>
	<FooterOne/>
</div>