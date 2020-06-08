<template>
    <div>
        <p>Counter: {{counter}}</p>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class App extends Vue {
    counter = 0;
}
</script>