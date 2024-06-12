<template>
  <div>
    <vue-editor v-model="content"></vue-editor>
  </div>
</template>

<script>
import { VueEditor } from "vue3-editor";
export default {
    data() {
    return {
      content: '',
    };
  },
  components: { VueEditor },
  created(){},
  mounted(){},
  methods: {

  },
};
</script>


<style>

</style>