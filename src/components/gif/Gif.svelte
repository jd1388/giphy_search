<script>
    export let gif;
    export let still;
    export let title;

    let gifToDisplay = still;

    const switchToAnimatedGif = () => gifToDisplay = gif;
    const switchToStillGif = () => gifToDisplay = still;
</script>

<img
    alt={title}
    data-testid="gif"
    on:mouseover={switchToAnimatedGif}
    on:mouseout={switchToStillGif}
    src={gifToDisplay}
/>
