<template>
<header class="bg-info">
    <b-container>
        <b-row>
            <b-col cols="12">
                <b-navbar toggleable="md" type="light" variant="">
                    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
                    <b-navbar-brand href="#">PUBGS</b-navbar-brand>
                    <b-collapse is-nav id="nav_collapse">
                        <b-navbar-nav class="ml-auto">

                            <!-- <router-view>

                  </router-view> -->

                            <b-nav-item href="/">Home</b-nav-item>
                        </b-navbar-nav>
                        <!-- Right aligned nav items -->
                        <b-navbar-nav>
                            <b-nav-item-dropdown right disabled>
                                <!-- Using button-content slot -->
                                <template slot="button-content">
                                    <em>User</em>
                                </template>
                                <b-dropdown-item href="#" disabled>Profile</b-dropdown-item>
                                <b-dropdown-item href="#" disabled>Signout</b-dropdown-item>
                            </b-nav-item-dropdown>
                        </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
            </b-col>
        </b-row>
    </b-container>
</header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {

        };
    }
};
</script>

<style lang="scss" scoped>

</style>
