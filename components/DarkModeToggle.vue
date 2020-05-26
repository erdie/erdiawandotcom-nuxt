<template>
    <div class="dark-mode-toggle">
        <select v-model="$colorMode.preference">
            <option value="system">💻 System</option>
            <option value="light">☀️ Light</option>
            <option value="dark">🌙 Dark</option>
        </select>
    </div>
</template>

<style lang="sass">
    .dark-mode-toggle
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        margin-right: 20px
        select
            -webkit-appearance: none
            appearance: none
            background-color: transparent
            color: white
            outline: none
            border-radius: 30px
            padding: 0px 10px 3px 10px
            transition: 0.3s
            border: 1px solid rgba(222, 222, 222, 0.2)
            option
                padding: 10px 20px
        select:hover
            background-color: rgba(255, 255, 255, 0.1)
            transition: 0.3s
</style>
