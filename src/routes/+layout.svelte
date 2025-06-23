<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import  Header from '$lib/blocks/header.svelte';
    import FooterOne from '$lib/blocks/footer-one.svelte';
	let { children } = $props();
</script>
<ModeWatcher/>
<Header/>
{@render children()}
<FooterOne/>
