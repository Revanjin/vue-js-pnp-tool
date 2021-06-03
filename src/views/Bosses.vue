<template>
  <div class="boss-board">
    <div class="sort">
      <button class="sort-button" @click="handleClick('name')">
        Sort by name
      </button>
      <button class="sort-button" @click="handleClick('health')">
        Sort by health
      </button>
      <button class="sort-button" @click="handleClick('str')">
        Sort by str
      </button>
      <button class="sort-button" @click="handleClick('dex')">
        Sort by dex
      </button>
      <button class="sort-button" @click="handleClick('int')">
        Sort by int
      </button>
      <button class="sort-button" @click="handleClick('damage')">
        Sort by damage
      </button>
    </div>
    <BossList :bosses="bosses" :order="order" />
  </div>
</template>

<script lang="ts">
import BossList from "@/components/BossList.vue";
import { defineComponent, ref } from "vue";
import Boss from "../types/Boss";
import OrderTerm from "@/types/OrderTermBoss";

export default defineComponent({
  name: "bosses",
  components: { BossList },
  setup() {
    const bosses = ref<Boss[]>([
      {
        name: "Trickster",
        title: "Mad Artist",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/1200px-Placeholder_no_text.svg.png",
        health: 245,
        str: 4,
        dex: 12,
        int: 12,
        damage: 4,
        defense: 3,
        drops: [
          { item: "Spielkarten", description: "" },
          {
            item: "Buch über das Sezieren vom menschlichen Körper",
            description: "",
          },
          { item: "Stylische Messer", description: "" },
          { item: "1400 Gold", description: "" },
        ],
        skills: [
          { skill: "Throwing Dagger", description: "" },
          { skill: "Slice and Dice", description: "" },
          { skill: "Ace of Spades", description: "" },
        ],
        id: "0",
      },
      {
        name: "Ethereal",
        title: "Demonic Specter",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/1200px-Placeholder_no_text.svg.png",
        health: 350,
        str: 12,
        dex: 6,
        int: 2,
        damage: 8,
        defense: 0,
        drops: [
          { item: "2x Seil", description: "" },
          { item: "Rostiger riesen Zweihänder", description: "" },
          { item: "1200 Gold", description: "" },
        ],
        skills: [
          { skill: "Charge Attack", description: "" },
          { skill: "Unbreakable", description: "" },
        ],
        id: "1",
      },
      {
        name: "Majestätischer Greif",
        title: "König der Greifen",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/1200px-Placeholder_no_text.svg.png",
        health: 280,
        str: 12,
        dex: 8,
        int: 6,
        damage: 5,
        defense: 4,
        drops: [
          { item: "Eckzahn eines Greifen", description: "" },
          { item: "Fell eines Greifen", description: "" },
          { item: "Krallen eines Greifen", description: "" },
        ],
        skills: [
          { skill: "Sturzflug", description: "" },
          { skill: "Geowurf", description: "" },
          { skill: "Windstoß", description: "" },
        ],
        id: "2",
      },
      {
        name: "Garrosh Hellscream",
        title: "Kriegshäuptling der Horde",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/1200px-Placeholder_no_text.svg.png",
        health: 550,
        str: 12,
        dex: 6,
        int: 6,
        damage: 9,
        defense: 4,
        drops: [
          { item: "Verzaubertes Kriegsbeil", description: "" },
          { item: "Fangzähne eines Orcs", description: "" },
          { item: "4000 Gold", description: "" },
        ],
        skills: [
          { skill: "Revanche", description: "Testbeschreibung und so weiter hier könnte auch noch viel mehr stehen oder auch nichts oder vllt acuh sowas wie coca cola" },
          { skill: "Hinrichten", description: "" },
          { skill: "Seismischer Stoß", description: "" },
          { skill: "Tiefen des Wahnsinns", description: "" },
        ],
        id: "3",
      },
      {
        name: "Cairne Bloodhoof",
        title: "Häuptling des Stammes der Tauren",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/1200px-Placeholder_no_text.svg.png",
        health: 840,
        str: 12,
        dex: 6,
        int: 8,
        damage: 7,
        defense: 4,
        drops: [
          { item: "Verzaubertes Kriegsbeil", description: "Heilt bei jedem kritischen Treffer um 15 Punkte" },
          { item: "Rostiger riesen Zweihänder", description: "" },
          { item: "1200 Gold", description: "" },
        ],
        skills: [
          { skill: "Machtdemonstration", description: "" },
          { skill: "Durchdringendes Urteil", description: "" },
          { skill: "Seismischer Stoß", description: "" },
          { skill: "Unerschütterlicher Wächter", description: "" },
        ],
        id: "4",
      },
    ]);

    const order = ref<OrderTerm>("name");

    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };

    return { bosses, order, handleClick };
  },
});
</script>

<style scoped>
.boss-board {
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
  position: relative;
  transition: all 0.3s ease-out;
  z-index: 1;
}

.sort-button:hover {
  background: transparent;
  border: 2px solid transparent;
}

.sort-button:hover:before {
  width: 150px;
}

.sort-button:before {
  content: "";
  background: #ddd;
  width: 0;
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
  transition: all 0.25s ease-out;
  z-index: -1;
}
</style>