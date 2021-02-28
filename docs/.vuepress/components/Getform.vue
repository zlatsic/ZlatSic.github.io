<template>
<form action="https://getform.io/f/4d546ce1-b809-43a3-8791-ae333c911bd0" method="POST">

    <div class="field">
        <span>Name</span>
        <input type="text" name="name">
    </div>
    <div class="field">
        <span>Email</span>
        <input type="text" name="email">
    </div>
    <div class="field">
        <span>Message</span>
        <textarea name="message" rows="10"></textarea>
    </div>
    <div class="button-container">
        <button type="submit">Send</button>
    </div>

</form>
</template>

<style lang="scss">
form {
    display: flex;
    flex-direction: column;

    & > * {
        margin-top: 0.5rem;
    }

    & > .field {
        display: flex;
        flex-direction: column;

        & > input, & > textarea {
            resize: none;
            max-width: 30rem;
        }
    }

    & > .button-container {

        button {
            margin: auto;
        }
    }
}
</style>
