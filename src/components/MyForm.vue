<template>
<div class='container'>
  <div class='container'>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Student Name:"
        label-for="input-1"
        
      >
        <b-form-input
          id="input-1"
          type="text"
          v-model="form.name"
          placeholder="Enter Student Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Department:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.department"
          placeholder="Enter Department Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Semester:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.semester"
          :options="categories"
          required
        ></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger" class="mx-4">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      form: {
        name: "",
        department: "",
        semester: "",
      },
      categories: [
        { text: "Select One", value: null },
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      show: true,
    };
  },
  methods: {
   onSubmit(event) {
       event.preventDefault();
    this.axios.post("http://localhost:8080/students/addStudent", this.form)
    .then(response => this.articleId = response.data.id);
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.name= "";
      this.form.department= "";
      this.form.semester = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>