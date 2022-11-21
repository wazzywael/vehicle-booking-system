<template>
    <div>
      <div class="cardContainer">
        <search
          class="mt-2"
          v-if="userData"
          :pickLocationValue="userData[0]"
          :returnLocationValue="userData[1]"
          :pickDate="userData[2]"
          :pickTime="userData[3]"
          :returnDate="userData[4]"
          :returnTime="userData[5]"
        />
      </div>
      <div class="cardContainer">
        <vehicle class="mx-3 my-2" v-for="i in 12" :key="i" :item="item" />
      </div>
    </div>
  </template>
  
  <script>
    import Vehicle from "../components/vehicle-section.vue";
    import Search from "../components/search-section.vue";
    export default {
      components: {
        Vehicle,
        Search,
      },
      data() {
        return {
          item: [
            "Small Car",
            "About Car",
            200,
          ],
        };
      },
      props: {
        userData: Array,
      },
      //beforeRouteEnter
      //beforeRouteUpdate
      beforeRouteLeave(to, from, next) {
        const answer = window.confirm("Are u sure?");
        if (answer) {
          next("/");
        } else {
          next(false);
        }
      },
    };
  </script>
  
  <style>
    .cardContainer {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  </style>
  