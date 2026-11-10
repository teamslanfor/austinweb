# Austin Star Services LLC: website

A 5-page professional website for a heating and air conditioning company in Austin, TX. It uses the "Corporate" template (the same layout as the Camberwell Car Wash site) in American English, with:
- navy and blue colours, plus orange for emergency calls to action
- a hero with a free-quote form, and a trust strip showing the Texas licence
- 9 service cards, an emergency banner, a tune-up section and the service area with a map
- FAQs, and button and tab animations (hover, focus and click only)

Sources: the business's current website (https://austinstarservices.com/) for the services, address, hours, service areas and licence, plus the phone and email supplied by the client.

| Detail | Value |
|---|---|
| Business | Austin Star Services LLC |
| Office | 9300 South IH-35, Suite A-500, Austin, TX 78748 |
| Phone | (512) 203-0765 |
| Email | lateraustinstar512@yahoo.com |
| Hours | Monday – Friday, 9:00 AM – 5:00 PM |
| License | Texas ACR TACLB26861E |
| Service area | Austin, Travis County, Kyle, Buda, San Marcos, Dripping Springs |

## ✅ How to put it live

Upload the **contents of `public/`**, so that `index.html` sits at the top level. The zip **`austin-star-services-UPLOAD-THIS.zip`** already has exactly this layout.

- **To replace the current austinstarservices.com site:** upload the files to the existing web host (usually into `public_html/`). Keep a backup of the old site first.
- **Netlify:** go to https://app.netlify.com/drop and drag in the unzipped folder, then point the domain at it.
- **To look at it locally:** double-click `index.html`.

All links are relative, so the site works at a domain root, in a sub-folder, or opened from your computer.

## Folder structure

- `public/`: the finished website.
- `src/site.config.js`: business details.
- `src/services-data.js`: the 9 services. Add `price: 'From $89'` to show a price.
- `src/pages/*.html`: the content for each page.
- `build.js`: run `npm run build` to rebuild `public/`.
- `server.js`: an optional local preview server, plus live AI chat if `ANTHROPIC_API_KEY` is set.

## Quote requests

The Home and Contact forms, and the chat assistant's quote requests, are emailed to **lateraustinstar512@yahoo.com** through FormSubmit. The **first submission sends a one-time activation email**; click its link once. Phone numbers are checked as US format, e.g. (512) 555-0123.

## ⚠️ Check these before launch

1. **Click the FormSubmit activation email** after the first test submission.
2. **Yelp link.** The current site links to Yelp, but the exact page couldn't be read, so the site links to a Yelp search. Replace `yell` and `socials` in `site.config.js` with the business's real Yelp URL.
3. **"What's included" lists.** These describe typical work for each service; confirm them with the owner.
4. **Emergency wording.** The current site mentions "ASAP" AC service and an emergency flood service, so the site invites urgent callers to phone. Confirm how after-hours calls are handled.
5. **Photos** are royalty-free Unsplash stock images, labelled as stock on the Gallery page. Real job photos and the team will make it much stronger.
6. **Reviews.** None were found on the current site, so none are shown. Add real customer reviews once you have permission to use them.
