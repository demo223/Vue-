<template>
    <div class="nav-bar">
        <!-- 页面整体上分为3个部分 -->
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="middle">
            <slot name="middle"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
    }
</script>

<style>
    .nav-bar {
        display: flex;
        /* 设置弹性布局 */
        height: 44px;
        line-height: 44px;
        text-align: center;
        box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
    }

    .left,
    .right {
        width: 60px;
        background-color: skyblue;
    }

    .middle {
        /* 在这个布局中除开left和right，
        剩下的就只剩下middle占100% */
        flex: 1;
        background-color: pink;
    }
</style>