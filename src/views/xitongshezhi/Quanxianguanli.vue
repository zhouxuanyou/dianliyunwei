<template>
    <div class="quanxianguanli">
        <el-transfer v-model="value" :data="data"></el-transfer>
    </div>
</template>

<script>
    export default {
        name: "Quanxianguanli",
        data() {
            const generateData = _ => {
                const data = [];
                for (let i = 1; i <= 15; i++) {
                    data.push({
                        key: i,
                        label: `备选项 ${ i }`,
                        disabled: i % 4 === 0
                    });
                }
                return data;
            };
            return {
                data: generateData(),
                value: [1, 4]
            };
        }
    }
</script>

<style scoped lang="less">
    .quanxianguanli{
        text-align: start;
        height: 100%;
    }
</style>