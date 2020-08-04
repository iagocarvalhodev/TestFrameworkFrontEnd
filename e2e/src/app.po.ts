import { browser, by, element } from 'protractor'

export class AppPage {
  navigateTo(url?: string): Promise<unknown> {
    return browser.get(`${browser.baseUrl}${url}`) as Promise<unknown>
  }

  getPageTitle(): Promise<string> {
    return browser.getTitle() as Promise<string>
  }

  getText(selector: string): Promise<string> {
    return element(by.css(selector)).getText() as Promise<string>
  }
}
