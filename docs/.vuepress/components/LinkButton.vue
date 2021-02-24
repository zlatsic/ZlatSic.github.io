<template>
    <a class="link-button" :href="path" target="_blank">
        <span class="ri-download-2-fill" /> 
        <span class="label">{{ label }}</span>
    </a>
</template>
<script>
export default {
    props: {
        label: String,
        path: String,
    }
};
</script>
<style lang="scss">

$color-maroon: #660018;

.link-button {
    margin: auto;
    background-color: $color-maroon;
    font-size: 1rem;
    color: #fff;
    padding: 0.3rem 0.7rem;
    border-radius: 4px;
    transition: background-color 0.1s ease;
    font-weight: 500;
    display: flex;
    align-items: baseline;
    justify-content: space-around;
    width: fit-content;

    /* !important because default theme overrides */
    text-decoration-line: none !important;
    text-decoration: none !important;

    &:hover {
        cursor: pointer;
        background-color: lighten($color-maroon, 5%);
    }

    & > .label {
        margin-left: 0.5rem;
    }
}
</style>
