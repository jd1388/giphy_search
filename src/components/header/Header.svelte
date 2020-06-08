<script>
    import Icon from 'svelte-awesome/components/Icon.svelte';
    import { faFire, faRandom, faSearch } from '@fortawesome/free-solid-svg-icons';

    import { Views } from '../../enums';
    import { displayedView, searchTerm } from '../../stores';

    const iconStyle = 'fill: var(--white)';

    function setActiveView(view) {
        displayedView.set(view);
    }

    function setSearchTerm(input) {
        searchTerm.set(input);
    }
</script>

<div
    class="header-container"
    data-testid="header"
>
    <div
        class="search-bar"
        data-testid="search-bar"
    >
        <input
            bind:value={$searchTerm}
            class="search-input"
            data-testid="search-input"
            placeholder="Search..."
            type="search"
        />
        <button
            aria-label="search"
            class="search-button"
            data-testid="search-button"
            on:click={() => setActiveView(Views.SEARCH)}
            title="Search"
        >
            <div
                class="icon-container"
                data-testid="search-icon"
            >
                <Icon data={faSearch} />
            </div>
        </button>
    </div>
    <button
        aria-label="trending"
        class="trending-button icon-button"
        class:active={$displayedView === Views.TRENDING}
        data-testid="trending-button"
        on:click={() => setActiveView(Views.TRENDING)}
        title="Trending"
    >
        <div
            class="icon-container"
            data-testid="trending-icon"
        >
            <Icon
                data={faFire}
                style={iconStyle}
            />
        </div>
    </button>
    <button
        aria-label="random"
        class="random-button icon-button"
        class:active={$displayedView === Views.RANDOM}
        data-testid="random-button"
        on:click={() => setActiveView(Views.RANDOM)}
        title="Random"
    >
        <div
            class="icon-container"
            data-testid="random-icon"
        >
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
        border-radius: 0;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        padding: 8px;
    }

    .search-button {
        border: none;
        border-radius: 0;
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

    .active {
        background-color: var(--orange);
    }

    .icon-container {
        display: flex;
        justify-content: center;
    }
</style>
