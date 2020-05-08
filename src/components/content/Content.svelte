<script>
    import { displayedView } from '../../stores';
    import { Views } from '../../enums';
</script>

<div data-testid="content">
    {#if $displayedView === Views.TRENDING}
        <p>Trending</p>
    {:else if $displayedView === Views.RANDOM}
        <p>Random</p>
    {:else if $displayedView === Views.SEARCH}
        <p>Search</p>
    {/if}
</div>
