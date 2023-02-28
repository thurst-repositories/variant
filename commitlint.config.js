module.exports = {
    extends: [ "@commitlint/config-conventional" ],
    rules: {
        "body-leading-blank": [ 2, "always" ],
        "footer-leading-blank": [ 2, "always" ],
        "body-case": [ 2, "always", "sentence-case" ],
        "scope-enum": [
            2,
            "always",
            [ "generator", "test-generator", "benchmark", "copyright", "git", "solution" ]
        ],
        "subject-case": [ 2, "always", "sentence-case" ]
    }
}
