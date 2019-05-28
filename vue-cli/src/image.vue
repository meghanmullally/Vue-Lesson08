<template>
  <!-- default gallery mode -->
  <v-gallery :images="list" :dark="true" :caption="true">

  </v-gallery>
</template>

<script>
export default {
    data() {
      return {
        list: [{
            title: 'Cherry Blossoms in Japan',
            url: './assets/img/cherry-blossoms.jpg'
          },
          {
            title: 'London',
            url: './assets/img/london.jpg'
          },
          {
            title: 'Paris',
            url: './assets/img/paris.jpg'
          },
          {
            title: 'Monet',
            url: './assets/img/Monet.jpg'
          },
        }
    }
};
  </script>
 

<style lang="scss" scoped>
    .image-box{
        a {
            clear: both;
            display: inline-block;
            margin: 0 10px 10px 0;
            position: relative;
            text-align: center;
            .bgbox {
                background-color: #232323;
                height: 150px;
                display:table-cell;
                vertical-align:middle;
                padding: 4px;
                border-radius: 2px;
                img{ width: 200px;display: block;}
            }
            .img-title {
                bottom: 5px;
                display: block;
                text-align: center;
                color: #999999;
                padding-top: 5px;
            }
            &:hover {
                .img-title { color: #232323; }
            }
        }
    }
</style>