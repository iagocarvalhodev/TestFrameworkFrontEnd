import { AppPage } from './app.po'
import { browser, logging } from 'protractor'

describe('Framework Test E2E', () => {
  let page: AppPage

  beforeEach(() => {
    page = new AppPage()
  })

  it('should display the framework title', () => {
    page.navigateTo()
    expect(page.getPageTitle()).toEqual('Framework')
  })

  it('should navigate correctly', () => {
    page.navigateTo()
    browser.sleep(1000)
    page.navigateTo('/posts')
    browser.sleep(1000)
    page.navigateTo('/todos')
    browser.sleep(1000)
    page.navigateTo('/albums')

    expect(
      page.getText(
        'body > app-root > app-albums > app-layout > div > section > table > tbody > tr:nth-child(1) > td.mat-cell.cdk-cell.cdk-column-title.mat-column-title'
      )
    ).toEqual('quidem molestiae enim')
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER)
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    )
  })
})
