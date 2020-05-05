<script>
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import { search } from 'svelte-awesome/icons'
</script>

<input
    data-testid="search-bar"
    placeholder="Search..."
    type="search"
/>
<button
    aria-label="search"
    data-testid="search-button"
>
    <Icon data={search} />
</button>
