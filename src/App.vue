<template>
  <div>
  <b-card no-body>
    <b-tabs card>
      <b-tab title="Enter Data" active>
        <div class="container">
          <MyForm />
        </div>
        
      </b-tab>
      <b-tab title="View Data">
       <div class="container">
          <MyTable />
        </div>
      </b-tab>
    </b-tabs>
  </b-card>
</div>
</template>

<script>
import MyForm from './components/MyForm.vue'
import MyTable from './components/MyTable.vue'
export default {
  name: 'App',
  components: {
    MyForm,
    MyTable,
  },
}
</script>