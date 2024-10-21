import { expect } from 'chai';
import streamingServiceSelector from '../streamingServiceSelector.js';

describe("Streaming Service Selector Tests", function() {
    describe("selectingContent", function() {
        it("should return a message for valid input", function() {
            const result = streamingServiceSelector.selectingContent("Movie", "Netflix", "Action");
            expect(result).to.equal("You can watch this Action Movie on Netflix. Enjoy your Action-filled experience!");
        });

        it("should throw error for unsupported genre", function() {
            expect(() => streamingServiceSelector.selectingContent("Movie", "Netflix", "Adventure")).to.throw("We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.");
        });

        it("should throw error for unsupported type", function() {
            expect(() => streamingServiceSelector.selectingContent("Documentary", "Netflix", "Action")).to.throw("We currently only support 'Movie' or 'TV Show' types.");
        });
    });

    describe("availablePlatforms", function() {
        it("should return other available platforms", function() {
            const platforms = ["Netflix", "HBO", "Disney+"];
            const result = streamingServiceSelector.availablePlatforms(platforms, 1);
            expect(result).to.equal("Other available platforms are: Netflix, Disney+.");
        });

        it("should throw error for invalid platform selection", function() {
            expect(() => streamingServiceSelector.availablePlatforms("not an array", 0)).to.throw("Invalid platform selection.");
            expect(() => streamingServiceSelector.availablePlatforms(["Netflix"], -1)).to.throw("Invalid platform selection.");
            expect(() => streamingServiceSelector.availablePlatforms(["Netflix"], 2)).to.throw("Invalid platform selection.");
        });
    });

    describe("contentRating", function() {
        it("should return a message for highly rated content", function() {
            const result = streamingServiceSelector.contentRating(120, 8);
            expect(result).to.equal("This content is highly rated (8/10) and has a runtime of 2.00 hours. Enjoy your watch!");
        });

        it("should return a message for lower rated content", function() {
            const result = streamingServiceSelector.contentRating(90, 5);
            expect(result).to.equal("This content has a lower rating (5/10) and runs for 1.50 hours. You might want to check reviews first.");
        });

        it("should throw error for invalid runtime or rating", function() {
            expect(() => streamingServiceSelector.contentRating(-10, 5)).to.throw("Invalid runtime or rating.");
            expect(() => streamingServiceSelector.contentRating(90, 11)).to.throw("Invalid runtime or rating.");
            expect(() => streamingServiceSelector.contentRating(90, "good")).to.throw("Invalid runtime or rating.");
        });
    });
});
