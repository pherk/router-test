import { LitElement, html, customElement } from 'lit-element';

@customElement('nabu-about')
export class About extends LitElement {
  render() {
    return html`
      <h2>Über Nabu 2.0</h2>
      <p>
        Die Ambulanzsysteme des SPZ der Uni-Kinderklinik Köln wurden wegen erheblicher Defizite des KAS der UKK (ORBIS) entwickelt.
        Größere multidisziplinäre Ambulanzen die chronisch kranke Patienten über längere Zeiträume versorgen, sind einem Fall-basierten KAS nicht angemessen zu führen.
      </p>
      <p>
        Das erste System des SPZ nach Gründung im Jahre 1994 wurde 2004 auf MS Access-Basis neu geschrieben ("Paule").
        Neben einer Patienten-Stammdaten wurden lediglichTermine und Wartelisten verwaltet.
        2015/16 wurde parallel ein neuer Prototyp "Nabu" entwickelt, um eine ToDo/Ticket-Funktionalität zu ergänzen. 2016 konnte Paule ganz ablöst werden.
      </p>
      <p>
        Die Daten des neuen Systems "Nabu" basieren größtenteils auf dem FHIR-Standard, inzwischen 4.0.1. Es werden 30 Ressourcen des Standards (von ~150) genutzt.
        Dazu kommen einige wenige Nicht-FHIR-Ressouren, um komplexe Anforderungen (Order), Kalender (ICal) und Abwesenheiten (Leaves) abzubilden.
        Frontend, Middleware und Rest-API sind in HTML, Javascript, XQuery und XForms (Betterform) geschrieben und laufen auf einem eXist-db XML-Server.
      </p>


    `;
  }
}
