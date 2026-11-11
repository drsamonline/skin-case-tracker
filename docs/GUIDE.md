# Skin Case Tracker — user guide

**Version 1.0.0 · PolyForm Noncommercial 1.0.0**

A working implementation of the **HHMS dashboard** described in *The Skin Is a Liar* (chapters 11 and
14). HHMS is the four fields it records — **History, Habits, Mapping, Symptoms**. The book's claim is
that the skin is the body's readout and that a skin case should be tracked over time and read as a
*pattern*, not treated as a snapshot. This is that tracking instrument.

> **It records; it does not diagnose.** Nothing here is medical advice. The reading of the pattern is
> the clinician's job. All data stays on your device.

- Use it: <https://drsamonline.github.io/skin-case-tracker/play/>
- Install it: open the link, then the browser's **Install** option (⊕ in the address bar, or *Add to
  Home screen*). It then works fully offline.
- Try it: press **Load demo case** on the Cases tab, or add `#demo` to the URL.

## The four fields

| Field | What it captures |
|---|---|
| **History** | the narrative, and the audit of the suppression — eruptions "cured" before an internal complaint, with the latency |
| **Habits** | stress, cold drinks, alcohol, sleep, heavy food, menstruation, medications, vaccination |
| **Mapping** | where the eruption is, where it has been, where it has migrated — plus photographs |
| **Symptoms** | cardiac · respiratory · digestive · neurological · gynaecological, scored 0–10 |

## What it does with them

- **Records** the four fields — one entry a day (skin severity, the day's habits, five symptom
  groups) — plus a flare log carrying the 48-hour food, cycle, stress and sleep.
- **Maps** the eruption on a body map (*present · has been · migrated*) and attaches photographs.
- **Connects** the skin against each symptom group day by day, and scores the **seven organ-skin axes**
  from the book's signatures.
- **Reads** the pattern: a skin-vs-symptoms chart, a lead/lag view, a **colour-blind-safe**
  correlation heat-map, baseline-versus-current, and a plain-language conclusion.
- **Audits** at **30 / 60 / 90 days**, and exports the trail as JSON (the full backup, *including
  photos*), CSV, a pooled research CSV, the photos as a ZIP, or a printable report.

## Privacy

Everything is stored in your own browser (`localStorage`). **Nothing is sent anywhere.** No account,
no server, no tracking. Export at any time and import the JSON back on the same or another device —
which is also how you move a case between devices.

## The line this app does not cross

It will tell you what your log says. It will not tell you what your skin means. The distinction is
the whole design: a pattern read by the person who knows the patient is medicine; the same pattern
read by an app is a horoscope with charts.

## Licence

PolyForm Noncommercial 1.0.0. See [LICENSE](../LICENSE).
