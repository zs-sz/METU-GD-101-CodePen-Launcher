<template>
  <div class="launcher">
    <h2 class="launcher-title">P5.js Codepen Template Generator</h2>
    <div class="presets">
      <preset
        :preset-config="defaultPresetSettings"
        preset-title="Basic Fixed Width"
        preset-description= "500 x 500 Fixed size, bare minimum"
      ></preset>
      <preset
        :preset-config="fluidPresetSettings"
        preset-title="Basic Fluid"
        preset-description="Fluid canvas and proper device pixel density (mobile or high ppi display)"
      ></preset>
       <preset
        :preset-config="datguiPresetSettings"
        preset-title="Basic Fluid + DAT.gui"
        preset-description="Fluid canvas w. dat.gui">
      </preset>
    </div>
  </div>
</template>

<script>
import Preset from './preset';
import fluidP5 from '../fix-templates/p5-fluid.txt';
import datGui from '../fix-templates/p5-dat.txt';
import { DEFAULT_CODEPEN_SETTINGS, P5JS_CDN_URL, DAT_GUI } from '../constants.js'
import axios from 'axios';

export default {
  name: 'Launcher',
  data () {
    return {
      defaultPreset: DEFAULT_CODEPEN_SETTINGS
    }
  },
  computed: {
    defaultPresetSettings () {
      return JSON.stringify(DEFAULT_CODEPEN_SETTINGS)
    },
    fluidPresetSettings () {
      let settings = {
        js: fluidP5,
        title: "P5 Fluid"
      }

      return JSON.stringify(Object.assign(this.defaultPreset, settings));
    },
    datguiPresetSettings () {
      const resources = `${P5JS_CDN_URL};${DAT_GUI}`;
      let settings = {
        js: datGui,
        js_external : resources,
        title: "P5.js + dat.gui"
      }
      return JSON.stringify(Object.assign(this.defaultPreset, settings));
    },

  },
  components: {
    Preset
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.presets {
  display: flex;
  flex-wrap: wrap;
}

.launcher-title {
  margin-bottom: 2rem;
}

</style>
