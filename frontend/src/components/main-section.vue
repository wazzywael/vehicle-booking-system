<template>
    <div>
        <b-carousel id="carousel-1" :interval="1500" indicators background="#ababab" img-width="1024" img-height="480"
            style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
            <b-carousel-slide>
                <template #img>
                    <img class="imgSlideCarousel"
                        src="../images/carousel-image-1.jpg"
                        alt="image slot" />
                </template>
            </b-carousel-slide>

            <b-carousel-slide>
                <template #img>
                    <img class="imgSlideCarousel"
                        src="../images/carousel-image-2.jpg"
                        alt="image slot" />
                </template>
            </b-carousel-slide>

            <b-carousel-slide>
                <template #img>
                    <img class="imgSlideCarousel"
                        src="../images/carousel-image-3.jpg"
                        alt="image slot" />
                </template>
            </b-carousel-slide>

            <b-carousel-slide>
                <template #img>
                    <img class="imgSlideCarousel"
                        src="../images/carousel-image-4.jpg"
                        alt="image slot" />
                </template>
            </b-carousel-slide>
        </b-carousel>
        <b-form class="formReservation" @submit.stop.prevent>
            <label class="mr-sm-2">Pick Location:</label>
            <b-form-select v-model="pickLocationValue" :options="pickLocation" size="sm" class="mt-1"></b-form-select>
            <label class="mt-2">Return Location:</label>
            <b-form-select v-model="returnLocationValue" :options="returnLocation" size="sm" class="mt-1">
            </b-form-select>
            <label class="mt-2" for="example-datepicker">Choose a pick date</label>
            <div class="timeClass">
                <b-form-datepicker v-model="pickDate" class="mr-2"></b-form-datepicker>
                <b-form-timepicker v-model="pickTime" locale="en"></b-form-timepicker>
            </div>
            <label class="mt-3" for="example-datepicker">Choose a return date</label>
            <div class="timeClass">
                <b-form-datepicker v-model="returnDate" class="mr-2"></b-form-datepicker>
                <b-form-timepicker v-model="returnTime" locale="en"></b-form-timepicker>
            </div>
            <b-button @click="gotoRent()" class="mt-3" block variant="outline-dark">Search</b-button>
        </b-form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            sliding: null,
            pickLocation: [
                "İstanbul",
                "İzmir",
                "Ankara",
                "Antalya",
                "Sakarya",
                "Kocaeli",
            ],
            pickLocationValue: "İstanbul",
            returnLocation: [
                "İstanbul",
                "İzmir",
                "Ankara",
                "Antalya",
                "Sakarya",
                "Kocaeli",
            ],
            returnLocationValue: "Ankara",
            pickDate: "",
            pickTime: "",
            returnDate: "",
            returnTime: "",
            userSelect: [],
        };
    },
    methods: {
        onSlideStart() {
            this.sliding = true;
        },
        onSlideEnd() {
            this.sliding = false;
        },
        gotoRent() {
            this.userSelect.push(
                this.pickLocationValue,
                this.returnLocationValue,
                this.pickDate,
                this.pickTime,
                this.returnDate,
                this.returnTime
            );
            const userSelect = this.userSelect;
            this.$router.push({ name: "Rent", params: { userData: userSelect } });
            //this.$router.go(-1);
            /*
            window.history.length > 1
              ? this.$router.go(-1)
              : this.$router.push("/");
            */
        },
    },
};
</script>
  
<style>
.formReservation {
    position: absolute;
    height: 390px;
    max-width: 600px;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 15px;
    margin-top: -500px;
    margin-left: 200px;
    z-index: 9999;
    text-shadow: none;
}

.imgSlideCarousel {
    width: 100%;
    height: 600px;
    -webkit-filter: brightness(70%);
}

.timeClass {
    display: flex;
    flex-direction: row;
}
</style>
  