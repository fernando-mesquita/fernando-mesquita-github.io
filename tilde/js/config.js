const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
  commands: [{
      name: 'Duckduckgo',
      key: '*',
      url: 'https://duckduckgo.com',
      search: '/?q={}'
    },
    {
      category: 'GTD',
      name: 'Todoist',
      key: 't',
      url: 'https://todoist.com',
      search: '',
      color: 'linear-gradient(135deg, #cd201f, #cd4c1f)',
      icon: 'todoist',
      quickLaunch: true,
    },             
    {
      category: 'GTD',
      name: 'Outlook',
      key: 'ou',
      url: 'https://outlook.com',
      search: '',
      color: 'linear-gradient(135deg, #4599dd, #083dff)',
      icon: 'mail',
      quickLaunch: true,
    },

             
    {
      category: 'Arquivos',
      name: 'Onedrive',
      key: 'on',
      url: 'https://onedrive.com',
      search: '',
      color: 'linear-gradient(135deg, #4599dd, #083dff)',
      icon: 'drive',
      quickLaunch: false,
    },             
    {
      category: 'Arquivos',
      name: 'GitHub',
      key: 'g',
      url: 'https://github.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #2b2b2b, #3b3b3b)',
      icon: 'github',
      quickLaunch: true,
    },

             
    {
      category: 'Social',
      name: 'Telegram',
      key: 'tg',
      url: 'https://web.telegram.org',
      color: '#5682a3',
      icon: 'telegram',
      quickLaunch: false,
    },
    {
      category: 'Social',
      name: 'WhatsApp',
      key: 'w',
      url: 'https://web.whatsapp.com',
      color: 'linear-gradient(135deg, #25D366, #128C7E, #075E54)',
      icon: 'whatsapp',
      quickLaunch: false,
    },
    {
      category: 'Social',
      name: 'Reddit',
      key: 'r',
      url: 'https://reddit.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'reddit',
      quickLaunch: false,
    },
    {
      category: 'Social',
      name: 'Instagram',
      key: 'i',
      url: 'https://www.instagram.com',
      color: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
      icon: 'instagram',
      quickLaunch: true,
    },                   


    {
      category: 'Mídia',
      name: 'YouTube',
      key: 'y',
      url: 'https://youtube.com',
      search: '/results?search_query={}',
      color: 'linear-gradient(135deg, #cd201f, #cd4c1f)',
      icon: 'youtube',
      quickLaunch: false,
    },
    {
      category: 'Mídia',
      name: 'Netflix',
      key: 'n',
      url: 'https://www.netflix.com',
      color: 'linear-gradient(135deg, #E50914, #CB020C)',
      icon: 'netflix',
      quickLaunch: false,
    },
    {
      category: 'Mídia',
      name: 'Spotify',
      key: 's',
      url: 'https://open.spotify.com/',
      search: '/search/{}',
      color: '#1dd35e',
      icon: 'spotify',
      quickLaunch: false,
    },
  ],

  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 4,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Commands" suggestions come from CONFIG.commands
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [{
      name: 'Commands',
      limit: 2
    },
    {
      name: 'Default',
      limit: 4
    },
    {
      name: 'History',
      limit: 1
    },
    {
      name: 'DuckDuckGo',
      limit: 4
    },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {
    g: ['g/issues', 'g/pulls', 'gist.github.com'],
    r: ['r/r/unixporn', 'r/r/startpages', 'r/r/webdev', 'r/r/technology'],
  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: false,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: true,

  /**
   * Invert color theme
   */
  invertedColors: false,

  /**
   * Show keys instead of icons
   */
  showKeys: false,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: ':',

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: '/',

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: ' ',

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: true,

  /**
   * File extension for icon images
   */
  iconExtension: 'png'
};
