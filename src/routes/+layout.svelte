<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import  Header from '$lib/blocks/header.svelte';
	let { children } = $props();
</script>
<ModeWatcher/>
<Header/>
{@render children()}
