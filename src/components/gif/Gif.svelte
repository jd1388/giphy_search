<script>
    export let gif;
    export let source;
    export let still;
    export let title;

    let gifToDisplay = still;

    const copyGifSourceToClipboard = () => navigator.clipboard.writeText(source);
    const switchToAnimatedGif = () => gifToDisplay = gif;
    const switchToStillGif = () => gifToDisplay = still;
</script>

<img
    alt={title}
    data-testid="gif"
    on:click={copyGifSourceToClipboard}
    on:mouseover={switchToAnimatedGif}
    on:mouseout={switchToStillGif}
    src={gifToDisplay}
/>

<style>
    img {
        cursor: pointer;
        margin: 4px;
    }
</style>
