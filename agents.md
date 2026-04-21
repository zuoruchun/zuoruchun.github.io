# Repository Maintenance Rules

## Core Workflow

- This repository is a personal website built with `jemdoc`. Edit `.jemdoc` source files, not generated `.html` files. After each source change, regenerate the matching page with `./jemdoc -c mysite.conf page.jemdoc`. In this repository, render pages one by one instead of passing multiple page files in a single command. Only regenerate multiple pages when a shared template or shared stylesheet change requires it. Do not commit or push unless the user explicitly asks for it. If the user introduces a new persistent formatting or maintenance rule, apply it for the current task and then ask whether it should also be added to `agents.md`.

## Publications Format

- Use this fixed order: authors. title. venue or status, year. `[paper]` `[code]`. Do not attach the paper link to the title. If a paper link exists, place it at the end as `[paper]`; if a code link exists, place it at the end as `[code]`. Use lowercase `paper` and `code`, and do not add either tag when no such link exists. Use the exact paper title provided by the user unless the user asks for wording changes. Use agreed journal abbreviations, for example `Fluct. Noise Lett.` for `Fluctuation and Noise Letters`.

## Authors and Corresponding Authors

- Write author names in the form `Family, Initial.` and keep `Zuo, R.` bold in the publications list. Do not write `(corresponding author)`. Mark the corresponding author only with a superscript `*` after the correct author's name. If there is only one author, do not add a corresponding-author star. Do not assume `Zuo, R.` is always the corresponding author; follow the user's instruction for each paper.

## jemdoc Formatting Notes

- `jemdoc` escapes ordinary HTML tags in normal text, so when precise formatting is needed, such as bold names plus superscript stars, use raw HTML embedding with `{{...}}`, for example `{{<strong>Zuo, R.</strong><sup>*</sup>}}`. Keep raw HTML minimal and only use it when ordinary `jemdoc` formatting is insufficient. If a paper is submitted, render italic `Submitted` followed by the year; if the user explicitly says not to write `Submitted`, then write only the year.

## Academic Service Format

- Put journal reviewing information on the homepage, not on the publications page. Use an `Academic Service` section, list a bold label such as `Reviewer`, and then list the journal names as separate bullet items. Use the full official journal title unless the user explicitly asks for an abbreviation.

## Editing Discipline

- Make the smallest necessary change. If the task is only about publication entries, do not also change `mysite.conf`, `css/jemdoc.css`, or unrelated files. When formatting is uncertain, match nearby existing entries and preserve consistency.
