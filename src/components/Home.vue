<template>
<section>
    <b-container>
        <b-row>
            <b-col cols="12">
                <h1>{{ greeting }}</h1>
            </b-col>
            <b-col cols="12">
                <b-form class="mt-5 mb-5" @submit="onSubmit" v-if="show=true" inline>
                    <b-form-group class="mr-4" id="InputPlayerName" label-for="playerName">
                        <b-form-input id="player-name" type="text" v-model="form.player" required placeholder="Player name">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group class="mr-4" id="InputExample" label-for="regions">
                        <b-form-select id="regions" :options="region" required v-model="form.region">
                        </b-form-select>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Submit</b-button>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col cols="12">
          <h2>test</h2>
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
            region: [{
                    text: 'Select One',
                    value: null
                },
                'xbox-as', 'xbox-eu', 'xbox-na', 'xbox-oc', 'pc-krjp', 'pc-jp', 'pc-na', 'pc-eu', 'pc-ru', 'pc-oc', 'pc-kakao', 'pc-sea', 'pc-sa', 'pc-as', 'pc-tournament'
            ],
            show: true,
            greeting: 'Search for player',
            playerData: []
        };
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault();
            // alert(this.form.player + ' ' + this.form.region);
            
            this.axios.get('https://api.pubg.com/shards/' + this.form.region + '/players?filter[playerNames]=' + this.form.player, 
            {
              headers: {
                'Authorization': 'Bearer ' + process.env.DEV.api_key,
                'Accept': 'application/vnd.api+json'
            }})
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
    margin-top: 50px;
}

#player-name {
    min-width: 40vw;
}
</style>
