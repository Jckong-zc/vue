(function (...modules) {
    console.log(modules)
    let Vue = modules[0]
    let Vuex = modules[1]
    let Cp = modules[2]
})(
    function () {
        let Vue = "vue"
        return Vue
    },
    function () {
        let Vuex = "vuex"
        return Vuex
    },
    function () {
        let Cp = "cp"
        return Cp
    }
)