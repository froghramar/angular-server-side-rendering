import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject, PLATFORM_ID, APP_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { isPlatformBrowser } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'angular-server-side-rendering'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
  @Inject(APP_ID) private appId: string){
    const platform = isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
