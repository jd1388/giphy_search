<script>
    import Trending from '../trending/Trending.svelte';
    import { displayedView } from '../../stores';
    import { Views } from '../../enums';
</script>

<div data-testid="content">
    {#if $displayedView === Views.TRENDING}
        <Trending />
    {:else if $displayedView === Views.RANDOM}
        <p>Random</p>
    {:else if $displayedView === Views.SEARCH}
        <p>Search</p>
    {/if}
</div>
