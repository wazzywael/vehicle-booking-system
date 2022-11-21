<template>
    <b-row>
        <b-jumbotron class="panel" bg-variant="dark" text-variant="white" border-variant="dark">
            <h4 class="header">Search Param Panel</h4>
            <hr class="hr" />
            <h5 class="my-2">
                <span class="title">
                    <b-icon-geo class="mx-1"></b-icon-geo> Location Value:
                </span>
                {{ pickLocationValue === "" ? "empty" : pickLocationValue }}
            </h5>
            <h5 class="my-2">
                <span class="title">
                    <b-icon-geo class="mx-1"></b-icon-geo> Return Location Value:
                </span>
                {{ returnLocationValue === "" ? "empty" : returnLocationValue }}
            </h5>
            <h5 class="my-2">
                <span class="title">
                    <b-icon-calendar-date class="mx-1"></b-icon-calendar-date> Pick Date:
                </span>
                {{ pickDate === "" ? "empty" : pickDate }}
            </h5>
            <h5 class="my-2">
                <span class="title">
                    <b-icon-clock class="mx-1"></b-icon-clock> Pick Time:
                </span>
                {{ pickTime === "" ? "empty" : pickTime }}
            </h5>
            <h5 class="my-2">
                <span class="title">
                    <b-icon-calendar2-date class="mx-1"></b-icon-calendar2-date> Return
                    Date:
                </span>
                {{ returnDate === "" ? "empty" : returnDate }}
            </h5>
            <h5 class="my-2">
                <span class="title">
                    <b-icon-clock class="mx-1"></b-icon-clock> Return Time:
                </span>
                {{ returnTime === "" ? "empty" : returnTime }}
            </h5>
        </b-jumbotron>
    </b-row>
</template>
  
<script>
export default {
    props: {
        pickLocationValue: String,
        returnLocationValue: String,
        pickDate: String,
        pickTime: String,
        returnDate: String,
        returnTime: String,
    },
};
</script>
  
<style>
.panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-width: 800px;
}

.hr {
    border: 1px solid #fff;
    min-width: 600px;
}

.header {
    background-color: rgb(0, 153, 107);
    padding: 7px 15px;
    margin-left: 70px;
}

.title {
    margin-left: 70px;
    background-color: salmon;
    padding: 3px;
    border-radius: 5px;
    margin-right: 5px;
}
</style>
  