<template>
    <div class="container">
        <Navbar />
        <div class="content">
            <Content />
        </div>
    </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'

export default {
    data () {
        return {}
    },
    components: {
        Navbar
    }
}
</script>
<style lang='scss'>
body {
    margin: 0px;
    background-color: #33000c;
    color: white;

    .container {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;

        & > .content {

            overflow: auto;
            width: 800px;

            img {
                max-width: 100%;
            }

            a {
                color: white;
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }

            h1, h2, h3, h4, h5, h6 {
                & > a {
                    color: transparent;
                }

                &:hover > a {
                    color: white;
                }
            }
        }
    }
};
</style>
