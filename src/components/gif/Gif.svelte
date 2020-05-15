<script>
    export let gif;
    export let still;
    export let title;

    let gifToDisplay = still;

    const switchToAnimatedGif = () => gifToDisplay = gif;
</script>

<img
    alt={title}
    data-testid="gif"
    onmouseover={switchToAnimatedGif}
    src={gifToDisplay}
/>
