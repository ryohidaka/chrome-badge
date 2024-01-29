import { BadgeProps, BadgeStatus } from "./types";

/**
 * Badge object for managing badge text, color and background color.
 */
export const Badge = {
  /**
   * Sets the badge text, text color, and background color.
   * @param {BadgeProps} badgeProps - The properties for the badge.
   * @returns {Promise<void>}
   */
  set: async ({
    text = "",
    tabId,
    textColor = "",
    backgroundColor = "",
    callback,
  }: BadgeProps): Promise<void> => {
    try {
      await chrome.action.setBadgeText({ text, tabId });
      await chrome.action.setBadgeTextColor({ color: textColor, tabId });
      await chrome.action.setBadgeBackgroundColor({
        color: backgroundColor,
        tabId,
      });

      callback?.();
    } catch (error) {
      console.error(error);
    }
  },

  /**
   * Gets the badge text, text color, and background color.
   * @param {number} tabId - The ID of the tab.
   * @returns {Promise<BadgeStatus | undefined>}
   */
  get: async (tabId?: number): Promise<BadgeStatus | undefined> => {
    try {
      const text = await chrome.action.getBadgeText({ tabId });
      const textColor = await chrome.action.getBadgeTextColor({ tabId });
      const backgroundColor = await chrome.action.getBadgeBackgroundColor({
        tabId,
      });

      return { text, textColor, backgroundColor };
    } catch (error) {
      console.error(error);
    }
  },
};
