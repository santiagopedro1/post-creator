<script lang="ts">
	import AddMenu from '$lib/components/AddMenu.svelte'
	import ParagraphForm from '$lib/components/ParagraphForm.svelte'

	async function submit(ev: SubmitEvent) {
		const formData = new FormData(ev.target as HTMLFormElement)
		const data = Object.fromEntries(formData.entries())

		const { body } = await fetch('/api', {
			method: 'POST',
			body: JSON.stringify(data)
		}).then((res) => res.json())

		// download file
		const blob = new Blob([body], { type: 'text/plain' })
		const url = URL.createObjectURL(blob)

		const a = document.createElement('a')
		a.href = url
		a.download = `${data.titulo_main}.md`
		document.body.appendChild(a)
		a.click()
		a.remove()
	}
</script>

<h1 class="text-center text-xl">SuperPedrão's SuperEasy Blog Post Generator</h1>
<h2 class="mt-6 text-center text-lg">Cabeçalho do post</h2>
<form
	action="POST"
	id="foda"
	class="mt-4"
	on:submit|preventDefault={submit}
>
	<section class="grid gap-3">
		<label for="titulo">Título principal</label>
		<input
			type="text"
			name="titulo_main"
			id="titulo"
			placeholder="titulo"
			class="w-full rounded-md border-2 border-gray-300 p-2 text-black"
		/>
		<label for="descricao">Descrição</label>
		<textarea
			name="descricao"
			id="descricao"
			cols="30"
			rows="2"
			placeholder="descrição"
			class="w-full rounded-md border-2 border-gray-300 p-2 text-black"
		/>
	</section>
	<hr class="mx-8 my-4 h-px bg-slate-700" />
	<section
		id="corpo"
		class="grid gap-3"
	>
		<h2 class="text-lg">Corpo do post</h2>
		<ParagraphForm count={0} />
	</section>
</form>

<AddMenu />
