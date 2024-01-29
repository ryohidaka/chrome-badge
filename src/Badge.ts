import { BadgeProps } from "./types";

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
};
