<template>
<div class="cookies-dialogue" v-if="!cookiesDismissed">
    <span>This website uses cookies to analyze user traffic.</span>
    <button v-on:click="dismiss">Dismiss</button>
</div>
</template>
<script>
export default {
    data: function () {
	try {
	    return { cookiesDismissed: localStorage.getItem('cookiesDismissed') }
	} catch (e) {
	    console.log('Failed to access localStorage', e)
	    return { cookiesDismissed: false }
	}
    },
    methods: {
        dismiss: function(ev) {
            if (typeof localStorage) {
                localStorage.setItem('cookiesDismissed', true);
                this.cookiesDismissed = true;
            }
        }
    }
};
</script>
<style lang="scss">

$color-maroon: #660018;

.cookies-dialogue {
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
</style>
