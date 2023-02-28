# Coding rules

This part defines all the coding rules that should be respected.

## Format

The code should respect the rules defined by `.editorconfig`.
You can verify your code with `dotnet format . --verify-no-changes -v d` at the root of the project.

## Sonar

The code should respect the rules defined in the [quality profiles](https://sonarcloud.io/organizations/thurst/quality_profiles/show?name=Profile&language=cs).

## Git

### Commits

* Commits should respect [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) and specific rules defined in `commitlint.config.js`.
* Commits should be [signed](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification).
* Changes in commits should be described in [imperative mood](https://www.kernel.org/doc/html/v4.10/process/submitting-patches.html#describe-your-changes).

Do not hesitate to propose scopes not defined in `commitlint.config.js`.