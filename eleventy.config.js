import { DateTime } from 'luxon';

export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");

    eleventyConfig.addShortcode("currentYear", () => `${new Date().getFullYear()}`);

    eleventyConfig.addFilter("dateToFormat", (date, format) => {
        return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat(
            String(format)
        )
    });

    return {
        dir: {
            input: "src"
        },
        pathPrefix: "/resume/",
    };
};