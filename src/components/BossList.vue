<template>
  <transition-group name="list" tag="div" class="boss">
    <div class="boss-container" v-for="boss in orderedBosses" :key="boss.id">
      <img class="boss-image" :src="boss.image" />
      <div class="boss-content">
        <div class="boss-name">{{ boss.name }}</div>
        <div class="boss-title">{{ boss.title }}</div>
        <div class="boss-stat-container">
          <div class="boss-stat boss-health">
            <img class="boss-stat-image" src="@/assets/heart.png" />
            {{ boss.health }}
          </div>
          <div class="boss-stat">
            <img class="boss-stat-image" src="@/assets/strength.png" />
            {{ boss.str }}
          </div>
          <div class="boss-stat">
            <img class="boss-stat-image" src="@/assets/shoes.png" />
            {{ boss.dex }}
          </div>
          <div class="boss-stat">
            <img class="boss-stat-image" src="@/assets/brain.png" />
            {{ boss.int }}
          </div>
        </div>
        <div class="boss-stat-container">
          <div class="boss-stat boss-damage">
            <img class="boss-stat-image" src="@/assets/sword.png" />
            {{ boss.damage }}
          </div>
          <div class="boss-stat boss-defense">
            <img class="boss-stat-image" src="@/assets/shield.png" />
            {{ boss.defense }}
          </div>
        </div>

        <div class="boss-stat-container">
          <div class="boss-skill" v-for="skill in boss.skills" :key="skill">
            {{ skill.skill }}
            <div class="boss-description">
              {{ skill.description }}
            </div>
          </div>
        </div>

        <div class="boss-stat-container">
          <div class="boss-drop" v-for="drop in boss.drops" :key="drop">
            {{ drop.item }}
            <div class="boss-description">
              {{ drop.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script lang="ts">
import Boss from "@/types/Boss";
import OrderTerm from "@/types/OrderTermBoss";
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    bosses: {
      required: true,
      type: Array as PropType<Boss[]>,
    },
    order: {
      required: true,
      type: String as PropType<OrderTerm>,
    },
  },
  setup(props) {
    const orderedBosses = computed(() => {
      return [...props.bosses].sort((a: Boss, b: Boss) => {
        var firstValue = a[props.order];
        var secondValue = b[props.order];

        if (typeof firstValue === "number") {
          return firstValue < secondValue ? 1 : -1;
        } else {
          return firstValue > secondValue ? 1 : -1;
        }
      });
    });

    return { orderedBosses };
  },
  mounted() {
    var skillElement = document.getElementsByClassName("boss-skill");
    [...skillElement].forEach((element) => {
      var innerElement = element.getElementsByTagName("div")[0];
      element.addEventListener("mouseenter", () => {
        innerElement.classList.toggle("boss-description--active");
      });
      element.addEventListener("mouseleave", () => {
        innerElement.classList.toggle("boss-description--active");
      });
    });

    var bossElement = document.getElementsByClassName("boss-drop");
    [...bossElement].forEach((element) => {
      var innerElement = element.getElementsByTagName("div")[0];
      element.addEventListener("mouseenter", () => {
        innerElement.classList.toggle("boss-description--active");
      });
      element.addEventListener("mouseleave", () => {
        innerElement.classList.toggle("boss-description--active");
      });
    });
  },
});
</script>

<style scoped>
.boss {
  width: 768px;
}
.boss-image {
  width: 150px;
  height: 150px;
  margin-right: 15px;
}

.boss-container {
  display: flex;
  background: #eee;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 15px;
  padding: 30px;
  position: relative;
}

.boss-stat-container {
  display: flex;
  flex-wrap: wrap;
}

.boss-content {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}

.boss-name {
  font-size: 24px;
  font-weight: bold;
}

.boss-title {
  font-size: 22px;
}

.boss-stat {
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;
}

.boss-stat-image {
  height: 24px;
}

.boss-health {
  color: #33aa33;
}

.boss-damage {
  color: #aa3333;
}

.boss-defense {
  color: #dddd33;
  text-shadow: 2px 2px black;
}

.boss-drop {
  color: #444;
  font-size: 18px;
  height: 24px;
  margin-right: 20px;
  position: relative;
}

.boss-skill {
  color: #a33;
  font-size: 18px;
  height: 28px;
  margin-right: 20px;
  position: relative;
}

.boss-description {
  display: none;
  position: absolute;
  border: 2px solid #333;
  border-radius: 3px;
  top: 30px;
  width: 200px;
  background: #fff;
  padding: 25px;
  z-index: 1;
}

.boss-description--active {
  display: block;
}

.boss-description:before {
  content: "";
  width: 0px;
  height: 0px;
  border-bottom: 10px solid #333;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  position: absolute;
  top: -10px;
}

.list-move {
  transition: all 0.5s ease-out;
}
</style>