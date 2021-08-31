<template>
    <div class="input">
        <input type="checkbox" :checked="checked"> 
        <label v-if="label">{{label}}</label> 
        <span v-on:click="check" class="checkmark"></span>
    </div>
</template>

<script>
export default {
    name: 'CheckBox',
    props: {
        label: String,
    },
    data: function(){
        return{
            checked: false
        }
    },
    methods: {
        check: function(){
            this.checked = !this.checked;
        }
    },

}
</script>

<style lang="sass" scoped>
    .input
        position: relative
        label
            margin-left: 15px
        input
            visibility: hidden
            &:checked ~ .checkmark
                background-color: #54CE84
            &:checked ~ .checkmark:after
                display: block
        .checkmark
            position: absolute
            top: 2px
            left: 0
            height: 15px
            width: 15px
            background-color: #eee
            border-radius: 2px
            &:checked
                background: #54CE84
            &:after
                content: ""
                position: absolute
                display: none
                left: 5px
                top: 2px
                width: 3px
                height: 7px
                border: solid white
                border-width: 0 2px 2px 0
                -webkit-transform: rotate(45deg)
                -ms-transform: rotate(45deg)
                transform: rotate(45deg)           
</style>