<template>
  <div class="home">
    <HelloWorld msg="Hallo ✋😁" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
}
</style>
