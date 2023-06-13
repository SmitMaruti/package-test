const gulp = require("gulp");
const conventionalRecommendedBump = require("conventional-recommended-bump");
const conventionalGithubReleaser = require("conventional-github-releaser");
const execa = require("execa");
const fs = require("fs");
const { promisify } = require("util");
const dotenv = require("dotenv");

// load environment variables
const result = dotenv.config();

if (result.error) {
    throw result.error;
}
