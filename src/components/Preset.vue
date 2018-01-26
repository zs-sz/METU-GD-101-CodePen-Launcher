<template>
  <div class="preset">
    <div class="preset-info">
      <h3>{{ presetTitle }}</h3>
      <p>{{ presetDescription }}</p>
    </div>
    <form
      action="https://codepen.io/pen/define"
      method="POST"
      target="_blank"
    >
      <input
        type="hidden"
        name="data"
        :value="presetConfig"
      >
      <input
        class="button"
        type="submit"
        value="Launch Preset"
      >
    </form>
  </div>
</template>

<script>
  export default {
    props: {
      presetConfig: {
        type: String,
        required: true
      },
      presetTitle: {
        type: String,
        default: 'Preset Title'
      },
      presetDescription: {
        type: String,
        default: 'Preset description'
      }
    }
  }
</script>
<style scoped>
  .preset {
    padding: 1rem;
    border: 1px solid #c1c1c1;
    flex: 0 1 300px;
    position: relative;
    min-height: 300px;
    margin-right: 15px;
    margin-bottom: 15px;
  }

  .button {
    border: 0;
    padding: 1rem;
    margin-top: 1rem;
    background-color: #f2f2f2;
    font-weight: 900;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    position: absolute;
    bottom: 1rem;
  }

</style>
