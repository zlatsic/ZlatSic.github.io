<template>
    <div class="blog-view">
        <router-link v-for="post in posts" :to="post.path">
            <div class="post">
                <div class='title-with-excerpt'>
                    <div class="title">{{ post.title }}</div>
                    <div class="excerpt">{{ post.frontmatter.excerpt }}</div>
                </div>
                <div class="date">
                    {{ new Date(post.frontmatter.date).toLocaleDateString() }}
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
        };
    },
    mounted() {
        this.$site.pages.forEach(post => {
            if (post.path.match(/^\/blog\/.+/)) {
                this.posts.push(post)
            }
        })
        this.posts.sort((post1, post2) => {
            const date1 = post1.frontmatter.date;
            const date2 = post2.frontmatter.date;

            if (date1 > date2)
                return -1;
            if (date2 < date1)
                return 1;
            return 0;
        })
    }
}
</script>
<style lang="scss">

.blog-view {
    margin: auto;
    width: 720px;
    & > a {
        & > .post {
            margin: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;

            & > .title-with-excerpt {
                & > .title {
                    font-size: 2rem;
                    font-weight: 450;
                    margin-bottom: 5px;
                }
                & > .excerpt {
                   font-size: 10pt; 
                   font-weight: 300;
                }
            }
            & > .date {
                font-size: 8pt;
            }
        }
    }
}

</style>
