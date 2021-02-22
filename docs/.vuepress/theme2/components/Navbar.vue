<template>
    <div class="navigation">
        <router-link v-for="navItem in $site.themeConfig.nav"
                     :to="navItem.link">
            <div class="item">
                {{navItem.text}} 
            </div>
        </router-link>
    </div>    
</template>
<script>
</script>
<style lang="scss">

@mixin underlined-item {
    & > .item {
        border-bottom: 1.5px solid white;
    }
}

.navigation {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    border-bottom: 1px solid #aaaaaa;

    & > * {
        margin-right: 10px;
    }

    & > a {

        color: white;
        text-decoration: none;

        & > .item {
            border: 1px solid transparent;
        }

        &.router-link-active {
            @include underlined-item;
        }

        &:first-child {
            &.router-link-active {
                & > .item {
                    border-bottom: 1px solid transparent;
                }
            }

            &.router-link-exact-active {
                @include underlined-item;
            }
        }
    }
}
</style>
