# HHMS Skin-Case Tracker

**The companion app to the book _The Skin Is a Liar_ by Dr. Sohil Momin.**

A private, offline tracker for skin cases built on the book's **HHMS dashboard** — the four
fields of **History, Habits, Mapping, Symptoms** — read as a 90-day pattern and audited at
30 / 60 / 90 days.

![The HHMS Skin-Case Tracker dashboard](docs/screenshot.png)

It records; it does not diagnose.

## Use it

- **Run it in the browser (installs as an app):** https://drsamonline.github.io/skin-case-tracker/
- **Or download this repository and open `index.html`.** It is one self-contained file.
- **Try it with sample data:** open the link and press **Load demo case** (45 days of sample data),
  or append `#demo` to the URL.

It is a Progressive Web App: open the hosted link once, then use your browser's
**Install** option to add it to your desktop or phone. After that it works fully offline.

## What it does

- **Records** the four HHMS fields — one entry a day (skin severity, the day's habits, and five
  symptom groups), plus a flare log with the 48-hour food, cycle, stress and sleep.
- **Maps** the eruption on a body map (present / has been / migrated) and attaches photographs.
- **Connects** the skin against each symptom group, day by day, and scores the seven organ-skin
  axes from the book's signatures.
- **Reads** the pattern: a skin-vs-symptoms chart, a lead/lag view, a colour-blind-safe
  correlation heat-map, baseline-vs-current, and a plain-language conclusion.
- **Audits** at 30 / 60 and 90 days, and exports the trail as JSON (the full backup, including
  photos), CSV, a pooled research CSV, the photos as a ZIP, or a printable report.

## Privacy

Everything is stored in your own browser (`localStorage`). Nothing is sent anywhere. Export at
any time and import the JSON back on the same or another device.

## Not medical advice

This app records information; it does not diagnose and gives no medical advice. The axis scores
are a transparent, rule-based reading of your own log. Reading the pattern is the clinician's job.
If a symptom worries you, see a doctor; in an emergency, seek emergency care.

## Licence

**Free to use — for personal and clinical use — but copyrighted.**
Copyright © 2026 Dr. Sohil Momin. All rights reserved.

You may use it free of charge for personal and clinical purposes. You may **not** sell it,
redistribute it, publish it, or modify it without written permission. See [LICENSE](LICENSE) for
the full terms.

The text of the book _The Skin Is a Liar_ is **not** part of this repository and is not licensed
here.

## Author

**Dr. Sohil Momin** — Doctor, Poet, Social Worker · [@drsamonline](https://github.com/drsamonline)

The method is J. Compton Burnett's (1893), modernised in _The Skin Is a Liar: Stop Treating the
Surface_.
