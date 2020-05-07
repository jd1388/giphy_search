<script>
    import Content from '../content/Content.svelte';
    import Header from '../header/Header.svelte';
</script>

<main>
    <Header />
    <Content />
</main>

<style>
    main {
        display: grid;
        grid-template-rows: 150px 1fr;
        grid-template-areas: "header" "results";
    }
</style>
