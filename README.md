# Manvi & Rishabh — Wedding Invitation Website

A mobile-friendly wedding website using plain HTML, CSS and JavaScript. Free to host; no paid APIs or templates.

## Files
- `index.html`: website content
- `styles.css`: visual design and responsive layout
- `script.js`: countdown, mobile menu, share button, invitation-card image, RSVP submission
- `config.js`: central settings
- `apps-script.gs`: optional Google Sheets RSVP backend

## Update details first
The wedding date is set to **10 December 2026**. A placeholder time of **5:00 PM** is used only for the countdown; change it in `config.js` when the actual time is confirmed. Event timings, dress codes, exact address, accommodation, travel information and photos remain placeholders intentionally. The Maps link is a search, not a verified venue pin.

## Publish free with GitHub Pages
1. Sign in/create a free account at https://github.com.
2. Create a public repository, e.g. `manvi-rishabh-wedding`.
3. Upload `index.html`, `styles.css`, `script.js`, and `config.js` to the repository root.
4. Go to **Settings → Pages**. Select **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
5. Wait a few minutes. Your public URL will look like `https://YOUR-USERNAME.github.io/manvi-rishabh-wedding/`.
6. Test it on a phone before sharing it in WhatsApp.

## Enable free RSVP collection with Google Sheets
The RSVP form does not store responses until you connect it; this avoids implying that unconnected responses have been saved.
1. Create a Google Sheet called `Manvi & Rishabh Wedding RSVPs`.
2. Open **Extensions → Apps Script** and paste the code from `apps-script.gs`, then save.
3. Select **Deploy → New deployment → Web app**. Execute as **Me** and choose **Anyone** for access if guests should not need to sign in.
4. Deploy, authorise, and copy the Web App URL.
5. Paste the URL into `rsvpEndpoint` in `config.js`, upload the updated file, and test a dummy RSVP.
6. Check that the response appears in the Sheet before sharing the site.

**Data access:** responses are stored in your Google Sheet. You and anyone you share the Sheet with can view them. The public endpoint can accept submissions, so avoid sensitive information. The form uses a browser `no-cors` request; the browser cannot verify the server response, so check the Sheet after testing.

## Share and edit
Once published, copy the public URL into WhatsApp. The Share button opens your phone's share sheet where supported. Edit `config.js` for names/date/endpoint/map URL; edit `index.html` for event details, wording, travel and gallery content; edit the CSS variables at the top of `styles.css` for colours.
