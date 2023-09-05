<script lang="ts">
	export let count: number
</script>

<label for={`titulo${count}`}>Título</label>
<input
	type="text"
	name={`titulo${count}`}
	id={`titulo${count}`}
	placeholder="titulo"
	class="w-full rounded-md border-2 border-gray-300 p-2 text-black"
/>
