<template>
<div>
    <h1>当前的和为：{{$store.state.sum}}</h1>
    <h3>当前求和放大10倍：{{$store.getters.bigData}}</h3>
    <h3>我在{{xuexiao}}, 学习{{xueke}}</h3>
    <h3>人员列表的总人数为{{personsList.length}}</h3>

    <select name="" id="" v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>

    </select>
    <button @click="add">+</button>
    <button @click="dec">-</button>
    <button @click="addOdd">奇数相加</button>
    <button @click="addWait">等会再加</button>
</div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
    name:"MyCount",
    data() {
        return {
            n:1, // 当前选择
            // sum:0 // cur_sum, 再state中 修改
            
        }
    },
    computed: {
        ...mapState({xuexiao:"schoolName", xueke:"className"}),
        ...mapGetters({}),
        personsList() {
            return this.$store.state.personsList;
        }
    },
    methods: {
        add() {
            // dispatch
            this.$store.dispatch('a_add', this.n);
        },
        dec () {
            // this.sum -= this.n;
            this.$store.dispatch('a_dec', this.n);

        },
        addOdd() {
            // if (this.sum % 2 === 1) {
            //     this.sum += this.n;
            // }
            this.$store.dispatch('a_addOdd', this.n);

        },
        addWait() {
            // setTimeout(()=>{
            //     this.sum += this.n;
            // },500)
            this.$store.dispatch('a_addWait', this.n)
        }
    },
}
</script>

<style lang="css">
    button {
        margin-left: 15px;
    }
</style>
