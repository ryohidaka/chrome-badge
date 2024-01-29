global.chrome = {
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
};
