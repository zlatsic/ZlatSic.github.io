<template>
    <div id="global-layout">
        <div class="content">
            <component :is="layout"/>
        </div>
        <footer>
            <div class="social">
                <span>Social:</span>
                <a v-for="item in social" :href="item.link" target="blank_">
                    <span :class="['ri-' + item.icon, 'icon']" />
                    <span class="label"> {{ item.label }} </span>
                </a>
            </div>
            <span class="copyright">
                © {{ year }}, Zlatan Sičanica
            </span>
        </footer>
        <cookies />
    </div>
</template>

<script>
export default {
    data: () => {
        return {
	    year: new Date().getFullYear(),
            social: [{
                label: 'GitHub', icon: 'github-line',
                link: 'https://github.com/zlatsic'
            }, {
                label: 'LinkedIn', icon: 'linkedin-box-line',
                link: 'https://www.linkedin.com/in/zlatsic/'
            }, {
                label: 'Twitter', icon: 'twitter-line',
                link: 'https://twitter.com/zlatsic'
            }, {
                label: 'Instagram', icon: 'instagram-line',
                link: 'https://www.instagram.com/zlatsic/'
            }, {
                label: 'YouTube', icon: 'youtube-line',
                link: 'https://www.youtube.com/channel/UCCbEay_pbywwDnoMZzxqaow/featured'
            }]
        };
    },
    computed: {
        layout () {
            if (this.$page.path) {
                if (this.$frontmatter.layout) {
                    return this.$frontmatter.layout
                }
                return 'Layout'
            }
            return 'NotFound'
        }
    }
}
</script>
<style lang="scss">

#global-layout {

    min-height: 100%;
    display: flex;
    flex-direction: column;

    & > .content {
        flex-grow: 1;
    }

    & > footer {
        margin-top: 2rem;
        width: 100%;

        border-top: 1px solid #eaecef;
        box-sizing: border-box;
        padding: 1rem;

        display: flex;
        flex-direction: column;

        & > * {
            margin-bottom: 0.5rem;
        }

        & > .social {
            display: flex;
            & > * {
                margin-right: 0.8rem;
            }

            & > a {
                display: flex;
                align-items: center;

                & > .icon {
                    margin-right: 0.15rem;
                }

                & > .label {
                    @media (max-width: 768px){
                        display: none;
                    }
                }
            }
        }
    }

    /*inherited from the default theme*/
    .content__footer {
	display: none;
    }
}
</style>
