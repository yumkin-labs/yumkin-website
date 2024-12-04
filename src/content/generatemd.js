import fs from "fs";

const FAQ_CONTENT = [
  {
    label: "Auf welchen Geräten kann ich die App nutzen?",
    content:
      "Die App ist für Android, iOS und als Web-App verfügbar. So kannst du sie auf Smartphones, Tablets und Computern nutzen.",
  },
  {
    label: "Gibt es eine Desktop-Version?",
    content:
      "Ja, du kannst die App auch über einen Browser auf deinem Desktop verwenden in allen gängigen Browssern verwenden. Ein Download ist hier nicht nötig.",
  },
  {
    label: "Ist die App offline verfügbar?",
    content:
      "Ja, bestimmte Funktionen wie das Anzeigen und Bearbeiten von Einkaufslisten sind auch offline nutzbar. Änderungen werden automatisch synchronisiert, sobald du wieder online bist.",
  },
  {
    label: "Ist die App kostenlos?",
    content:
      "Die Basisfunktionen der App sind kostenlos. Es gibt jedoch ein optionales Abo-Modell für zusätzliche Plus-Funktionen.",
  },
  {
    label: "Gibt es Abos oder In-App-Käufe?",
    content:
      "Ja, du kannst ein Abo abschließen, um erweiterte Features zu nutzen. Details dazu findest du in den Einstellungen der App.",
  },
  {
    label: "Wie kann ich ein Abo kündigen?",
    content:
      "Du kannst dein Abo jederzeit in den Einstellungen deines App-Stores (Google Play oder App Store) kündigen.",
  },
  {
    label: "Wie melde ich mich an?",
    content:
      "Lade die App herunter, erstelle ein Profil mit deiner E-Mail-Adresse oder melde dich über einen Social-Media-Account an.",
  },
  {
    label: "Was passiert, wenn ich mein Passwort vergesse?",
    content:
      "Du kannst über den „Passwort vergessen“-Button ein neues Passwort erstellen. Eine E-Mail mit weiteren Schritten wird dir zugeschickt.",
  },
  {
    label: "Kann ich Daten (wie Rezepte oder Listen) mit anderen teilen?",
    content:
      "Ja, du kannst Rezepte und Einkaufslisten ganz einfach mit Freunden oder der Community teilen.",
  },
  {
    label: "Wie werden meine Daten geschützt?",
    content:
      "Wir verwenden moderne Verschlüsselungstechnologien, um deine Daten sicher zu speichern und schützen sie vor unberechtigtem Zugriff.",
  },
  {
    label: "Werden meine Daten mit Dritten geteilt?",
    content:
      "Nein, deine Daten werden ohne deine ausdrückliche Zustimmung nicht an Dritte weitergegeben.",
  },
  {
    label: "Kann ich mein Konto löschen?",
    content:
      "Ja, du kannst dein Konto jederzeit in den App-Einstellungen löschen.",
  },
  {
    label: "Was kann ich tun, wenn ich ein Problem mit der App habe?",
    content:
      "Du kannst uns über das integrierte Support-Formular kontaktieren. Wir helfen dir so schnell wie möglich weiter.",
  },
  {
    label: "Gibt es einen Support, den ich kontaktieren kann?",
    content:
      "Ja, unser Support-Team steht dir per E-Mail oder direkt über die App zur Verfügung.",
  },
  {
    label: "Wie melde ich Fehler in der App?",
    content:
      "Du kannst Fehler direkt über die Feedback-Funktion in der App melden.",
  },
  {
    label: "Kann ich die App an meine Bedürfnisse anpassen?",
    content:
      "Ja, in deinem Profil kannst du Allergien, Ernährungspräferenzen und andere persönliche Daten angeben, damit die App optimal für dich funktioniert.",
  },
  {
    label: "Wie funktioniert die Anpassung an meine Allergien/Präferenzen?",
    content:
      "Die App analysiert Rezepte und ersetzt automatisch Zutaten, die deinen Allergien oder Vorlieben widersprechen, durch sichere Alternativen.",
  },
  {
    label: "Kann ich eigene Inhalte (z. B. Rezepte) hinzufügen?",
    content:
      "Ja, du kannst deine eigenen Rezepte hinzufügen und speichern. Diese können ebenfalls angepasst und mit der Community geteilt werden.",
  },
  {
    label: "Werden neue Funktionen hinzugefügt?",
    content:
      "Ja, wir arbeiten kontinuierlich daran, neue Features und Verbesserungen bereitzustellen.",
  },
  {
    label: "Wie erfahre ich von Updates?",
    content:
      "Wir informieren dich über Updates direkt in der App oder über Push-Benachrichtigungen.",
  },
  {
    label: "Muss ich die App manuell aktualisieren?",
    content:
      "Die meisten Updates werden automatisch durchgeführt, größere Updates müssen im App-Store manuell heruntergeladen werden.",
  },
  {
    label: "Wie funktioniert die automatische Anpassung von Rezepten?",
    content:
      "Die App ersetzt allergene oder unerwünschte Zutaten in Rezepten durch passende Alternativen, basierend auf deinem Profil.",
  },
  {
    label: "Kann ich Rezepte speichern oder als Favoriten markieren?",
    content:
      "Ja, du kannst Rezepte speichern, als Favoriten markieren und später einfach darauf zugreifen.",
  },
  {
    label: "Gibt es Community-Features, und wie kann ich diese nutzen?",
    content:
      "Ja, du kannst Rezepte teilen, Erfahrungen austauschen und Tipps von anderen Nutzern in der Community erhalten.",
  },
  {
    label: "Welche Systemanforderungen gibt es?",
    content:
      "Die App ist für die aktuellen Versionen von Android, iOS und modernen Browsern optimiert. Für ältere Geräte können Einschränkungen auftreten.",
  },
  {
    label: "Läuft die App auch auf älteren Geräten?",
    content:
      "Ja, die App ist so optimiert, dass sie auch auf älteren Geräten funktioniert. Einige Funktionen können jedoch eingeschränkt sein.",
  },
  {
    label: "Wie synchronisiere ich meine Daten zwischen Geräten?",
    content:
      "Deine Daten werden automatisch in der Cloud gespeichert und synchronisiert, sobald du dich mit demselben Konto anmeldest.",
  },
  {
    label: "Wie funktioniert die App?",
    content:
      "Die App ermöglicht dir das Suchen, Anpassen und Verwalten von Rezepten sowie das Erstellen von Einkaufslisten. Alle Funktionen sind auf einfache Bedienung ausgelegt.",
  },
  {
    label: "Gibt es eine Schritt-für-Schritt-Anleitung?",
    content:
      "Ja, die App enthält ein interaktives Tutorial, das dir beim Einstieg hilft.",
  },
  {
    label: "Kann ich die Sprache der App ändern?",
    content:
      "Ja, die App unterstützt mehrere Sprachen, die du in den Einstellungen ändern kannst.",
  },
];

FAQ_CONTENT.forEach((faq) => {
  const filename = faq.label.toLowerCase().replace(/[^a-z0-9]/g, "-") + ".md";
  const fileContent = `---\nlabel: ${faq.label}\n---\n\n${faq.content}\n`;

  fs.writeFileSync(filename, fileContent, "utf8");
  console.log(`Generated ${filename}`);
});
