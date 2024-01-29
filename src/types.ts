/**
 * Properties for the badge.
 */
export type BadgeProps = {
  text: string; // The text to be displayed on the badge.
  tabId?: number; // The ID of the tab where the badge is displayed.
  textColor?: Color; // The color of the badge text.
  backgroundColor?: Color; // The background color of the badge.
  callback?: () => void; // A callback function to be executed after setting the badge.
};

/**
 * Status of the badge.
 */
export type BadgeStatus = {
  text: string; // The text displayed on the badge.
  textColor?: Color; // The color of the badge text.
  backgroundColor?: Color; // The background color of the badge.
};

/**
 * Type for the color details of the badge.
 */
type Color = chrome.action.BadgeColorDetails["color"];
