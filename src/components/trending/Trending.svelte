<script>
    import Gif from '../gif/Gif.svelte';
    import { getTrendingGifs } from '../../services/giphy-service/GiphyService';

    const trendingGifsPromise = getTrendingGifs();
</script>

<div
    class="trending-container"
    data-testid="trending-container"
>
    <div class="trending-content">
        <h1>Trending</h1>
        <hr>
        {#await trendingGifsPromise}
            <div data-testid="loading-trending">
                Loading
            </div>
        {:then trendingGifs}
            <div class="gifs-container">
                {#each trendingGifs as trendingGif}
                    <!-- <img
                        alt="trending gif"
                        class="gif"
                        data-testid="trending-gif"
                        src={trendingGif.still}
                    > -->
                    <Gif {...trendingGif} />
                {/each}
            </div>
        {/await}
    </div>
</div>

<style>
    .trending-container {
        display: grid;
        grid-template-areas: ". trending-content .";
        grid-template-columns: 1fr 3fr 1fr;
    }

    .trending-content {
        grid-area: trending-content;
    }

    .gifs-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .gifs-container::after {
        content: "";
        flex: auto;
    }
</style>
