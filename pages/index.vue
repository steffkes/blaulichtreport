<template>
  <div>
    <section class="hero is-medium header-image">
      <div class="hero-body">
        <h1 class="title is-hidden">Blaulichtreport Südschwaben/Allgäu</h1>
      </div>
    </section>

    <div class="notification is-danger mt-6" style="background-color: #e63946">
      <p>
        Sie haben einen Einsatzhinweis für uns? <strong
          >Stellen sie sich sicher, dass zuerst Erste Hilfe geleistet wird und
          der Notruf 112 gewählt wurde</strong
        >.
      </p>

      <p>
        Dann
        <a href="mailto:sofortmeldung@blaulichtreport-suedschwabenallgaeu.de"
          >schreiben Sie uns eine E-Mail</a
        >
        mit folgenden Informationen: Wo ist es passiert? Was ist passiert? Wann
        ist es passiert?
      </p>
    </div>

    <div class="card mt-6" v-for="article in articles">
      <div class="card-image">
        <figure
          class="image is-16by9"
          :style="{
            backgroundImage: `url(${article.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }"
        ></figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                src="https://scontent.fmuc4-1.fna.fbcdn.net/v/t39.30808-6/297877497_2212375228936496_6761246603558481034_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qMIRX0As6QEAX9jvzRv&_nc_ht=scontent.fmuc4-1.fna&oh=00_AfC3GeSwi9R_5xftDIC6nWflqJehvKHXOAQpraSgLXnBIA&oe=63C39BC5"
                class="is-rounded"
                alt=""
              />
            </figure>
          </div>
          <div class="media-content">
            <h2 class="title is-4">{{ article.title }}</h2>
            <p class="subtitle is-6">
              @blaulichtreportsuedschwaben ·
              <a :href="article.link"
                ><time :datetime="article.date">{{ article.date }}</time></a
              >
            </p>
          </div>
        </div>

        <div class="content">
          <p>{{ article.content }}</p>
        </div>
      </div>
    </div>

    <footer class="footer mt-6">
      <div class="content">
        <p>
          <strong>Impressum</strong> (gemäß § 5 TMG) und
          <strong>Verantwortlich für den Inhalt</strong> (gemäß § 55 Abs. 2
          RStV):<br />
          Benjamin Liss, Siplingerstr. 34, 87527 Sonthofen, Telefon: 08321 805
          21 55, E-Mail: info@blaulichtreport-suedschwabenallgaeu.de
        </p>

        <p class="is-size-7">
          Haftungsausschluss (Disclaimer) / Haftung für Inhalte: Als
          Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
          diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
          bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
          übermittelte oder gespeicherte fremde Informationen zu überwachen oder
          nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
          hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung
          von Informationen nach den allgemeinen Gesetzen bleiben hiervon
          unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
          Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
          Inhalte umgehend entfernen Die durch die Seitenbetreiber erstellten
          Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede
          Art der Verwendung Streitschlichtung Wir sind nicht bereit oder
          verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
const dataProvider = require("../data-provider.js");
import { render } from "timeago.js";

export default {
  async asyncData() {
    return {
      articles: await dataProvider(),
    };
  },
  mounted: () => {
    render(document.querySelectorAll("time"), "de_DE");
  },
};
</script>

<style>
.header-image {
  background-image: url(/cover.jpg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
