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
      <!-- <tr>
        <th>Předmět revize</th>
        <th>Poslední revize</th>
        <th>Příští revize</th>
      </tr> -->
      <!-- <tr v-for="revision in revisions">
        <td>{{ revision.revTitle }}</td>
        <td>{{ revision.revLast }}</td>
        <td>{{ revision.revNext }}</td>
      </tr> -->
    </table>

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
      </tr>
      <tr>
        <td rowspan="3"><b>Elektrická zařízení</b></td>
        <td id="elInstal">Elektroinstalace</td>
        <td>Pravidelná revize</td>
        <td>Revizní technik</td>
        <td>ČSN 33 1500</td>
        <td>1x za 5 let</td>
      </tr>
      <tr>
        <td id="lConductor" rowspan="2">Hromosvod</td>
        <td>Vizuální kontrola</td>
        <td>Revizní technik</td>
        <td>ČSN EN 62305-3</td>
        <td>1x za 2 roky</td>
      </tr>
      <tr>
        <td>Pravidelná revize</td>
        <td>Revizní technik</td>
        <td>ČSN EN 62305-3</td>
        <td>1x za 4 roky</td>
      </tr>

      <tr>
        <td rowspan="10"><b>Požární bezpečnost</b></td>
        <td id="extings" rowspan="2">Hasící přístroje</td>
        <td>Kontrola provozuschopnosti</td>
        <td>Způsobilá osoba</td>
        <td>246/2001 Sb.</td>
        <td>1x za rok</td>
      </tr>
      <tr>
        <td>Periodická zkouška</td>
        <td>Způsobilá osoba</td>
        <td>246/2001 Sb.</td>
        <td>1x za 5 let</td>
      </tr>
      <tr>
        <td id="hydrants" >Hydranty</td>
        <td>Kontrola provozuschopnosti</td>
        <td>Způsobilá osoba</td>
        <td>ČSN 73 0873</td>
        <td>1x za rok</td>
      </tr>
      <tr>
        <td id="eps" rowspan="3">Elektronická požární signalizace</td>
        <td>Zkoušky činnosti ústředny</td>
        <td>Oprávněná osoba</td>
        <td>246/2001 Sb.</td>
        <td>1x za měsíc</td>
      </tr>
      <tr>
        <td>Zkoušky činnosti</td>
        <td>Oprávněná osoba</td>
        <td>246/2001 Sb.</td>
        <td>1x za 6 měsíců</td>
      </tr>
      <tr>
        <td>Kontrola provozuschopnosti</td>
        <td>Způsobilá osoba</td>
        <td>246/2001 Sb.</td>
        <td>1x za rok</td>
      </tr>
      <tr>
        <td id="shz">Stabilní hasicí zařízení</td>
        <td>Kontrola provozuschopnosti</td>
        <td>Způsobilá osoba</td>
        <td>246/2001 Sb.</td>
        <td>1x za rok</td>
      </tr>
      <tr>
        <td id="ventilation">Větrání únikových cest, zařízení pro odvod kouře a tepla, požární větrání</td>
        <td>Kontrola provozuschopnosti</td>
        <td>Způsobilá osoba</td>
        <td>246/2001 Sb.</td>
        <td>1x za rok</td>
      </tr>
      <tr>
        <td id="eLighting">Nouzové osvětlení</td>
        <td>Kontrola provozuschopnosti</td>
        <td>Způsobilá osoba</td>
        <td>246/2001 Sb.</td>
        <td>1x za rok</td>
      </tr>
      <tr>
        <td id="obzpn">Objekty bez zvýšeného požárního nebezpečí</td>
        <td>Kontrola provozuschopnosti</td>
        <td>Způsobilá osoba</td>
        <td>246/2001 Sb.</td>
        <td>1x za rok</td>
      </tr>

      <tr>
        <td rowspan="4"><b>Zdvihací zařízení</b></td>
        <td id="lifts" rowspan="4">Výtahy</td>
        <td>Provozní prohlídka</td>
        <td>Dozorce výtahu</td>
        <td>ČSN 27 4002</td>
        <td>1x za 14 dní</td>
      </tr>
      <tr>
        <td>Odborná prohlídka</td>
        <td>Způsobilá osoba</td>
        <td>ČSN 27 4002</td>
        <td>1x za 3 měsíce</td>
      </tr>
      <tr>
        <td>Odborná zkouška</td>
        <td>Inspekční technik</td>
        <td>ČSN 27 4002</td>
        <td>1x za 3 roky</td>
      </tr>
      <tr>
        <td>Inspekční prohlídka</td>
        <td>Inspekční orgán</td>
        <td>ČSN 27 4002</td>
        <td>1x za 6 let</td>
      </tr>

      <tr>
        <td rowspan="4"><b>Plynová zařízení</b></td>
        <td id="drp" rowspan="2">Domovní rozvod plynu, spotřebiče (např. kotel)</td>
        <td>Kontrola</td>
        <td>Oprávněná osoba</td>
        <td>85/1978 Sb.</td>
        <td>1x za rok</td>
      </tr>
      <tr>
        <td>Provozní revize</td>
        <td>Revizní technik</td>
        <td>85/1978 Sb.</td>
        <td>1x za 3 roky</td>
      </tr>
      <tr>
        <td id="gasBoiler" rowspan="2">Plynová kotelna</td>
        <td>Kontrola</td>
        <td>Oprávněná osoba</td>
        <td>ČSN 07 0703</td>
        <td>1x za 1 rok</td>
      </tr>
      <tr>
        <td>Provozní revize</td>
        <td>Revizní technik</td>
        <td>ČSN 07 0703</td>
        <td>1x za 3 roky</td>
      </tr>

      <tr>
        <td id="lowPresBoiler" colspan="2"><b>Nízkotlaké kotelny</b></td>
        <td>Odborná prohlídka</td>
        <td>Revizní technik</td>
        <td>91/1993 Sb.</td>
        <td>1x za rok</td>
      </tr>

      <tr>
        <td id="chimney" colspan="2" rowspan="2"><b>Spalinové cesty (komíny)</b></td>
        <td>Kontrola</td>
        <td>Způsobilá osoba</td>
        <td>91/2010 Sb.</td>
        <td>1x za 1 rok</td>
      </tr>
      <tr>
        <td>Čištění</td>
        <td>Způsobilá osoba</td>
        <td>91/2010 Sb.</td>
        <td>1x za 1 rok</td>
      </tr>

      <tr>
        <td id="presureDev" colspan="2" rowspan="3"><b>Tlaková zařízení</b></td>
        <td>Provozní revize</td>
        <td>Revizní technik</td>
        <td>ČSN 69 0012</td>
        <td>1x za 1 rok</td>
      </tr>
      <tr>
        <td>Vnitřní revize</td>
        <td>Revizní technik</td>
        <td>ČSN 69 0012</td>
        <td>1x za 5 let</td>
      </tr>
      <tr>
        <td>Zkouška těsnosti</td>
        <td>Revizní technik</td>
        <td>ČSN 69 0012</td>
        <td>po vnitřní revizi</td>
      </tr>
    </table>
    <ModalRevision />
  </div>

    </div>
  </div>

