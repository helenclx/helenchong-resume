import { DateTime } from 'luxon';

export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    eleventyConfig.addFilter("dateToFormat", (date) => {
        const dateFormat = "LLLL yyyy";
        if (typeof date === "object") {
            return DateTime.fromJSDate(date).toFormat(dateFormat);
        }
        return DateTime.fromISO(date, { setZone: true }).toFormat(dateFormat);
    });

    return {
        dir: {
            input: "src"
        },
        pathPrefix: "/resume/",
    };
};