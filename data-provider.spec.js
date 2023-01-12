const fs = require("fs");
const dataProvider = require("./data-provider");

test("feed-01", async () => {
  const feed = () => fs.readFileSync("./feed-01.rss", "utf-8");
  const data = await dataProvider(feed());

  expect(data).toEqual([
    {
      title:
        "Busunternehmen in Sonthofen schließt wegen Personalmangel und Strukturwandel🚌⛔️",
      link: "https://www.facebook.com/246804568826915/posts/2343042185869799/",
      date: "2023-01-10T17:32:15.000Z",
      content:
        "Das Oberallgäuer Busunternehmen „Alpenvogel“ aus Sonthofen hat geschlossen. Nach 92 Jahren musste der Familienbetrieb zum Jahresende schließen.",
      image:
        "https://external-dus1-1.xx.fbcdn.net/emg1/v/t13/14457491709793395920?url=https%3a%2f%2fmedia04.all-in.de%2farticle%2f2023%2f01%2f10%2f8%2f1083368_XXL.jpg&fb_obo=1&utld=all-in.de&stp=dst-emg0_q75&ccb=13-1&oh=06_AbE81fhK7NDeD_897uf67kFGzy5NtYEhMlsaK_K7ws_WZw&oe=63BFDEA4&_nc_sid=5f3a21",
    },
    {
      title: "Mann landet nach Zechbetrug im Gefängnis",
      link: "https://www.facebook.com/246804568826915/posts/2342892575884760/",
      date: "2023-01-10T14:03:09.000Z",
      content:
        "MEMMNGEN. Am Montag, 09.01.2023 gegen 13:00 Uhr, teilte der Inhaber eines Restaurants in Memmingen mit, dass er einen Gast hätte, der sein Essen nicht bezahlen könne. Die aufnehmende Streifenbesatzung stellte fest, dass der 62-jährige Mann keinen festen Wohnsitz hat und wegen zwei Aufenthaltsermittlungen zur Fahndung ausgeschrieben war. In Rücksprache mit der Staatsanwaltschaft Memmingen wurde er im Anschluss dem Haftrichter vorgeführt. Dieser erließ Haftbefehl und der Mann wurde in eine Justizvollzugsanstalt verbracht. (PI Memmingen)",
      image:
        "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/322967046_557365779618776_8404749134317235248_n.jpg?stp=dst-jpg_s720x720&_nc_cat=104&ccb=1-7&_nc_sid=110474&_nc_ohc=zEOumUD4eOEAX-fq8-r&_nc_ht=scontent-dus1-1.xx&edm=AJdBtusEAAAA&oh=00_AfD_5wJRy8UAxetmT4uk_nZig5jIlmzL_cJyTTHPW7CaOg&oe=63C395A1",
    },
    {
      title: "14-Jährige angefahren und geflüchtet",
      link: "https://www.facebook.com/246804568826915/posts/2342892175884800/",
      date: "2023-01-10T14:02:35.000Z",
      content:
        "FÜSSEN. Am Dienstagmorgen gegen 07:45 Uhr ereignete sich im Einmündungsbereich der Herkomerstraße und der Kemptener Straße ein Verkehrsunfall zwischen einem Pkw einer 14-Jährigen Schülerin. Das Mädchen fuhr mit ihrem Fahrrad auf dem Radweg der Kemptener Straße in Richtung der Realschule Füssen. Zum gleichen Zeitpunkt befuhr ein cremeweißer mittelgroßer Pkw die Herkomerstraße. Als die Schülerin die Einmündung zur Herkomerstraße fast gänzlich passiert hatte, prallte der Pkw gegen das Hinterrad des Mädchens, die daraufhin stürzte. Anschließend fuhr der Pkw sogar noch über das Fahrrad. Nach dem Zusammenstoß bog der Pkw zügig auf die Kemptener Straße ein und entfernte sich von der Unfallstelle in Richtung Westen. Die Schülerin verständigte daraufhin selbstständig die Rettungskräfte. Sie wurde nach der Erstversorgung vor Ort vom Rettungsdienst leichtverletzt in eine nahegelegene Klinik gebracht. Am Fahrrad entstand ein geschätzter Sachschaden in Höhe von 100 Euro. Zeugen die Angaben zum flüchtigen Fahrzeug oder zum Unfall selbst machen können, werden gebeten, sich telefonisch bei der Polizei Füssen unter der Nummer 08362/9123-0 zu melden. (PI Füssen)",
      image:
        "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/323266067_867146297845697_2474203278568589754_n.jpg?stp=dst-jpg_s720x720&_nc_cat=103&ccb=1-7&_nc_sid=110474&_nc_ohc=o3_ce_zUDlEAX-pOpm5&_nc_ht=scontent-dus1-1.xx&edm=AJdBtusEAAAA&oh=00_AfB8Ihoqg9pypWJRRMGvMQSjGsK0OmYwssL6TSovy00A3A&oe=63C330FC",
    },
    {
      title: "Haftbefehl wegen verbotener Prostitution",
      link: "https://www.facebook.com/246804568826915/posts/2342861035887914/",
      date: "2023-01-10T13:15:16.000Z",
      content:
        "MEMMINGERBERG. Am gestrigen Montagnachmittag kontrollierten Beamte der Grenzpolizeigruppe am Allgäu Airport Memmingen eine 25-jährige Frau, die aus Bukarest (Rumänien) nach Deutschland einreisen wollte. Bei der grenzpolizeilichen Kontrolle wurde aber ein aktueller Haftbefehl einer deutschen Staatsanwaltschaft wegen der Ausübung der verbotenen Prostitution festgestellt. Der sogenannte Vollstreckungshaftbefehl konnte aber durch Hinterlegung einer Sicherheit von knapp 1.100 Euro abgewendet werden. Da die Rumänin nahezu kein Geld mit sich führte, lieh sie sich das Geld bei einer Freundin aus Niedersachsen aus. Diese wiederum zahlte das Geld bei einer Polizeiinspektion in Göppingen ein. Nach Zahlungseingang und Bestätigung durch die Kollegen aus Niedersachsen konnte die Frau die Weitereise antreten.",
      image:
        "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/322256791_570681634910018_1174971566834705032_n.jpg?stp=dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=110474&_nc_ohc=5GUVww38hjsAX-Y4aI_&_nc_ht=scontent-dus1-1.xx&edm=AJdBtusEAAAA&oh=00_AfATGEC_hR89r1oJCJMgftUVgdg7PQNuAJ_PWQRTPU-PuQ&oe=63C3AD9A",
    },
    {
      title: "Heiße Asche entzündet Holzunterstandes in Legau",
      link: "https://www.facebook.com/246804568826915/posts/2342859695888048/",
      date: "2023-01-10T13:13:31.000Z",
      content:
        "LEGAU / LKR. UNTERALLGÄU. In den Abendstunden des Montags, 09.01.2023, wurde die Freiwillige Feuerwehr in Legau alarmiert. Hintergrund war der Brand eines Holzunterstandes im Hohentannweg. Durch den schnellen Einsatz der Feuerwehr konnte schlimmeres verhindert werden. Nach bisherigen Ermittlungen stellte eine Hauseigentümerin einen Eimer mit heißer Asche auf einer betonierten Fläche hinter dem Haus ab. Durch den vorherrschenden starken Wind wurde die Glut aufgewirbelt und entflammte einen daneben befindlichen Holzunterstand. Dieser brannte, wie auch die Hecke am angrenzenden Nachbargrundstück, vollkommen ab. Die Hitzeentwicklung war so stark, dass ein Teil der Fensterscheiben des Nachbarhauses zersplitterten. Bei den Löscharbeiten zog sich eine Person eine Rauchgasvergiftung zu und musste ins Krankenhaus verbracht werden. Der entstandene Schaden wird derzeit auf circa 10.000 Euro beziffert. Im Einsatz waren neben 30 Mann der Freiwilligen Feuerwehr, eine RTW-Besatzung, sowie zwei Streifenbesatzungen der Polizeiinspektion Memmingen",
      image:
        "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/322263397_734767361130022_4324789604545808114_n.jpg?stp=cp1_dst-jpg_p480x480&_nc_cat=104&ccb=1-7&_nc_sid=110474&_nc_ohc=yMZEmDgkrKUAX8iAWT4&_nc_ht=scontent-dus1-1.xx&edm=AJdBtusEAAAA&oh=00_AfCOzc-npMLTD6-QsBCNl9oYYvrLDkLzPTEdPP5vl4vrCQ&oe=63C3AC18",
    },
  ]);
});

