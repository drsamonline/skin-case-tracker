# Privacy

Version: 1.0 (draft for review)
Effective: on publication
Owner: Dr Sohil Momin — sohilmomin2000@gmail.com
Changes: Initial version.

Skin-Case Tracker records one skin case over time — History, Habits, Mapping and Symptoms — on your own device. There is no account, no server and no sync.

## What is stored

One entry a day: skin severity, the day's habits, and the five symptoms the app tracks, plus the narrative History and Mapping notes you write.

It is written to **this browser's local storage and IndexedDB** on this device.

## It is not encrypted

Be clear about this, because it decides how you use the app: the records are stored **unencrypted**. Anyone who can open this browser profile — or read the device's disk — can read them.

That is acceptable for your own notes on your own phone. It is not acceptable for a clinic shared terminal, a borrowed laptop, or a device you leave unlocked. If you need encryption at rest, `app-encrypted-case-log` in this fleet seals notes with a passphrase; this app does not.

## What leaves the device

**Nothing you typed.** No analytics, no telemetry, no crash reporting, no sync, no licence check.

The only network code in the app is its service worker (`sw.js`), which fetches the app's own files so it can run offline. It never sends an entry or a patient's details anywhere.

Exporting writes a file to your device through the browser's own download. That file is a plain copy outside the app, and must be handled as clinical data. Documentation links are the only outbound links, and they load nothing.

## Erasing

Clearing this site's data in the browser removes the records. Exported files and browser backups are separate copies and must be deleted separately.

## Your patients, and the law

If you use this app for real patients, **you are the Data Fiduciary** under the Digital Personal Data Protection Act, 2023 — not the author of the app. A skin case tied to an identified patient is personal data, and health data is sensitive personal data under the SPDI Rules, 2011.

Unencrypted storage is a decision you have to be able to defend. The safest use is a single-practitioner device with a screen lock, and a retention habit: export what you need, then clear the browser.

## Changes

This document is versioned in the repository and changes with the code.

Contact: Dr Sohil Momin — sohilmomin2000@gmail.com
