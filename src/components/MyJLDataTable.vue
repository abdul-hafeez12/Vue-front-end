<template>
  <div class="container">
      <JlDatatable
        :url='datatable.url'
        :columns="datatable.columns"  

        :requestOptions="datatable.requestOptions"
        :lengthMenu="datatable.lengthMenu"
        :isLengthMenu="datatable.isLengthMenu"
        :pageLength="datatable.pageLength"
        :isSearch="datatable.isSearch"
        :isSort="datatable.isSort"
        :sortDt="datatable.sortDt"

        @countPageChanged="onCountPageChanged"
        @search="onSearch"

        @gettingEntries="onGettingEntries"
        @entriesFetched="onEntriesFetched"

        @columnClicked="onColumnClicked"

        @prevPaginated="onPaginate"
        @nextPaginated="onPaginate"
        @paginated="onPaginate"

        @error="error"
      />
  </div>
</template>
<script>
import JlDatatable from 'jl-datatable';
import Buttons from './Buttons.vue';
export default {
  components: {
    JlDatatable
  },
    data() {
    return {
      datatable: {
       // url: 'https://www.jhonpride.ybdweb.com/api/users',
        requestOptions: {
          method: 'GET',
          headers: {
            "Accept": "application/json",                
          }
        },
        lengthMenu: [10, 15, 20, 50, 120],
        pageLength: 10,
        isSearch: true,
        isLengthMenu: true,
        isSort: true,
        sortDt:{
          sortBy: 'name',
          sort: 'ASC'
        },
        columns: [       
            {
            title: 'ID',
            key: 'id',
            isSort: true,            
            width: '5%'
          },   
          {
            title: 'Student Name',
            key: 'name',
            isSort: true,
            isSearch: true,
            // width: '10%'
          },
          {
            title: 'Department',
            key: 'department',
            isSort: false,
            isSearch: false,
            // width: '10%'
          },
          {
            title: 'Semester',
            key: 'semester',                        
          }
        ]
      }
    }
  },
  methods: {
    onCountPageChanged(countPage){
      alert(countPage);
    },
    onSearch(search){
      alert(search);
    },
    onGettingEntries(request){
      console.log(request);
    },
    onEntriesFetched(fetched){
      console.log(fetched.request);
      console.log(fetched.data);
    },
    onColumnClicked(data){
      console.log(data);
    },
    onPaginate(url){
      console.log(url);
    },
    error(err){
      console.log(err);
    },
  }
}
</script>