test("feed-02", async () => {
  const feed = () => fs.readFileSync("./feed-02.rss", "utf-8");
  const data = await dataProvider(feed());

  expect(data).toEqual([
    {
      content:
        "ERKHEIM / BAB 96. Am gestrigen Mittwochnachmittag, 11.01.2023, hielt eine Streife im Bereich der Anschlussstelle Erkheim einen türkischen Lkw für eine routinemäßige Kontrolle an. Hierbei zeigte der 30-jährige türkische Fahrer drogentypische Auffälligkeiten. Zudem konnten die Beamten leichten Marihuanageruch wahrnehmen. Da ein vor Ort durchgeführter Drogenvortest positiv auf THC ausfiel, wurde die Weiterfahrt unterbunden, die Fahrzeugschlüssel sichergestellt und eine Blutentnahme angeordnet. Gegen den 30-jährigen wurden jedoch nicht nur Ermittlungen wegen eines Verstoßes gegen das Straßenverkehrsgesetz aufgenommen. Er wird auch wegen eines Vergehens nach dem Betäubungsmittelgesetz angezeigt, da bei ihm ein sogenannter Grinder (Kräutermühle) mit einer geringen Menge an Marihuana aufgefunden werden konnte. Nach Rücksprache mit der Staatsanwaltschaft musste er zwar hierfür keine Sicherheit hinterlegen, jedoch wurde von ihm wegen seiner Drogenfahrt ein mittlerer dreistelliger Betrag einbehalten. Schließlich ergab die Auswertung des digitalen Kontrollgerätes, dass das türkische Unternehmen sich weder an dem Gerät angemeldet noch den spätestens alle 90 Tage fälligen Download durchgeführt hatte, weshalb eine entsprechende Anzeige nach dem Fahrpersonalgesetz an das Bundesamt für Güterverkehr weitergeleitet wird.",
      date: "2023-01-12T13:38:14.000Z",
      image:
        "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/323411777_707604120868070_763010280869619813_n.jpg?stp=dst-jpg_p480x480&_nc_cat=103&ccb=1-7&_nc_sid=110474&_nc_ohc=RAlJiPR1U4IAX8-oc-7&_nc_ht=scontent-dus1-1.xx&edm=AJdBtusEAAAA&oh=00_AfA9qBIpBLhybG86Pi6v6aVL6hwJeEz9k6kQ0Tm61qCQQA&oe=63C6019B",
      link: "https://www.facebook.com/246804568826915/posts/2344390772401607/",
      title: "Türkischer Lkw-Fahrer unter Drogeneinfluss unterwegs",
    },
    {
      content:
        "LINDAU. Die Polizeiinspektion Lindau wurde am Mittwochnachmittag von einem Mitarbeiter des TÜV im Heuriedweg verständigt, dass es Probleme mit einem Fahrzeug geben würde. Das vorgeführte Fahrzeug sei aufgrund erheblicher Mängel nicht mehr verkehrssicher und müsse aus dem Verkehr gezogen werden. Da der Fahrzeugführer, ein 55-jähriger Mann,  damit nicht einverstanden war musste eine Polizeistreife hinzugezogen werden. Bei der Überprüfung des Sachverhaltes durch Beamte der Lindauer Polizeiinspektion  wurde dem Fahrzeugführer die Weiterfahrt unterbunden. Damit zeigte sich der Fahrzeugführer nicht einverstanden. Die Beamten stellten dann die Fahrzeugschlüssel sicher, der vorgeführte verkehrsunsichere PKW musste abgeschleppt werden. Erst danach konnte der Mann seine Schlüssel bei der Polizei wieder abholen.",
      date: "2023-01-12T13:37:39.000Z",
      image:
        "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/322394667_1203130010321812_7722097310339819643_n.jpg?stp=cp1_dst-jpg_s720x720&_nc_cat=106&ccb=1-7&_nc_sid=110474&_nc_ohc=LEJadXv8AmgAX9kRXKe&_nc_ht=scontent-dus1-1.xx&edm=AJdBtusEAAAA&oh=00_AfC7Gd9F2TsA1L9lriFzTK5wXD3o-7HUT4ODYfxGDB5jcQ&oe=63C52534",
      link: "https://www.facebook.com/246804568826915/posts/2344390025735015/",
      title: "Probleme mit Fahrzeug beim TÜV",
    },
    {
      content:
        "BUCHLOE. Eine 54-jährige Frau hatte am späten Mittwochabend auf der Autobahnauffahrt Buchloe West zur A 96, Fahrtrichtung Lindau, einen Wildunfall mit einem Reh. Sie ließ das verletzte Tier auf der Fahrbahn liegen und setzte ihre Fahrt fort, ohne den Unfall zu melden. Andere Verkehrsteilnehmer meldeten das verletzte Tier der Polizei. Es war aber zwischenzeitlich verstorben. Die Unfallbeteiligte kehrte nach einer Stunde zum Unfallort zurück und teilte über Polizeinotruf mit, dass sie soeben an einem Wildunfall beteiligt gewesen wäre. Auf beharrliche Nachfrage der Streifenbeamten gab sie schließlich zu, dass sich der Unfall bereits vor einer Stunde ereignet hatte. Der Schaden am Pkw beläuft sich auf 2.500 Euro. Gegen die Frau wurde ein Bußgeldverfahren eingeleitet.",
      date: "2023-01-12T13:37:13.000Z",
      image:
        "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/322740539_1137762336916095_934859059474675751_n.jpg?stp=dst-jpg_s720x720&_nc_cat=107&ccb=1-7&_nc_sid=110474&_nc_ohc=reWF7OLhc20AX8UpNht&_nc_ht=scontent-dus1-1.xx&edm=AJdBtusEAAAA&oh=00_AfBHz5SB_0qqqjUAYajqF_hv0s6iIEoAZz4dGJje0h9C-w&oe=63C4A203",
      link: "https://www.facebook.com/246804568826915/posts/2344389652401719/",
      title: "Verletztes Reh nach Wildunfall liegengelassen",
    },
    {
      content:
        "MARKTOBERDORF. Ein 57-jähriger Mann begab sich am 10.01.2023 mit gesundheitlichen Beschwerden zu seinem Hausarzt. Die Auswertung der Blutwerte am 11.01.2023 ergab, dass der Patient in Lebensgefahr schwebte und ohne sofortige medizinische Behandlung an einem akuten Nierenversagen sterben könnte. Da er nicht mehr erreichbar war, wurde die Polizeiinspektion Marktoberdorf um Hilfe gebeten. Der 57-Jährige konnte letztendlich von den Polizeibeamten der Inspektion Marktoberdorf an seiner Wohnanschrift angetroffen werden. Er wurde mit dem Rettungsdienst in ein nahegelegenes Krankenhaus verbracht.",
      date: "2023-01-12T13:36:47.000Z",
      image:
        "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/323429539_1085357176198288_882481216408176272_n.jpg?stp=cp1_dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=110474&_nc_ohc=y24A-CQGYSwAX8E4Yaf&_nc_ht=scontent-dus1-1.xx&edm=AJdBtusEAAAA&oh=00_AfCxYtZXCM7GpwvHoq-v1eT8_gs8jn580iOgK5S5Q6_tIA&oe=63C5EE52",
      link: "https://www.facebook.com/246804568826915/posts/2344389372401747/",
      title: "Patient in Lebensgefahr",
    },
    {
      content:
        "SONTHOFEN. Wie erst jetzt angezeigt wurde, wurde ein 28-jähriger Angestellter eines Getränkemarktes dabei erwischt, wie er sich selbst Auszahlungsbelege für Leergut anfertigte und sich das Geld dafür aus der Kasse nahm. Nachdem dem Besitzer Unstimmigkeiten in der Kasse aufgefallen waren, war eine Prüfung durchgeführt worden. Diese ergab einen bisherigen Schaden von 500 Euro. Da bei der Prüfung noch weitere Auszahlungsbelege in gleicher Höhe gefunden wurden, dürfte der Gesamtschaden geschätzt bei ca. 15.000 Euro liegen. Die Ermittlungen laufen noch. Dem Angestellten wurde fristlos gekündigt.",
      date: "2023-01-12T13:35:43.000Z",
      image:
        "https://scontent-dus1-1.xx.fbcdn.net/v/t39.30808-6/322387565_1642783232821309_8777207280093575406_n.jpg?stp=cp1_dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=110474&_nc_ohc=5dRed7p1HUwAX-Wml7I&_nc_ht=scontent-dus1-1.xx&edm=AJdBtusEAAAA&oh=00_AfA-uay4Pw6Gr1LGtgYlS96CTgoeWhqo_0O3qEMuwxEhUw&oe=63C5F515",
      link: "https://www.facebook.com/246804568826915/posts/2344388745735143/",
      title: "Arbeitgeber bestohlen",
    },
  ]);
});
