<template>
<div>
  <Header />
  <Nav />

  <div class="revize">
    <p>V případě vzniku požáru či úrazu, se vždy hledá jeho příčina, ať už ze strany Policie nebo pojišťovny. Pokud vyšetřování určí,
      že příčinou byla třeba závada na elektroinstalaci, pak následně se pátrá kdo je za to zodpovědný a zda nezanedbal některou ze svých povinností.
      Pojišťovna při neodborné kontrole, neplatné revizi nebo dokonce její absenci, ve většině případů krátí pojistné plnění nebo neuhradí
      vzniklou škodu způsobenou na těchto zařízeních.</p>


    <table>
      <tr>
        <th>Kategorie</th>
        <th>Zařízení</th>
        <th>Předmět revize</th>
        <th>Způsobilá osoba</th>
        <th>Předpis</th>
        <th>Lhůta</th>
        <th>Poslední revize</th>
        <th>Příští revize</th>
        <!-- <th>Zbývá dní</th> -->
      </tr>
      <tr>
        <td rowspan="3"><b>Elektrická zařízení</b></td>
        <td id="elInstal">
          <v-btn to="/revision/Revision_Electroinstalation">Elektroinstalace</v-btn>
        </td>
        <td>Pravidelná revize</td>
        <td>Revizní technik</td>
        <td>ČSN 33 1500</td>
        <td>1x za 5 let</td>
        <td>{{this.electroinstalation}}</td>
        <td>{{this.nextDate}}</td>
        <!-- <td>{{daysTo}}</td> -->
      </tr>
      <tr>
        <td id="lConductor" rowspan="2">
          <v-btn to="/revision/Revision_Conductor">Hromosvod</v-btn>
        </td>
        <td>Vizuální kontrola</td>
        <td>Revizní technik</td>
        <td>ČSN EN 62305-3</td>
        <td>1x za 2 roky</td>
        <td>{{this.Conductor.revLast1}}</td>
        <td>{{this.nextDate}}</td>
      </tr>
      <tr>
        <td>Pravidelná revize</td>
        <td>Revizní technik</td>
        <td>ČSN EN 62305-3</td>
        <td>1x za 4 roky</td>
        <td>{{this.Conductor.revLast2}}</td>
        <td>{{this.nextDate}}</td>
      </tr>

      <tr>
        <td rowspan="10"><b>Požární bezpečnost</b></td>
        <td id="extings" rowspan="2"><v-btn to="/revision/Revision_Extings">Hasící přístroje</v-btn></td>
        <td>Kontrola provozuschopnosti</td>
        <td>Způsobilá osoba</td>
        <td>246/2001 Sb.</td>
        <td>1x za rok</td>
        <td>{{this.Extings.revLast1}}</td>
        <td>{{this.nextDate}}</td>
      </tr>
      <tr>
        <td>Periodická zkouška</td>
        <td>Způsobilá osoba</td>
        <td>246/2001 Sb.</td>
        <td>1x za 5 let</td>
        <td>{{this.Extings.revLast2}}</td>
        <td>{{this.nextDate}}</td>
      </tr>
      <tr>
        <td id="hydrants"><v-btn to="/revision/Revision_Hydrants">Hydranty</v-btn></td>
        <td>Kontrola provozuschopnosti</td>
        <td>Způsobilá osoba</td>
        <td>ČSN 73 0873</td>
        <td>1x za rok</td>
        <td>{{this.Hydrants}}</td>
        <td>{{this.nextDate}}</td>
      </tr>
      <tr>
        <td id="eps" rowspan="3"><v-btn to="/revision/Revision_Eps">Elektronická požární signalizace</v-btn></td>
        <td>Zkoušky činnosti ústředny</td>
        <td>Oprávněná osoba</td>
        <td>246/2001 Sb.</td>
        <td>1x za měsíc</td>
        <td>{{this.Eps.revLast1}}</td>
        <td>{{this.nextDate}}</td>
      </tr>
      <tr>
        <td>Zkoušky činnosti</td>
        <td>Oprávněná osoba</td>
        <td>246/2001 Sb.</td>
        <td>1x za 6 měsíců</td>
        <td>{{this.Eps.revLast2}}</td>
        <td>{{this.nextDate}}</td>
      </tr>
      <tr>
        <td>Kontrola provozuschopnosti</td>
        <td>Způsobilá osoba</td>
        <td>246/2001 Sb.</td>
        <td>1x za rok</td>
        <td>{{this.Eps.revLast3}}</td>
        <td>{{this.nextDate}}</td>
      </tr>
      <tr>
        <td id="shz"><v-btn to="/revision/Revision_Shz">Stabilní hasicí zařízení</v-btn></td>
        <td>Kontrola provozuschopnosti</td>
        <td>Způsobilá osoba</td>
        <td>246/2001 Sb.</td>
        <td>1x za rok</td>
        <td>{{this.Shz}}</td>
        <td>{{this.nextDate}}</td>
      </tr>
      <tr>
        <td id="ventilation"><v-btn to="/revision/Revision_Ventilation">Větrání únikových cest</v-btn></td>
        <!-- Větrání únikových cest, zařízení pro odvod kouře a tepla, požární větrání -->
        <td>Kontrola provozuschopnosti</td>
        <td>Způsobilá osoba</td>
        <td>246/2001 Sb.</td>
        <td>1x za rok</td>
        <td>{{this.Ventilation}}</td>
        <td>{{this.nextDate}}</td>
      </tr>
      <tr>
        <td id="eLighting"><v-btn to="/revision/Revision_Elighting">Nouzové osvětlení</v-btn></td>
        <td>Kontrola provozuschopnosti</td>
        <td>Způsobilá osoba</td>
        <td>246/2001 Sb.</td>
        <td>1x za rok</td>
        <td>{{this.Elighting}}</td>
        <td>{{this.nextDate}}</td>
      </tr>
      <tr>
        <td id="obzpn"><v-btn to="/revision/Revision_Obzpn">Obzpn</v-btn></td>
        <!-- Objekty bez zvýšeného požárního nebezpečí -->
        <td>Kontrola provozuschopnosti</td>
        <td>Způsobilá osoba</td>
        <td>246/2001 Sb.</td>
        <td>1x za rok</td>
        <td>{{this.Obzpn}}</td>
        <td>{{this.nextDate}}</td>
      </tr>

      <tr>
        <td rowspan="4"><b>Zdvihací zařízení</b></td>
        <td id="lifts" rowspan="4"><v-btn to="/revision/Revision_Lifts">Výtahy</v-btn></td>
        <td>Provozní prohlídka</td>
        <td>Dozorce výtahu</td>
        <td>ČSN 27 4002</td>
        <td>1x za 14 dní</td>
        <td>{{this.Lifts.revLast1}}</td>
        <td>{{this.nextDate}}</td>
      </tr>
      <tr>
        <td>Odborná prohlídka</td>
        <td>Způsobilá osoba</td>
        <td>ČSN 27 4002</td>
        <td>1x za 3 měsíce</td>
        <td>{{this.Lifts.revLast2}}</td>
        <td>{{this.nextDate}}</td>
      </tr>
      <tr>
        <td>Odborná zkouška</td>
        <td>Inspekční technik</td>
        <td>ČSN 27 4002</td>
        <td>1x za 3 roky</td>
        <td>{{this.Lifts.revLast3}}</td>
        <td>{{this.nextDate}}</td>
      </tr>
      <tr>
        <td>Inspekční prohlídka</td>
        <td>Inspekční orgán</td>
        <td>ČSN 27 4002</td>
        <td>1x za 6 let</td>
        <td>{{this.Lifts.revLast4}}</td>
        <td>{{this.nextDate}}</td>
      </tr>

      <tr>
        <td rowspan="4"><b>Plynová zařízení</b></td>
        <td id="drp" rowspan="2"><v-btn to="/revision/Revision_Drp">Domovní rozvod plynu</v-btn></td>
        <!-- Domovní rozvod plynu, spotřebiče (např. kotel) -->
        <td>Kontrola</td>
        <td>Oprávněná osoba</td>
        <td>85/1978 Sb.</td>
        <td>1x za rok</td>
        <td>{{this.Drp.revLast1}}</td>
        <td>{{this.nextDate}}</td>
      </tr>
      <tr>
        <td>Provozní revize</td>
        <td>Revizní technik</td>
        <td>85/1978 Sb.</td>
        <td>1x za 3 roky</td>
        <td>{{this.Drp.revLast2}}</td>
        <td>{{this.nextDate}}</td>
      </tr>
      <tr>
        <td id="gasBoiler" rowspan="2"><v-btn to="/revision/Revision_Gasboiler">Plynová kotelna</v-btn></td>
        <td>Kontrola</td>
        <td>Oprávněná osoba</td>
        <td>ČSN 07 0703</td>
        <td>1x za 1 rok</td>
        <td>{{this.Gasboiler.revLast1}}</td>
        <td>{{this.nextDate}}</td>
      </tr>
      <tr>
        <td>Provozní revize</td>
        <td>Revizní technik</td>
        <td>ČSN 07 0703</td>
        <td>1x za 3 roky</td>
        <td>{{this.Gasboiler.revLast2}}</td>
        <td>{{this.nextDate}}</td>
      </tr>

      <tr>
        <td></td>
        <td id="lowPresBoiler" colspan="1"><v-btn to="/revision/Revision_LowPresBoiler"><b>Nízkotlaké kotelny</b></v-btn></td>
        <td>Odborná prohlídka</td>
        <td>Revizní technik</td>
        <td>91/1993 Sb.</td>
        <td>1x za rok</td>
        <td>{{this.LowPresBoiler}}</td>
        <td>{{this.nextDate}}</td>
      </tr>

      <tr>
        <td rowspan="2"></td>
        <td id="chimney" colspan="1" rowspan="2"><v-btn to="/revision/Revision_Chimney"><b>Spalinové cesty (komíny)</b></v-btn></td>
        <td>Kontrola</td>
        <td>Způsobilá osoba</td>
        <td>91/2010 Sb.</td>
        <td>1x za 1 rok</td>
          <td>{{this.Chimney.revLast1}}</td>
          <td>{{this.nextDate}}</td>
      </tr>
      <tr>
        <td>Čištění</td>
        <td>Způsobilá osoba</td>
        <td>91/2010 Sb.</td>
        <td>1x za 1 rok</td>
        <td>{{this.Chimney.revLast2}}</td>
        <td>{{this.nextDate}}</td>
      </tr>

      <tr>
        <td rowspan="3"></td>
        <td id="presureDev" colspan="1" rowspan="3"><v-btn to="/revision/Revision_PresureDev"><b>Tlaková zařízení</b></v-btn></td>
        <td>Provozní revize</td>
        <td>Revizní technik</td>
        <td>ČSN 69 0012</td>
        <td>1x za 1 rok</td>
        <td>{{this.PresureDev.revLast1}}</td>
        <td>{{this.nextDate}}</td>
      </tr>
      <tr>
        <td>Vnitřní revize</td>
        <td>Revizní technik</td>
        <td>ČSN 69 0012</td>
        <td>1x za 5 let</td>
        <td>{{this.PresureDev.revLast2}}</td>
        <td>{{this.nextDate}}</td>
      </tr>
      <tr>
        <td>Zkouška těsnosti</td>
        <td>Revizní technik</td>
        <td>ČSN 69 0012</td>
        <td>po vnitřní revizi</td>
        <td>{{this.PresureDev.revLast3}}</td>
        <td>{{this.nextDate}}</td>
      </tr>
    </table>

  </div>

