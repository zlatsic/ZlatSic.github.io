<template>
<div class="wrapper">
    <div class="cookies-dialogue" v-if="!cookiesDismissed">
        <span>This website uses cookies to analyze user traffic. {{ cookiesDismissed }}</span>
        <button v-on:click="dismiss">Dismiss</button>
    </div>
</div>
</template>
<script>
export default {
    data: function () {
	let cookiesDismissed = false;
	return { cookiesDismissed: cookiesDismissed };
    },
    mounted: function() {
        if (typeof window !== 'undefined')
            try {
                this.cookiesDismissed = JSON.parse(
                    localStorage.getItem('cookiesDismissed'));
            } catch (e) {
                console.warn('Failed to access localStorage', e);
            }
    },
    methods: {
        dismiss: function(ev) {
            this.cookiesDismissed = true;
            if (typeof window !== 'undefined')
                try {
                    localStorage.setItem('cookiesDismissed', true);
                } catch (e) {
                    console.warn('Failed to access localStorage', e);
                }
        }
    }
};
</script>
<style lang="scss">

$color-maroon: #660018;

.wrapper {

    & > .cookies-dialogue {
        position: fixed;
        bottom: 1rem;
        left: 50%;
        transform: translate(-50%, 0%);
        z-index: 1;
        background-color: white;
        width: fit-content;
        border-radius: 5px;
        border: 1.5px solid #660018;
        padding: 0.5rem;

        & > button {
            margin-left: 1rem;

            background-color: $color-maroon;
            color: #fff;
            padding: 0.1rem 0.4rem;
            border-radius: 4px;
            transition: background-color 0.1s ease;
            font-weight: 500;

            &:hover {
                background-color: lighten($color-maroon, 5%);
                cursor: pointer;
            }
        }
    }
}
</style>
