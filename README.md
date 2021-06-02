# internet-time

A Deno-friendly port of https://github.com/sgwilym/dot-beat-time.

This is a small (0.3kb), fast, dependency-free module for internet time.

## What is internet time?

The millennium is upon us. The age of the internet arrived long ago. Why are we still coordinating meetings across timezones? Fortunately internet time — which splits the day into 1000 beats and which is consistent across the world — is here to fix all that.

Example: you are in central Europe and wish to organise a meeting with your friend in Tokyo during your lunch (and their evening). Instead of calculating what time it is in Tokyo then, just tell your friend: "let's talk at @500!".

## API

### `fromDate`

`fromDate(date: Date, long?: boolean): string`

Takes a standard JS Date and outputs as an internet time formatted string e.g. `@255`.
If `true` is passed to the second argument, the beat will be fractional e.g. `@255.50`.

### `now`

`fromDate(long?: boolean): string`

Outputs the current time as a internet time formatted string e.g. `@650`.
If `true` is passed to the second argument, the beat will be fractional e.g. `@650.73`.

## Credit

The calculation for determining the current beat time has been taken from the [beats rust crate](https://docs.rs/beats).