</template>

<script>
import Header from './Header.vue'
import Nav from './Nav.vue'
import axios from 'axios';
import ModalRevision from './ModalRevision.vue';

export default {
  name: 'Revize',
  data () {
    return {
      // revisions: []
    }
  },
  components: {
    Header,
    Nav,
    ModalRevision
  },
  mounted() {
      axios.get('http://localhost:8081/revisions')
      .then((response) => {
        console.log(response.data);
        this.revisions = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.revizeNav {
  width: 10%;
  height: 500px;
  border: 1px solid black;
  float: left;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;

  box-sizing: border-box;

  border-bottom: 1px solid black;


}

.revize table {
  width: 70%;
  border-collapse: collapse;
}
.revize td, .revize th {
  text-align: left;
  padding: 8px;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
}

/* .revize tr:nth-child(even){background-color: #f2f2f2;} */

/* .revize tr:hover {background-color: #ddd;} */
/* .revize td:hover:nth-child(even){background-color: #f2f2f2;} */
#elInstal, #lConductor, #extings, #hydrants, #eps, #shz, #ventilation, #eLighting, #obzpn, #lifts, #drp, #gasBoiler, #lowPresBoiler, #chimney, #presureDev {
  background-color: #f2f2f2;
}
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
  background-color: rgba(255,159,36,1);

}
a:hover {
  background-color: green;
  cursor: pointer;
}
</style>
