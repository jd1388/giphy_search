<script>
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import { search } from 'svelte-awesome/icons'
</script>

<div class="header-container">
    <div class="search-bar">
        <input
            class="search-input"
            data-testid="search-bar"
            placeholder="Search..."
            type="search"
        />
        <button
            aria-label="search"
            class="search-button"
            data-testid="search-button"
        >
            <Icon data={search} />
        </button>
    </div>
</div>

<style>
    .header-container {
        background-color: var(--black);
        display: grid;
        grid-template-columns: 200px 1fr 36px 36px 200px;
        grid-template-areas: ". . . . ." ". search-bar trending random ." ". . . . .";
        grid-template-rows: 48px 36px 48px;
    }

    .search-bar {
        display: grid;
        grid-area: search-bar;
        grid-template-areas: "search-input search-button";
        grid-template-columns: 1fr 36px;
    }

    .search-input {
        border: none;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        padding: 8px;
    }
</style>
