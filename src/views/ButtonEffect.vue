<template>
    <div class="buttonEffect">
        <el-row :gutter="20">
            <el-col :span="6">
                <el-card class="box-card shanliangxiaoguo">
                    <div id="shiny-shadow">
                        <button>
                            <span>Hover me</span>
                        </button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card nihongxiaoguo">
                    <div id="neon-btn">
                        <button class="btn one">Hover me</button>
                        <button class="btn two">Hover me</button>
                        <button class="btn three">Hover me</button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card yuanjiaoxiaoguo">
                    <div id="border-btn">
                        <button>Hover me</button>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card jiazaixiaoguo">
                    <div id="loading-btn">
                        <button>
                            <span>Hover me</span>
                        </button>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
</script>
<style>
.buttonEffect {
    padding: 20px 20%;
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}
.el-col {
    border-radius: 4px;
}
.el-card {
    height: 100%;
}
/* 霓虹效果 */
.nihongxiaoguo #neon-btn {
    background: #031628;
    padding: 10px;
    height: 150px;
    padding-bottom: 0;
}

.nihongxiaoguo .btn {
    width: 100%;
    border: 1px solid;
    background-color: transparent;
    text-transform: uppercase; /**文字大写**/
    font-size: 14px;
    padding: 10px 20px;
    font-weight: 300;
    margin-bottom: 10px;
}

.nihongxiaoguo .one {
    color: #4cc9f0;
}

.nihongxiaoguo .two {
    color: #f038ff;
}

.nihongxiaoguo .three {
    color: #b9e769;
}

.nihongxiaoguo .btn:hover {
    color: white;
    border: 0;
}

.nihongxiaoguo .one:hover {
    background-color: #4cc9f0;
    -webkit-box-shadow: 10px 10px 99px 6px rgba(76, 201, 240, 1);
    -moz-box-shadow: 10px 10px 99px 6px rgba(76, 201, 240, 1);
    box-shadow: 10px 10px 99px 6px rgba(76, 201, 240, 1);
}

.nihongxiaoguo .two:hover {
    background-color: #f038ff;
    -webkit-box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
    -moz-box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
    box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
}

.nihongxiaoguo .three:hover {
    background-color: #b9e769;
    -webkit-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
    -moz-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
    box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
}
/* 圆角效果 */
.yuanjiaoxiaoguo #border-btn {
    align-items: center;
    justify-content: center;
    height: 150px;
    display: flex;
    padding: 10px;
    padding-bottom: 0;
}

.yuanjiaoxiaoguo button {
    border: 0;
    border-radius: 10px;
    background: #2ec4b6;
    text-transform: uppercase;
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 15px 30px;
    outline: none;
    position: relative;
    transition: border-radius 3s;
    -webkit-transition: border-radius 3s;
}

.yuanjiaoxiaoguo button:hover {
    border-bottom-right-radius: 50px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
}
/* 加载效果 */
.jiazaixiaoguo #loading-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
}

.jiazaixiaoguo button {
    background: transparent;
    border: 0;
    border-radius: 0;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
    padding: 15px 50px;
    position: relative;
}

.jiazaixiaoguo button:before {
    transition: all 0.8s cubic-bezier(0.7, -0.5, 0.2, 2);
    content: "";
    width: 1%;
    height: 100%;
    background: #ff5964;
    position: absolute;
    top: 0;
    left: 0;
}

.jiazaixiaoguo button span {
    mix-blend-mode: darken;
}

.jiazaixiaoguo button:hover:before {
    background: #ff5964;
    width: 90%;
}
/* 闪亮效果 */
.shanliangxiaoguo #shiny-shadow {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    height: 150px;
    background: #1c2541;
    padding-bottom: 0;
}

.shanliangxiaoguo button {
    border: 2px solid white;
    background: transparent;
    text-transform: uppercase;
    color: white;
    padding: 15px 50px;
    outline: none;
    overflow: hidden;
    position: relative;
}

.shanliangxiaoguo span {
    z-index: 20;
}

.shanliangxiaoguo button:after {
    content: "";
    display: block;
    position: absolute;
    top: -36px;
    left: -100px;
    background: white;
    width: 50px;
    height: 125px;
    opacity: 20%;
    transform: rotate(-45deg);
}

.shanliangxiaoguo button:hover:after {
    left: 120%;
    transition: all 600ms cubic-bezier(0.3, 1, 0.2, 1);
    -webkit-transition: all 600ms cubic-bezier(0.3, 1, 0.2, 1);
}
</style>
