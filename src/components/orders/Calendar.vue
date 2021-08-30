<template>
    <div class="calendar">
        <div v-for="day in days" v-bind:key="day.number" v-on:click="changeDay(day)" :class="'card' + (today === day.number ? ' active' : '')">
            <div class="text">{{day.text}}</div>
            <div class="number">{{day.number}}</div>
        </div>
    </div>
</template>

<script>
import { getCurrentDayText } from '@/helpers';
export default {
    name: 'Calendar',
    computed:{
        order(){ return this.$store.state.order; },
        food(){ return this.$store.state.food; },
    },
    data: function(){
        return{
            today: 0,
            days: []
        }
    },
    methods: {
        getNextDays: function(){
            let date = new Date();
            let dayTmp = getCurrentDayText(date.getDay());
            let arrayTmp = [{text: dayTmp, number: date.getDate()}];
            date.setDate(date.getDate() + 1);
            for (let i = 0; i < 4; i++) {
                dayTmp = getCurrentDayText(date.getDay());
                arrayTmp.push({text: dayTmp, number: date.getDate()});
                date.setDate(date.getDate() + 1);
            }
            this.days = arrayTmp;
        },
        changeDay: function(day) {
            this.today = day.number;
            this.$store.commit('updateOrderDay', {...this.order, currentDay: day});
            if(!(this.order.currentDay.number in this.order)){
                let foodState = {};
                this.food.forEach(v => {
                    foodState[v.id] = {dishes: []};
                });
                this.$store.commit('createOrderFood', {...foodState});
            }
        }
    },
    created: function () {
        this.getNextDays();
        if(this.order.currentDay.number===0){
            let dateNow = new Date();
            this.today = dateNow.getDate();
            let dayTmp = getCurrentDayText(dateNow.getDay());
            this.$store.commit('updateOrderDay', {...this.order, currentDay: {text: dayTmp, number: this.today}});
        }else{
            this.today = this.order.currentDay.number;
        }
    }
}
</script>

<style lang="sass" scoped>
    .calendar
        padding: 8px 26px
        display: flex
        flex-direction: row
        justify-content: space-between
        border-bottom: 1px solid #E8E8E8
        .card
            border-radius: 8px
            padding: 5px 17px
            color: #C9C9C9
            &.active
                color: #606060
                background: #FFD538  
            .text
                font-size: 0.875rem
                font-weight: 400
            .number
                font-size: 1.25rem
                font-weight: 600
                text-align: center
</style>