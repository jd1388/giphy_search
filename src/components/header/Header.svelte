<script>
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import { search, fire } from 'svelte-awesome/icons'
</script>

<div class="header-container">
    <div
        class="search-bar"
        data-testid="search-bar"
    >
        <input
            class="search-input"
            data-testid="search-input"
            placeholder="Search..."
            type="search"
        />
        <button
            aria-label="search"
            class="search-button"
            data-testid="search-button"
            title="Search"
        >
            <div data-testid="search-icon">
                <Icon data={search} />
            </div>
        </button>
    </div>
    <button
        aria-label="trending"
        title="Trending"
    >
        <div data-testid="trending-icon">
            <Icon data={fire} />
        </div>
    </button>
</div>

<style>
    .header-container {
        background-color: var(--black);
        display: grid;
        grid-template-columns: 1fr 1fr 36px 36px 1fr;
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

    .search-button {
        border: none;
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
    }
</style>
