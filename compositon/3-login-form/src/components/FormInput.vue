<template>
  <div class="form-labels">
    <label class="form-label" :for="name">{{ name }}</label>
    <div class="form-error">{{ error }}</div>
  </div>
  <input
    :value="value"
    @input="input"
    class="form-input"
    :type="type"
    :id="name"
  />
</template>

<script>
export default {
  emits: ['updateValue'],
  props: {
    value: {
      type: String,
      required: true,
    },
    error: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    rules: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    function validate(val) {
      if (props.rules.required && val.length === 0) {
        return 'Required';
      }
      if (props.rules.min && val.length < props.rules.min) {
        return `Min length is ${props.rules.min}`;
      }
      return '';
    }

    function input(event) {
      emit('updateValue', {
        name: props.name.toLowerCase(),
        value: event.target.value,
        error: validate(event.target.value),
      });
    }

    // Initial validation on mount
    emit('updateValue', {
      name: props.name.toLowerCase(),
      value: props.value,
      error: validate(props.value),
    });

    return {
      input,
    };
  },
};
</script>

<style scoped>
.form-labels {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
}

.form-error {
  color: red;
  font-size: 0.85rem;
}

.form-input {
  outline: none;
  border: none;
  background: white;
  color: #000;
  padding: 0.6rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  width: 100%;
}
</style>
