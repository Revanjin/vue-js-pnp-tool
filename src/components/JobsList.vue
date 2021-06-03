<template>
  <transition-group name="list" class="job" tag="div">
    <div
      class="job-container"
      :class="
        job.difficulty == 1 ? 'easy' : job.difficulty == 2 ? 'medium' : 'hard'
      "
      v-for="job in orderedJobs"
      :key="job.id"
    >
      <div class="job-image"></div>
      <div class="job-content">
        <div class="job-title">{{ job.title }}</div>
        <div class="job-salary">
          <img class="job-salary-image" src="@/assets/coin.png" />{{
            job.salary
          }}
        </div>
        <div class="job-description">{{ job.description }}</div>
        <div class="job-location">Ort: {{ job.location }}</div>
      </div>
    </div>
  </transition-group>
</template>

<script lang="ts">
import Job from "@/types/Job";
import OrderTerm from "@/types/OrderTermJob";
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    jobs: {
      required: true,
      type: Array as PropType<Job[]>,
    },
    order: {
      required: true,
      type: String as PropType<OrderTerm>,
    },
  },
  setup(props) {
    const orderedJobs = computed(() => {
      return [...props.jobs].sort((a: Job, b: Job) => {
        var firstValue = a[props.order];
        var secondValue = b[props.order];

        return firstValue > secondValue ? 1 : -1;
      });
    });

    return { orderedJobs };
  },
});
</script>

<style scoped>
.job {
  width: 768px;
}

.job-container {
  display: flex;
  background: #eaeaea;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 15px;
  padding: 30px;
  position: relative;
}

.job-container:after {
  content: "";
  width: 60px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 40px;
  transform: skewX(-10deg);
}

.job-content {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  max-width: 600px;
}

.job-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.job-salary {
  display: flex;
  align-items: center;
  color: #aa8800;
  font-weight: bold;
  margin-bottom: 10px;
}

.job-salary-image {
  height: 24px;
  margin-right: 5px;
}

.job-description {
  font-size: 14px;
  margin-bottom: 10px;
}

.job-difficulty {
  font-weight: bold;
  position: absolute;
  right: 30px;
}

.easy:after {
  background: rgba(20, 150, 20, 0.8);
}

.medium:after {
  background: rgba(220, 220, 10, 0.9);
}

.hard:after {
  background: rgba(150, 20, 20, 0.8);
}

.list-move {
  transition: all 0.5s ease-out;
}
</style>