<template>
    <div class="">
        <v-select
            @input="fetchStates"
            v-model="selectedCountry"
            :options="optionsCountry"
            label="name"
            placeholder="Pais"
            :filterable="false"
            :searchable="false"
            :loading="loading"
            :multiple="false"
        >
            <template slot="option" slot-scope="option">
                {{ option.name }}
            </template>
            <template slot="selected-option" slot-scope="option">
                {{ option.name }}
            </template>
            <template #no-options="{ search, searching, loading }">
                Search more specifically
            </template>
        </v-select>
        {{ selectedCountry }}
        <hr />
        <!-- @input="updateValue($event)"
        <input :value="value" v-on:input="updateValue($event.target.value)" />
        -->
        <!---->
        <v-select
            @input="fetchCities"
            v-model="selectedState"
            :options="optionsState"
            label="name"
            placeholder="Provincia"
            :filterable="false"
            :searchable="false"
            :loading="loading"
            :multiple="false"
        >
            <template slot="option" slot-scope="option">
                {{ option.name }}
            </template>
            <template slot="selected-option" slot-scope="option">
                {{ option.name }}
            </template>
            <template #no-options="{ search, searching, loading }">
                Search more specifically
            </template>
        </v-select>
        {{ selectedState }}
        <hr />
        <!---->
        <!---->
        <v-select
            @input="emitLocation"
            v-model="selectedCity"
            :options="optionsCity"
            label="name"
            placeholder="Ciudad/Localidad"
            :filterable="true"
            :searchable="true"
            :loading="loading"
            :multiple="false"
        >
            <template slot="option" slot-scope="option">
                {{ option.name }}
            </template>
            <template slot="selected-option" slot-scope="option">
                {{ option.name }}
            </template>
            <template #no-options="{ search, searching, loading }">
                Search more specifically
            </template>
        </v-select>
        {{ selectedCity }}
        <hr />
        <!---->
    </div>
</template>
<script>
export default {
    name: "LocationPartialForm",
    props: ["value", "entity"],
    data() {
        return {
            loading: false,
            optionsCountry: [],
            selectedCountry: this.entity?.country || "",
            optionsState: [],
            selectedState: this.entity?.state || "",
            optionsCity: [],
            selectedCity: this.entity?.city || "",
        };
    },
    watch: {},
    computed: {
        computedValue: {
            get() {
                return this.value;
            },
            set(newValue) {
                return newValue;
            },
        },
    },
    methods: {
        updateValue: function (value) {
            //this.$emit("input", value);
        },
        async fetchCountries(e) {
            //console.log(e);
            this.loading = true;
            const res = await axios.get("/api/fetchCountries");
            this.optionsCountry = res.data;
            this.loading = false;
        },
        async fetchStates(e) {
            this.emitLocation();
            if (!this.selectedCountry) {
                this.resetOptions();
                return;
            }
            this.loading = true;
            const res = await axios.get(
                "/api/fetchStates?parent_id=" + this.selectedCountry.id
            );
            this.optionsState = res.data;
            this.loading = false;
        },
        async fetchCities(e) {
            console.log(e);
            this.emitLocation();
            if (!this.selectedState) {
                this.resetOptions();
                return;
            }
            this.loading = true;
            const res = await axios.get(
                "/api/fetchCities?parent_id=" + this.selectedState.id
            );
            this.optionsCity = res.data;
            this.loading = false;
        },
        resetOptions() {
            this.optionsCity = [];
            this.selectedCity = "";
            this.optionsState = [];
            this.selectedState = "";
            this.emitLocation();
        },
        emitLocation() {
            this.$emit("locationChanged", {
                selectedCountry: this.selectedCountry,
                selectedState: this.selectedState,
                selectedCity: this.selectedCity,
            });
        },
    },
    mounted() {
        this.fetchCountries();
    },
};
</script>
<style scoped>
.location_search input::-webkit-calendar-picker-indicator {
    display: none !important;
}
.location_search ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #bdbdbd !important;
    opacity: 1 !important; /* Firefox */
}

.location_search :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #bdbdbd !important;
}

.location_search ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #bdbdbd !important;
}
div.vs__actions {
    cursor: pointer !important;
}
>>> {
    --vs-colors--lightest: rgba(60, 60, 60, 0.26);
    --vs-colors--light: rgba(60, 60, 60, 0.5);
    --vs-colors--dark: #333;
    --vs-colors--darkest: rgba(0, 0, 0, 0.15);

    /* Search Input */
    --vs-search-input-color: inherit;
    --vs-search-input-placeholder-color: inherit;

    /* Font */
    --vs-font-size: 1rem;
    --vs-line-height: 1.4;

    /* Disabled State */
    --vs-state-disabled-bg: rgb(248, 248, 248);
    --vs-state-disabled-color: var(--vs-colors--light);
    --vs-state-disabled-controls-color: var(--vs-colors--light);
    --vs-state-disabled-cursor: not-allowed;

    /* Borders */
    --vs-border-color: var(--vs-colors--lightest);
    --vs-border-width: 1px;
    --vs-border-style: solid;
    --vs-border-radius: 4px;

    /* Actions: house the component controls */
    --vs-actions-padding: 4px 6px 0 3px;

    /* Component Controls: Clear, Open Indicator */
    --vs-controls-color: var(--vs-colors--light);
    --vs-controls-size: 1;
    --vs-controls--deselect-text-shadow: 0 1px 0 #fff;

    /* Selected */
    --vs-selected-bg: #f0f0f0;
    --vs-selected-color: var(--vs-colors--dark);
    --vs-selected-border-color: var(--vs-border-color);
    --vs-selected-border-style: var(--vs-border-style);
    --vs-selected-border-width: var(--vs-border-width);

    /* Dropdown */
    --vs-dropdown-bg: #fff;
    --vs-dropdown-color: inherit;
    --vs-dropdown-z-index: 1000;
    --vs-dropdown-min-width: 160px;
    --vs-dropdown-max-height: 350px;
    --vs-dropdown-box-shadow: 0px 3px 6px 0px var(--vs-colors--darkest);

    /* Options */
    --vs-dropdown-option-bg: #000;
    --vs-dropdown-option-color: var(--vs-dropdown-color);
    --vs-dropdown-option-padding: 3px 20px;

    /* Active State */
    --vs-dropdown-option--active-bg: #5897fb;
    --vs-dropdown-option--active-color: #fff;

    /* Deselect State */
    --vs-dropdown-option--deselect-bg: #fb5858;
    --vs-dropdown-option--deselect-color: #fff;

    /* Transitions */
    --vs-transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);
    --vs-transition-duration: 150ms;
}
</style>
