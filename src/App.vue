<template>
    <div id="app">
        <h1>Welcome to this Vue & Typescript App</h1>
        <counter></counter>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Counter from "./components/Counter.vue";

@Component({
    components: {
        Counter
    }
})
export default class App extends Vue {}
</script>