# greenthreatre.kiev.ua

Museum workshop for the greentheatre.kiev.ua site. WIP.

Site was created April 9th, 1999 by Max Tulyev.

## Restoration plan

- [x] Change encoding to utf-8
- [x] Rambler button emulation
- [x] Mobile and responsive viewport
- [x] "Museum piece" signage
- [x] /random handler
- [ ] Redo thumbnails? Supportive argument: images retina flatscreens look nowhere close to what they did look like on CRTs
- [x] Explicitly list default fonts and colors of ancient browsers in additional non-invasive CSS
- [x] Additional meta in headers: stylesheet, javascript, museum signage
- [ ] Update Egor's pictures with better versions

## Restoration process

- Minimal header change
- Original HTML preserved as much as possible
- UTF-8
- Non-invasive js added to handle /random because we don't want to change html
- Rambler button image replaced
- Some images updated with a higher resolution version (original preserved in this repository)
- `MUSEUM` in html comments to indicate changes
- CSS reset added emulating period-correct look of Netscape Navigator
