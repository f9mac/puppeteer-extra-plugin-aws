const { PuppeteerExtraPlugin } = require('puppeteer-extra-plugin');

class Plugin extends PuppeteerExtraPlugin {
  constructor (config = {}) {
    super(config);
  }

  get name () {
    return 'aws'
  }

  get defaults () {
    return {
      args: [
        '--disable-background-timer-throttling',
        '--disable-breakpad',
        '--disable-client-side-phishing-detection',
        '--disable-cloud-import',
        '--disable-default-apps',
        '--disable-dev-shm-usage',
        '--disable-extensions',
        '--disable-gesture-typing',
        '--disable-hang-monitor',
        '--disable-infobars',
        '--disable-notifications',
        '--disable-offer-store-unmasked-wallet-cards',
        '--disable-offer-upload-credit-cards',
        '--disable-popup-blocking',
        '--disable-print-preview',
        '--disable-prompt-on-repost',
        '--disable-setuid-sandbox',
        '--disable-speech-api',
        '--disable-sync',
        '--disable-tab-for-desktop-share',
        '--disable-translate',
        '--disable-voice-input',
        '--disable-wake-on-wifi',
        '--enable-async-dns',
        '--enable-simple-cache-backend',
        '--enable-tcp-fast-open',
        '--enable-webgl',
        '--hide-scrollbars',
        '--ignore-gpu-blacklist',
        '--media-cache-size=33554432',
        '--metrics-recording-only',
        '--mute-audio',
        '--no-default-browser-check',
        '--no-first-run',
        '--no-pings',
        '--no-sandbox',
        '--no-zygote',
        '--password-store=basic',
        '--prerender-from-omnibox=disabled',
        '--use-gl=swiftshader',
        '--use-mock-keychain',
        '--single-process'
      ]
    }
  }

  async beforeLaunch (options) {
    this.debug('adding browser args: %s', this.opts.args);
    options.args.push(...this.opts.args)
    return options;
  }
}

module.exports = pluginConfig => new Plugin(pluginConfig);
