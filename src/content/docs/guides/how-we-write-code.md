---
title: Working With the Code
description: A set of rules for how we organize code.
---

## Prefer Destructuring Within the Function

```
export function useBotChallenge(params: UseBotChallengeParams) {
  const { skip = false, ...props } = params;
  // ...
}
```

VS

```
export function useBotChallenge({ skip = false, ...props }: UseBotChallengeParams) {
  // ...
}
```

The former because...it's easier to read a spread on a separate line. When `prettier` will often times take line length into account and you get this:

```
export function useBotChallenge({
  skip = false,
  ...props
}: UseBotChallengeParams) {
  // ...
}
```

This makes the eye jump and bounce and puts way too much strain on the brain to figure out what is going on. With the first version, if `prettier` decides to put each key/value pair on a separate line that's fine because that should be done anyway, especially if you need to add comments about each prop.

## Name Functions in the REST format

Functions should be prefixed with REST-style verbs (e.g. get, update, create).

## React component order

Prefer writing [markup-only components](https://dustin.boston/engineering-logbook/2025-04-07-markup-only-components-at-netflix/). But still prefer writing in the following order when possible.

- props
- ref
- state (`useState`, `jotai` atoms, etc.)
- `useEffect`
- event handlers
- return `useMemo`
- return component (early exits)
