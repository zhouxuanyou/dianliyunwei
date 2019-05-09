<template>
    <div class="shebeitaizhang">
        <el-row>
            <el-col :span="8"><div class="grid-content bg-purple">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <el-row>
                            <el-col :span="12"><div class="grid-content bg-purple">
                                <el-input
                                        placeholder="请输入站房进行搜索"
                                        v-model="filterText"

                                >
                                </el-input>
                            </div></el-col>
                            <el-col :span="12"><div class="grid-content bg-purple-light">
                                <el-button type="primary" icon="el-icon-edit">新增</el-button>
                            </div></el-col>
                        </el-row>


                    </div>
                    <el-tree
                            class="filter-tree"
                            :data="data"
                            :props="defaultProps"
                            :filter-node-method="filterNode"
                            ref="tree2"
                            accordion
                            @node-click="handleNodeClick"
                    >
                    </el-tree>
                </el-card>
            </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple-light">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <el-row>
                            <el-col :span="12"><div class="grid-content bg-purple">
                                <el-input
                                        placeholder="请输入机柜进行搜索"
                                        v-model="filterText"

                                >
                                </el-input>
                            </div></el-col>
                            <el-col :span="12"><div class="grid-content bg-purple-light">
                                <el-button type="primary" icon="el-icon-edit">新增</el-button>
                            </div></el-col>
                        </el-row>
                    </div>
                    <el-tree
                            class="filter-tree"
                            :data="data"
                            :props="defaultProps"
                            :filter-node-method="filterNode"
                            ref="tree2"
                            accordion
                            @node-click="handleNodeClick"
                    >
                    </el-tree>
                </el-card>
            </div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <el-row>
                            <el-col :span="12"><div class="grid-content bg-purple">
                                <el-input
                                        placeholder="请输入设备进行搜索"
                                        v-model="filterText"

                                >
                                </el-input>
                            </div></el-col>
                            <el-col :span="12"><div class="grid-content bg-purple-light">
                                <el-button type="primary" icon="el-icon-edit">新增</el-button>
                            </div></el-col>
                        </el-row>
                    </div>
                    <el-tree
                            class="filter-tree"
                            :data="data"
                            :props="defaultProps"
                            :filter-node-method="filterNode"
                            ref="tree2"
                            accordion
                            @node-click="handleNodeClick"
                    >
                    </el-tree>
                </el-card>
            </div></el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "Shebeitaizhang",
        watch: {
            filterText(val) {
                this.$refs.tree2.filter(val);
            }
        },

        methods: {
            filterNode(value, data) {
                if (!value) return true;
                return data.label.indexOf(value) !== -1;
            }
        },

        data() {
            return {
                filterText: '',
                data: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        }

    }
</script>

<style scoped lang="less">
    .shebeitaizhang{
        height: 100%;
        /*.text {*/
            /*font-size: 14px;*/
        /*}*/

        /*.item {*/
            /*margin-bottom: 18px;*/
        /*}*/

        .clearfix:before,
        .clearfix:after {
            display: table;
            content: "";
        }
        .clearfix:after {
            clear: both
        }

        .box-card {
            /*width: 480px;*/
            margin: 20px;
        }
    }
</style>