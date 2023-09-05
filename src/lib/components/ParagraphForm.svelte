<script lang="ts">
	export let count: number
</script>

<label for={`paragrafo${count}`}>Paragráfo</label>
<textarea
	name={`paragrafo${count}`}
	id={`paragrafo${count}`}
	placeholder="paragrafo"
	rows="5"
	class="w-full rounded-md border-2 border-gray-300 p-2 text-black"
/>
