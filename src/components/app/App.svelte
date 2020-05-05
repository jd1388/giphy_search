<script>
    import Header from '../header/Header.svelte';
</script>

<main>
    <Header />
</main>

<style>
    main {
        display: grid;
        grid-template-rows: 150px 1fr;
        grid-template-areas: "header" "results";
    }
</style>
