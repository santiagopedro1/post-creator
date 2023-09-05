<script lang="ts">
	import { Plus, Check } from 'lucide-svelte'

	import HeadingForm from './HeadingForm.svelte'
	import ParagraphForm from './ParagraphForm.svelte'

	let pCount = 0
	let hCount = -1

	function addParagraph() {
		pCount++
		new ParagraphForm({
			target: document.getElementById('corpo') as HTMLFormElement,
			props: { count: pCount }
		})
	}
	function addHeading() {
		hCount++
		new HeadingForm({
			target: document.getElementById('corpo') as HTMLFormElement,
			props: { count: hCount }
		})
	}
</script>

<section class="flex items-center justify-center gap-6">
	<button on:click={addHeading}>
		<Plus />
		titulo
	</button>
	<button on:click={addParagraph}>
		<Plus />
		paragrafo
	</button>
	<button
		type="submit"
		form="foda"
	>
		<Check />
		deu
	</button>
</section>
