<template>
    <div>
        <p>Counter: {{ $global.count }}</p>
        <button @click="add">Add</button>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Counter extends Vue {
    add() {
        console.log("Incrementing counter...");
        this.$global.incr();
    }
}
</script>
