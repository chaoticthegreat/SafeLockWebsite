<script lang="ts">
	import { Avatar as AvatarPrimitive } from "bits-ui";
	import { cn } from "../../utils.js";

	let {
		class: className,
		ref = $bindable(null),
		loadingStatus = $bindable("loading"),
		...restProps
	}: AvatarPrimitive.RootProps = $props();
</script>

<AvatarPrimitive.Root
	bind:loadingStatus
	bind:ref
	class={cn("relative flex size-8 shrink-0 overflow-hidden rounded-full", className)}
	{...restProps}
/>
