<script>
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import { faFire, faRandom, faSearch } from '@fortawesome/free-solid-svg-icons';

    const iconStyle = 'fill: var(--white)';
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
                <Icon data={faSearch} />
            </div>
        </button>
    </div>
    <button
        aria-label="trending"
        class="trending-button icon-button"
        title="Trending"
    >
        <div data-testid="trending-icon">
            <Icon
                data={faFire}
                style={iconStyle}
            />
        </div>
    </button>
    <button
        aria-label="random"
        class="random-button icon-button"
        title="Random"
    >
        <div data-testid="random-icon">
            <Icon
                data={faRandom}
                style={iconStyle}
            />
        </div>
    </button>
</div>

<style>
    .header-container {
        background-color: var(--black);
        display: grid;
        grid-column-gap: 8px;
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

    .trending-button {
        grid-area: trending;
    }

    .random-button {
        grid-area: random;
    }

    .icon-button {
        background-color: var(--lightBlack);
        border: none;
        border-radius: 50%;
    }
</style>
