<template>
    <div class="porfolio-view">
        <router-link v-for="post in posts" :to="post.path">
            <div class="post-card">
                <img class="thumbnail" :src="post.frontmatter.thumbnail">
                <div class="page-detail">
                    <div class="page-title">{{ post.title }}</div>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            posts: []
        }
    },
    mounted() {
        this.$site.pages.forEach(post => {
            if (post.path.match(/^\/portfolio\/.+/)) {
                this.posts.push(post)
            }
        })
        this.posts.sort(
            (post1, post2) => post2.frontmatter.id - post1.frontmatter.id)
    }
}
</script>
<style lang="scss">
.porfolio-view {
    display: flex; 
    align-content: space-around;
    justify-content: center;
    flex-wrap: wrap;

    & > a {

        & > .post-card {
            width: 12rem;
            margin: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;

            & > .thumbnail {
                border-radius: 5px;
                width: 100%;
                height: 6rem;
                object-fit: cover;
                border: 1px solid #660018;
            }
        }
    }

}
</style>
