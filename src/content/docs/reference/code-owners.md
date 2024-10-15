---
title: Code Owners
description: This document describes the governance and decision-making process for the @theholocron organization.
---

Code Owners is a powerful way to define individuals or teams that are responsible for code in a repository. When updating any bug or feature, be sure to update this file to include yourself for potential future reviews.

> Code owners are automatically requested for review when someone opens a pull request that modifies code that they own. Code owners are not automatically requested to review draft pull requests.
>
> When someone with admin or owner permissions has enabled required reviews, they also can optionally require approval from a code owner before the author can merge a pull request in the repository.

[Read more about on GitHub](https://help.github.com/en/articles/about-code-owners)

### What does it look like?

All teams are required to add the file within the `.github/` directory on the root of the repository.  The format is the same as `.gitignore` which is followed by one or more GitHub usernames or team names using the standard @username or @org/team-name format. You can also refer to a user by an email address that has been added to their GitHub account, for example user@example.com.

```
# This is a comment.
# Each line is a file pattern followed by one or more owners.

# These owners will be the default owners for everything in
# the repo. Unless a later match takes precedence.
# Typically the owners team should be responsible for the
# entire repository.
* @org/team

# Order is important; the last matching pattern takes the most
# precedence. When someone opens a pull request that only
# modifies JS files, only maintainers and not the global
# owner(s) will be requested for a review.
*.js @org/maintainers

# You can even call out other teams for audits.
# In this example, @org/design owns any file in an that ends in
# .scss or .css anywhere in your repository. Typically
# all CODEOWNERS should have their (S)CSS audited by the UX
# design team.
*.scss @org/design
*.css @org/design
```

### Why do I need one?

As you can see from the example above, it automates the need to ask developers to review code.  Even further, we can use [GitHub's branch protection](https://help.github.com/en/articles/configuring-protected-branches) to ensure that code isn't pushed through if the code owner(s) aren't consulted. The other side effect is providing outside contributors the knowledge of knowing whom to ask when looking to fix or improve library code.  One should always reach out to someone on the team before making significant changes. We'd hate for you to put in a lot of work for something that doesn't align with the vision of this project.

