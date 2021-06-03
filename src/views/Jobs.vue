<template>
  <div class="job-board">
    <div class="sort">
      <button class="sort-button" @click="handleClick('title')">
        Sort by title
      </button>
      <button class="sort-button" @click="handleClick('salary')">
        Sort by salary
      </button>
      <button class="sort-button" @click="handleClick('location')">
        Sort by location
      </button>
      <button class="sort-button" @click="handleClick('difficulty')">
        Sort by difficulty
      </button>
    </div>
    <JobsList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import JobsList from "@/components/JobsList.vue";
import { defineComponent, ref } from "vue";
import Job from "../types/Job";
import OrderTerm from "@/types/OrderTermJob";

export default defineComponent({
  name: "jobs",
  components: { JobsList },
  setup() {
    const jobs = ref<Job[]>([
      {
        description:
          "Tötet alle umherwandernde Ghoule, die sind in der Bastion hinter der Schenke zum wilden Eber befinden.",
        title: "Ghoule in der Bastion",
        location: "Altstadt",
        difficulty: 3,
        salary: 6800,
        id: "0",
      },
      {
        description:
          "Ein geheimnisvoller Mann hatte sich von einer kleinen alten Frau eine Bratpfanne ausgeliehen und diese nicht wieder zurückgebracht. Findet ihn und bringt mir meine Pfanne zurück.",
        title: "Eine blitzblanke Bratpfanne",
        location: "Altstadt",
        difficulty: 3,
        salary: 850,
        id: "1",
      },
      {
        description:
          "Sucht Kommandant Gor'shak in den Tiefen von Moria und bringt ihn zur strecke.",
        title: "Tötet Kommandant Gor'shak",
        location: "Moria",
        difficulty: 3,
        salary: 15000,
        id: "2",
      },
      {
        description:
          "Man sagt, dass die Feen eine Quelle in dieser Stadt versteckt haben. Findet sie und bringt mich dahin!",
        title: "Die legendäre Feenquelle",
        location: "Gesamte Stadt",
        difficulty: 2,
        salary: 6500,
        id: "3",
      },
      {
        description:
          "Man munkelt in der Altstadt gäbe es einen Braumeister, der ein blubberndes dunkles Gebräu verkauft. Findet ihn und bringt mir eine Flasche.",
        title: "Dunkles Gebräu",
        location: "Altstadt",
        difficulty: 1,
        salary: 1500,
        id: "4",
      },
      {
        description: "Bringt mir spannende Bücher über Drachen!",
        title: "Langeweile im Lockdown",
        location: "Gesamte Stadt",
        difficulty: 1,
        salary: 6500,
        id: "5",
      },
    ]);

    const order = ref<OrderTerm>("title");

    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };

    return { jobs, order, handleClick };
  },
});
</script>

<style scoped>
.job-board {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sort {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}

.sort-button {
  background: white;
  border: 2px solid #aaa;
  border-radius: 3px;
  cursor: pointer;
  width: 150px;
  height: 35px;
  margin: 0 15px;
  padding: 5px 10px;
  transition: all 0.3s ease-out;
}

.sort-button:hover {
  background: #ddd;
  border: 2px solid #888;
}
</style>