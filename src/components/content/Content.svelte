<script>
    import Trending from '../trending/Trending.svelte';
    import { displayedView } from '../../stores';
    import { Views } from '../../enums';
</script>

<div
    class="content"
    data-testid="content"
>
    {#if $displayedView === Views.TRENDING}
        <Trending />
    {:else if $displayedView === Views.RANDOM}
        <p>Random</p>
    {:else if $displayedView === Views.SEARCH}
        <p>Search</p>
    {/if}
</div>

<style>
    .content {
        display: grid;
        grid-template-areas: ". content .";
        grid-template-columns: 1fr 3fr 1fr;
    }
</style>