</div>
</div>
</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'
import axios from 'axios';


export default {
  name: 'Revision',
  data() {
    return {
      electroinstalation: '',
      Conductor: {
        revLast1: '',
        revLast2: ''
      },
      Extings: {
        revLast1: '',
        revLast2: ''
      },
      Hydrants: '',
      Eps: {
        revLast1: '',
        revLast2: '',
        revLast3: ''
      },
      Shz: '',
      Ventilation: '',
      Elighting: '',
      Obzpn: '',
      Lifts: {
        revLast1: '',
        revLast2: '',
        revLast3: '',
        revLast4: ''
      },
      Drp: {
        revLast1: '',
        revLast2: ''
      },
      Gasboiler: {
        revLast1: '',
        revLast2: ''
      },
      LowPresBoiler: '',
      Chimney: {
        revLast1: '',
        revLast2: ''
      },
      PresureDev: {
        revLast1: '',
        revLast2: '',
        revLast3: ''
      },
      revisions: []
    }
  },
  components: {
    Header,
    Nav
  },
  computed: {
    nextDate: function() {
      let numDate = parseInt(this.electroinstalation.substr(0, 4)) + 5
      let numDay = this.electroinstalation.substr(4, 9)
      return numDate + numDay
    },
    daysTo: function() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      // return year + 'a' + month + 'a' + day;
      let restYears = (this.electroinstalation.substr(0, 4) + 5);
      return restYears
    }
  },
  methods: {
    sortData(data) {
      if (item.revTitle === "Electroinstalation") {
        // alert(item.revLast)
        data = item.revLast;
        alert(data);
      }
    }
  },
  mounted() {
    axios.get('http://localhost:8081/revisions')
      .then((response) => {
        this.revisions = response.data;
        // console.log(response.data[3].revLast);
        // this.electroinstalation = response.data[3].revLast;
        console.log(this.revisions);
        this.revisions.forEach( item => {
          if (item.revTitle === "Electroinstalation") {
            this.electroinstalation = item.revLast;
          } else if (item.revTitle === "Conductor") {
            this.Conductor.revLast1 = item.revLast1;
            this.Conductor.revLast2 = item.revLast2;
          } else if (item.revTitle === "Extings") {
            this.Extings.revLast1 = item.revLast1;
            this.Extings.revLast2 = item.revLast2;
          } else if (item.revTitle === "Hydrant") {
            this.Hydrants = item.revLast;
          } else if (item.revTitle === "Eps") {
            this.Eps.revLast1 = item.revLast1;
            this.Eps.revLast2 = item.revLast2;
            this.Eps.revLast3 = item.revLast3;
          } else if (item.revTitle === "Shz") {
            this.Shz = item.revLast;
          } else if (item.revTitle === "Ventilation") {
            this.Ventilation = item.revLast;
          } else if (item.revTitle === "Elighting") {
            this.Elighting = item.revLast;
          } else if (item.revTitle === "Obzpn") {
            this.Obzpn = item.revLast;
          } else if (item.revTitle === "Lifts") {
            this.Lifts.revLast1 = item.revLast1;
            this.Lifts.revLast2 = item.revLast2;
            this.Lifts.revLast3 = item.revLast3;
            this.Lifts.revLast4 = item.revLast4;
          } else if (item.revTitle === "Drp") {
            this.Drp.revLast1 = item.revLast1;
            this.Drp.revLast2 = item.revLast2;
          } else if (item.revTitle === "Gasboiler") {
            this.Gasboiler.revLast1 = item.revLast1;
            this.Gasboiler.revLast2 = item.revLast2;
          } else if (item.revTitle === "LowPresBoiler") {
            this.LowPresBoiler = item.revLast;
          }else if (item.revTitle === "Chimney") {
            this.Chimney.revLast1 = item.revLast1;
            this.Chimney.revLast2 = item.revLast2;
          } else if (item.revTitle === "PresureDev") {
            this.PresureDev.revLast1 = item.revLast1;
            this.PresureDev.revLast2 = item.revLast2;
            this.PresureDev.revLast3 = item.revLast3;
          }
          // alert(this.electroinstalation);
        })

        // for( revision in this.revisions) {
        //   console.log(revision);
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.revize {
  width: 80%;
  height: auto;
  /* overflow: auto; */
  max-height: 600px;
  float: left;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  margin-left: 30px;
}

.revize table {
  width: 85%;
  border-collapse: collapse;
}

.revize td,
.revize th {
  text-align: left;
  padding: 8px;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
  min-width: 100px;
}


/* .revize td:hover:nth-child(even){background-color: #f2f2f2;} */
/* #elInstal, #lConductor, #extings, #hydrants, #eps, #shz, #ventilation, #eLighting, #obzpn, #lifts, #drp, #gasBoiler, #lowPresBoiler, #chimney, #presureDev {
  background-color: #f2f2f2;
} */
.revize th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}


li a {
  line-height: 49px;
  font-size: 20px;
  text-decoration: none;
  display: block;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  margin-top: 0px;
  border: 1px solid black;
  height: 50px;
  background-color: rgba(255, 159, 36, 1);

}

a:hover {
  background-color: green;
  cursor: pointer;
}
</style>
