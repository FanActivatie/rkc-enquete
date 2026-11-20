// Alle vragen van de enquête op één plek (gebruikt door index.html en admin.html).
// Types: radio (één keuze), checkbox (meerdere, met max), scale (1-5), contact (tekstveld, alleen als interview = ja),
//        open (tekstvak). Een optie 'Anders' krijgt automatisch een invulregel.
// route: welke sectie zichtbaar is bij de gekozen kaartsoort ('always' = altijd)
window.RKC_SURVEY = {
  routes: [
    { id: 'seizoenkaart', label: '🎫 Ik heb een seizoenkaart', name: 'Seizoenkaart' },
    { id: 'los', label: '🎟️ Ik heb een los kaartje', name: 'Los kaartje' },
    { id: 'mee', label: '🤝 Ik ben met iemand mee vandaag', name: 'Met iemand mee' }
  ],
  sections: [
    {
      id: 'over-jou', title: 'Over jou', route: 'always', dark: true,
      questions: [
        { key: 'woonplaats', type: 'radio', cols: 2, text: 'Waar woon je?',
          options: ['Waalwijk', 'Drunen / Heusden', 'Kaatsheuvel / Loon op Zand', 'Tilburg', "'s-Hertogenbosch", 'Elders in Noord-Brabant', 'Buiten Noord-Brabant'] },
        { key: 'woonduur', type: 'radio', cols: 2, text: 'Hoe lang woon je daar al?',
          options: ['Korter dan 1 jaar', '1 tot 5 jaar', '5 tot 10 jaar', 'Langer dan 10 jaar', 'Mijn hele leven'] },
        { key: 'bezigheid', type: 'radio', cols: 2, text: 'Studeer je, werk je, of zit je nog op school?',
          options: ['Ik studeer', 'Ik werk', 'Ik zit nog op school', 'Anders'] },
        { key: 'metwie', type: 'radio', cols: 2, text: 'Met wie ben je hier vandaag?',
          options: ['Alleen', 'Met vrienden', 'Met familie of ouders', "Met collega's of teamgenoten", 'Anders'] },
        { key: 'voetbal', type: 'radio', cols: 1, text: 'Voetbal je zelf, of heb je vroeger gevoetbald?',
          options: ['Ja, ik voetbal nu nog', 'Ja, ik heb vroeger gevoetbald', 'Nee, nooit gevoetbald'] },
        { key: 'leren_kennen', type: 'radio', cols: 2, text: 'Hoe heb je RKC leren kennen?',
          options: ['Via vrienden', 'Via familie of ouders', 'Via school of studie', 'Via social media', 'Via mijn eigen voetbalclub', 'Ik woon in de buurt van het stadion', 'Via een actie of gratis kaartje', 'Anders'] }
      ]
    },
    {
      id: 'seizoenkaart', title: 'Seizoenkaarthouders', route: 'seizoenkaart',
      questions: [
        { key: 'sk_redenen', type: 'checkbox', max: 2, cols: 1, text: 'Wat waren voor jou de twee belangrijkste redenen om een seizoenkaart te nemen?',
          options: ['Goedkoper dan losse kaartjes', 'Een vaste plek in het stadion', 'Mijn vrienden of familie hebben er ook een', 'Ik voel me verbonden met de club', 'De sfeer in het stadion', 'Voorrang en extra voordelen', 'Een speciale korting of actie'] },
        { key: 'sk_anderen', type: 'radio', cols: 2, text: 'Hebben de mensen met wie je hier bent ook een seizoenkaart?',
          options: ['Ja, allemaal', 'Een deel wel, een deel niet', 'Nee, niemand', 'Ik ben alleen'] },
        { key: 'sk_eerder', type: 'radio', cols: 1, text: 'Was er iets waardoor je vóór je seizoenkaart al eens was komen kijken?',
          options: ['Ja, een gratis eerste wedstrijd', 'Ja, een actie met vrienden', 'Ja, een studenten- of jongerenprijs', 'Ja, ik had eerder een los kaartje gekocht', 'Nee, ik kocht meteen een seizoenkaart'] },
        { key: 'sk_volgend', type: 'radio', cols: 3, text: 'Denk je dat je volgend seizoen weer een seizoenkaart neemt?',
          options: ['Ja, zeker', 'Waarschijnlijk wel', 'Twijfel nog', 'Waarschijnlijk niet', 'Nee'] }
      ]
    },
    {
      id: 'los', title: 'Los kaartje', route: 'los',
      questions: [
        { key: 'los_aantal', type: 'radio', cols: 2, text: 'Hoe vaak ben je dit seizoen al bij RKC geweest, vandaag meegerekend?',
          options: ['1 keer', '2 tot 5 keer', '6 tot 10 keer', '10 keer of meer'] },
        { key: 'los_waarom', type: 'checkbox', max: 2, cols: 1, text: 'Waarom heb je (nog) geen seizoenkaart?',
          options: ['Te duur', 'Ik kom niet vaak genoeg', 'Ik weet niet of ik bij elke thuiswedstrijd kan', 'Mijn vrienden hebben er ook geen', 'Ik wist niet dat het kon', 'Ik wil het eerst uitproberen', 'Anders'] },
        { key: 'los_overhalen', type: 'checkbox', max: 2, cols: 1, text: 'Wat zou je overhalen om wel een seizoenkaart te nemen?',
          options: ['Een lagere prijs of jongerenkorting', 'Betalen in termijnen', 'Als mijn vrienden er ook een nemen', 'Een flexibele kaart voor een deel van de wedstrijden', 'Extra\'s zoals meet & greets of merchandise', 'Niets, ik blijf losse kaartjes kopen'] }
      ]
    },
    {
      id: 'mee', title: 'Ik ben met iemand mee vandaag', route: 'mee',
      questions: [
        { key: 'mee_wie', type: 'radio', cols: 2, text: 'Met wie ben je vandaag mee?',
          options: ['Een vriend of vriendin', 'Mijn ouder(s) of familie', 'Mijn partner', 'Een collega of teamgenoot', 'Anders'] },
        { key: 'mee_kaart_ander', type: 'radio', cols: 1, text: 'Heeft de persoon met wie je mee bent een seizoenkaart?',
          options: ['Ja, een seizoenkaart', 'Nee, een los kaartje', 'Weet ik niet'] },
        { key: 'mee_kaartje', type: 'radio', cols: 1, text: 'Hoe ben je aan je kaartje voor vandaag gekomen?',
          options: ['Gekregen of betaald door degene met wie ik mee ben', 'Zelf betaald', 'Via een actie of vrijkaart', 'Weet ik niet'] },
        { key: 'mee_eerder', type: 'radio', cols: 1, text: 'Hoe vaak ben je al naar RKC geweest?',
          options: ['Nee, dit is mijn eerste keer', 'Ja, 2 t/m 5 keer', 'Ja, 6 t/m 10 keer', 'Ja, ik ben meer dan 10 keer geweest'] },
        { key: 'mee_alleen', type: 'radio', cols: 1, text: 'Zou je ook naar RKC gaan zonder deze persoon?',
          options: ['Ja, zeker', 'Misschien', 'Nee, waarschijnlijk niet'] },
        { key: 'mee_terug', type: 'radio', cols: 2, text: 'Hoe groot is de kans dat je dit seizoen nog eens terugkomt?',
          options: ['Heel groot', 'Groot', 'Weet ik nog niet', 'Klein', 'Heel klein'] }
      ]
    },
    {
      id: 'iedereen', title: 'Iedereen', route: 'always', dark: true,
      questions: [
        { key: 'nieuwe_kaarten', type: 'checkbox', max: 2, cols: 1, text: 'RKC denkt na over nieuwe kaarten voor jongeren. Welke twee vind jij het leukst?',
          options: ['Seizoenkaart met korting tot 25 jaar', 'Flexkaart voor een paar wedstrijden', 'Goedkoop lidmaatschap met voorrang op kaarten', 'Korting als je een vriend meeneemt', 'Betalen in termijnen'] },
        { key: 'app', type: 'radio', cols: 3, text: 'Op welke app zit je het meest?',
          options: ['TikTok', 'Instagram', 'Snapchat', 'YouTube', 'WhatsApp', 'X (Twitter)', 'Anders'] },
        { key: 'online', type: 'checkbox', max: 2, cols: 1, text: 'Wat zou je van RKC het liefst online zien?',
          options: ['Beelden achter de schermen', 'Samenvattingen en goals', 'Spelerschallenges en grappige video\'s', 'Interviews met spelers', 'Live updates tijdens de wedstrijd', 'Content van en met fans'] },
        { key: 'extra_leuk', type: 'checkbox', max: 2, cols: 1, text: 'Wat maakt een dag als vandaag voor jou extra leuk?',
          options: ['De sfeer in het stadion', 'Samen zijn met vrienden of familie', 'Als RKC wint', 'Eten en drinken rond de wedstrijd', 'Muziek en activiteiten voor de wedstrijd', 'Spelers van dichtbij zien'] },
        { key: 'verbonden', type: 'scale', text: 'Als je een cijfer van 1 tot 5 geeft: hoe verbonden voel je je met RKC?',
          options: ['1', '2', '3', '4', '5'], labels: ['Heel weinig', 'Weinig', 'Neutraal', 'Veel', 'Heel erg'] },
        { key: 'interview', type: 'radio', cols: 2, text: 'Zou je het goed vinden als we je later nog even mailen voor een paar korte vragen?',
          options: ['Ja, dat is goed', 'Nee, liever niet'] },
        { key: 'contact', type: 'contact', showIf: { key: 'interview', value: 'Ja, dat is goed' },
          text: 'Op welk mailadres mogen we je mailen?', placeholder: 'naam@voorbeeld.nl' },
        { key: 'voorstel', type: 'open', text: 'Wat zou jij voorstellen aan RKC?',
          placeholder: 'Bijv. een actie, iets in het stadion, iets online... (mag je leeg laten)' }
      ]
    }
  ]
};
