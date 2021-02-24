<template>
    <div id="global-layout">
        <div class="content">
            <component :is="layout"/>
        </div>
        <footer>
            <div class="social">
                <span>Social:</span>
                <a v-for="item in social" :href="item.link" target="blank_">
                    <span :class="'ri-' + item.icon"i /> {{ item.label }}
                </a>
            </div>
            <span class="copyright">
                © 2021, Zlatan Sičanica
            </span>
        </footer>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            social: [{
                label: 'GitHub', icon: 'github-line',
                link: 'https://github.com/ZlatSic'
            }, {
                label: 'LinkedIn', icon: 'linkedin-box-line',
                link: 'https://www.linkedin.com/in/zlatan-sicanica/'
            }, {
                label: 'Twitter', icon: 'twitter-line',
                link: 'https://twitter.com/zlatsic'
            }, {
                label: 'Instagram', icon: 'instagram-line',
                link: 'https://www.instagram.com/zlatsic/'
            }, {
                label: 'YouTube', icon: 'youtube-line',
                link: 'https://www.youtube.com/channel/UCCbEay_pbywwDnoMZzxqaow/featured'
            }, {
                label: 'Twitch', icon: 'twitch-line',
                link: 'https://www.twitch.tv/zlatsic'
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

                & > span {
                    margin-right: 0.15rem;
                }
            }
        }
    }
}
</style>
