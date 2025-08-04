<script>
	import HeroSix from "\$lib/blocks/hero-six.svelte";
	import { toggleMode,mode } from "mode-watcher";
	import Button  from '$lib/ui/button/button.svelte';
    import ContentOne from "$lib/blocks/content-one.svelte";
    import TestimonialTwo from "$lib/blocks/testimonial-two.svelte";
    import TeamTwo from "$lib/blocks/team-two.svelte";
    import CtaThree from "$lib/blocks/cta-three.svelte";
    import Sponsors from "$lib/blocks/sponsors.svelte";
</script>

<svelte:head>
	<title>Secure. Smart. Safelock.</title>
</svelte:head>

<div>
	<HeroSix/>
	<ContentOne/>
    <Sponsors/>
	<TestimonialTwo/>
	<TeamTwo/>
	<CtaThree/>
</div>