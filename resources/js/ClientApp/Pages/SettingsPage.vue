<template>
    <b-container>
        <div class="settings">
            <div>
                <h1 class="">Settings</h1>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card mb-4">
                        <div class="card-body p-0">
                            <UserDetailsForm />
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card mb-4 mb-md-0">
                        <UserPrivacyForm />
                    </div>
                </div>
            </div>
        </div>
    </b-container>
</template>
<script>
import UserDetailsForm from "../Components/forms/UserDetailsForm.vue";
import UserPrivacyForm from "../Components/forms/UserPrivacyForm.vue";
export default {
    name: "SettingsPage",
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: "User settings",
        titleTemplate: null,
    },
    components: { UserDetailsForm, UserPrivacyForm },
};
</script>
