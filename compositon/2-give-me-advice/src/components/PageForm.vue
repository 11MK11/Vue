<template>
  <form class="form">
    <fieldset class="form-fieldset">
      <legend class="form-legend">Choose a number</legend>
      <label class="form-label">Luck Number</label>
      <input class="form-input" type="number" v-model="userNumber" />
    </fieldset>
    <fieldset class="form-fieldset">
      <legend class="form-legend">Text Color</legend>
      <label class="form-label">Color</label>
      <input class="form-input" type="color" v-model="userColor" />
    </fieldset>
    <form-result :color="userColor" :advice="getAdvice"></form-result>
  </form>
</template>

<script>
import { inject, computed, ref } from 'vue';
import FormResult from './FormResult.vue';
export default {
  name: 'PageForm',
  components: {
    FormResult,
  },
  setup() {
    const quotes = inject('quotes');
    const userNumber = ref(5);
    const userColor = ref('#000000');
    console.log(userNumber);

    const getAdvice = computed(() => {
      const advice = quotes.find((q, i) => i === userNumber.value);

      if (!advice) return 'unlucky enough, no advice for you';
      return advice.quoteText;
    });
    return {
      userColor,
      userNumber,
      getAdvice,
    };
  },
};
</script>

<style scoped>
.form {
  margin: 5rem auto;
  max-width: 70%;
}

.form-fieldset {
  margin: 2rem 0;
  padding: 2rem;
  border-radius: 10px;
  background: linear-gradient(80deg, #e5e5e5, lightblue);
}

.form-legend {
  display: block;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  background: linear-gradient(80deg, yellow, lightgreen);
  border-radius: 10px;
}

.form-label {
  display: block;
  padding: 1rem;
  font-size: 2rem;
  font-weight: bold;
}

.form-input {
  outline: none;
  border: none;
  font-size: 2rem;
  color: tomato;
  text-align: center;
  max-width: 30%;
}
</style>