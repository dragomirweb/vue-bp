<template>
<section>
    <b-container>
        <b-row>
            <b-col v-if="show==true" cols="12">
                <h1>{{ greeting }}</h1>
            </b-col>
            <b-col class="mt-2" cols="12" v-if="show==true">
                <b-form class="mt-5 mb-5" @submit="onSubmit" inline>
                    <b-form-input class="w-75 mr-3" id="player-name" type="text" v-model="form.player" required placeholder="Player name">
                    </b-form-input>
                    <b-form-group class="mr-3" id="InputExample" label-for="regions">
                        <b-form-select id="regions" :options="region" required v-model="form.region">
                        </b-form-select>
                    </b-form-group>
                    <b-button type="submit" variant="primary">
                        Submit
                    </b-button>
                </b-form>
                <b-alert variant="danger" dismissible :show="playerError" @dismissed="playerError=false">
                    Player was not found !
                </b-alert>
            </b-col>
            <b-col class="is-flex justify-content-end mt-5" cols="12" v-if="show==false">
                <b-button v-on:click="checkAnotherPlayer" variant="primary">Search for another player</b-button>
            </b-col>
        </b-row>
    </b-container>
    <b-container>
        <b-row>
            <b-col v-if="playerData!=''" cols="12">
                <h5 class="text-success">Player found "{{ playerData.attributes.name }}" </h5>
            </b-col>
            <b-col class="is-flex mt-5" v-if="playerData!=''" cols="12">
                <div class="w-25 mr-5">
                    <b-img src="https://cdn.wccftech.com/wp-content/uploads/2017/10/WCCFPUBG-740x429.jpg" fluid alt="Responsive image" />
                </div>
                <div class="w-75">
                    <table class="table">
                        <tbody>
                            <tr>
                                <th scope="row">Player name</th>
                                <td>{{ playerData.attributes.name }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Stats</th>
                                <td v-if="playerData.attributes.stats!=null">{{ playerData.attributes.stats }}</td>
                                <td v-if="playerData.attributes.stats==null">No stats to show</td>
                            </tr>
                            <tr>
                                <th scope="row">Updated</th>
                                <td>{{ playerData.attributes.updatedAt | moment("dddd, MMMM Do YYYY") }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </b-col>
            <b-col v-if="playerData!=''" class="is-flex mt-4" cols="12">
                <div class="w-25">&nbsp;</div>
                <b-table class="w-75" hover :items="playerData.relationships.matches.data"></b-table>
            </b-col>
        </b-row>
    </b-container>
</section>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            form: {
                player: '',
                region: null
            },
            playerError: false,
            region: [{
                    text: 'Select region',
                    value: null
                },
                {
                    text: 'Xbox Asia',
                    value: 'xbox-as'
                }, {
                    text: 'Xbox Europe',
                    value: 'xbox-eu'
                }, {
                    text: 'Xbox NA',
                    value: 'xbox-na'
                }, {
                    text: 'Xbox Oceania',
                    value: 'xbox-oc'
                }, {
                    text: 'PC KR/JP',
                    value: 'pc-krjp'
                }, {
                    text: 'PC Japan',
                    value: 'pc-jp'
                }, {
                    text: 'PC NA',
                    value: 'pc-na'
                }, {
                    text: 'PC Europe',
                    value: 'pc-eu'
                }, {
                    text: 'PC Russia',
                    value: 'pc-ru'
                }, {
                    text: 'PC Oceania',
                    value: 'pc-oc'
                }, {
                    text: 'PC Kakao',
                    value: 'pc-kakao'
                }, {
                    text: 'PC SE Asia',
                    value: 'pc-sea'
                }, {
                    text: 'PC SA',
                    value: 'pc-sa'
                }, {
                    text: 'PC AS',
                    value: 'pc-as'
                }, {
                    text: 'PC Tournament',
                    value: 'pc-tournament'
                }
            ],
            show: true,
            greeting: 'Search for player',
            playerData: ''
        };
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault();
            this.playerError = false;
            this.axios.get('https://api.pubg.com/shards/' + this.form.region + '/players?filter[playerNames]=' + this.form.player, {
                    headers: {
                        'Authorization': 'Bearer ' + process.env.DEV.api_key,
                        'Accept': 'application/vnd.api+json'
                    }
                })
                .then(r => this.playerData = r.data.data[0])
                .then(r => this.show = !this.show)
                .catch((err) => this.playerError = true)
        },
        checkAnotherPlayer() {
            this.show = !this.show;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
    margin-top: 50px;
}

.is-flex {
    display: flex;
}

#player-name {
    min-width: 70%;
}
</style>
