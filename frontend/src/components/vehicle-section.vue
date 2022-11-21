<template>
    <div>
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              src="../images/small-car.jpg"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="item[0]">
              <b-card-text>
                {{ item[1] }}
              </b-card-text>
              <div class="priceBucket">
                <b-card-text class="priceText"> ${{ item[2] }} </b-card-text>
                <b-icon class="mb-3 mx-2 icon" icon="bucket"></b-icon>
              </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </template>
  
  <script>
    export default {
      props: {
        item: Array,
      },
    };
  </script>
  
  <style>
    .priceText {
      font-weight: bold;
      font-size: 18px;
      background-color: rgb(0, 153, 107);
      display: inline-block;
      padding: 5px 10px;
      border-radius: 20px;
      color: #fff;
    }
    .priceBucket {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
    }
    .icon {
      font-size: 28px;
      color: rgb(0, 153, 107);
      cursor: pointer;
    }
  </style>
  