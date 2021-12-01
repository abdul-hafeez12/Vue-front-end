<template>
  <div>
    <b-table striped hover :items="items" :fields="fields" v-if="renderComponent"></b-table>
  </div>
</template>

<script>
export default {
  item: null,
  data() {
    return {
      renderComponent: true,
      fields: ["id", "name", "department", "semester"],
      items: [],
    };
  },
  mounted() {
    this.fetchData().catch((error) => {
      console.error(error);
    });
  },
  methods: {
    forceRerender() {
        // Remove my-component from the DOM
        this.renderComponent = false;
        this.$nextTick(() => {
          // Add the component back in
          this.renderComponent = true;
        });
      },
    async fetchData() {
      this.items = await this.axios.get(
        'http://localhost:8080/students'
      )
        .then((res) => {
          //console.warn(res.data);
          //console.log(res.data);
          return res.data;
        })
        .then((items) => items);
    },
  },
  watch: {
    currentPage: {
      handler: function (value) {
        this.fetchData().catch((error) => {
          console.error(error, value);
        });
      },
    },
  },
};
</script>