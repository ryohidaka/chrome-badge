import { Badge } from "../src/Badge";
import { BadgeProps, BadgeStatus } from "../src/types";

jest.mock("chrome", () => ({
  action: {
    setBadgeText: jest.fn(),
    setBadgeTextColor: jest.fn(),
    setBadgeBackgroundColor: jest.fn(),
    getBadgeText: jest.fn().mockImplementation(() => Promise.resolve()),
    getBadgeTextColor: jest.fn().mockImplementation(() => Promise.resolve()),
    getBadgeBackgroundColor: jest
      .fn()
      .mockImplementation(() => Promise.resolve()),
  },
}));

describe("Badge", () => {
  describe("set", () => {
    it("should set badge text, color and background color", async () => {
      const badgeProps: BadgeProps = {
        text: "test",
        tabId: 1,
        textColor: "#000000",
        backgroundColor: "#ffffff",
        callback: jest.fn(),
      };

      await Badge.set(badgeProps);

      expect(chrome.action.setBadgeText).toHaveBeenCalledWith({
        text: badgeProps.text,
        tabId: badgeProps.tabId,
      });
      expect(chrome.action.setBadgeTextColor).toHaveBeenCalledWith({
        color: badgeProps.textColor,
        tabId: badgeProps.tabId,
      });
      expect(chrome.action.setBadgeBackgroundColor).toHaveBeenCalledWith({
        color: badgeProps.backgroundColor,
        tabId: badgeProps.tabId,
      });
      expect(badgeProps.callback).toHaveBeenCalled();
    });
  });

  describe("get", () => {
    it("should get badge text, color and background color", async () => {
      const tabId = 1;
      const badgeStatus: BadgeStatus = {
        text: "test",
        textColor: "#000000",
        backgroundColor: "#ffffff",
      };

      (chrome.action.getBadgeText as jest.Mock).mockResolvedValue(
        badgeStatus.text,
      );
      (chrome.action.getBadgeTextColor as jest.Mock).mockResolvedValue(
        badgeStatus.textColor,
      );
      (chrome.action.getBadgeBackgroundColor as jest.Mock).mockResolvedValue(
        badgeStatus.backgroundColor,
      );

      const result = await Badge.get(tabId);

      expect(result).toEqual(badgeStatus);
      expect(chrome.action.getBadgeText).toHaveBeenCalledWith({ tabId });
      expect(chrome.action.getBadgeTextColor).toHaveBeenCalledWith({ tabId });
      expect(chrome.action.getBadgeBackgroundColor).toHaveBeenCalledWith({
        tabId,
      });
    });
  });
});
