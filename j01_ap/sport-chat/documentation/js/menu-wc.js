'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">sport-chat documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b93013eaf2026511de7a6d111c753ab7"' : 'data-target="#xs-components-links-module-AppModule-b93013eaf2026511de7a6d111c753ab7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b93013eaf2026511de7a6d111c753ab7"' :
                                            'id="xs-components-links-module-AppModule-b93013eaf2026511de7a6d111c753ab7"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ChatModule.html" data-type="entity-link">ChatModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChatModule-1e026711bd5976c560a7a10d7c16cf08"' : 'data-target="#xs-components-links-module-ChatModule-1e026711bd5976c560a7a10d7c16cf08"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChatModule-1e026711bd5976c560a7a10d7c16cf08"' :
                                            'id="xs-components-links-module-ChatModule-1e026711bd5976c560a7a10d7c16cf08"' }>
                                            <li class="link">
                                                <a href="components/ChatComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChatComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatTopicComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChatTopicComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ScreenModule.html" data-type="entity-link">ScreenModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ScreenModule-aa3c321bafe7afb117449356ee5fb3d9"' : 'data-target="#xs-components-links-module-ScreenModule-aa3c321bafe7afb117449356ee5fb3d9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ScreenModule-aa3c321bafe7afb117449356ee5fb3d9"' :
                                            'id="xs-components-links-module-ScreenModule-aa3c321bafe7afb117449356ee5fb3d9"' }>
                                            <li class="link">
                                                <a href="components/ScreenChatComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScreenChatComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScreenHomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScreenHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScreenShopComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScreenShopComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ShopModule.html" data-type="entity-link">ShopModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ShopModule-e02c8d6a6e699b3cc36ad0bfd45cb474"' : 'data-target="#xs-components-links-module-ShopModule-e02c8d6a6e699b3cc36ad0bfd45cb474"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ShopModule-e02c8d6a6e699b3cc36ad0bfd45cb474"' :
                                            'id="xs-components-links-module-ShopModule-e02c8d6a6e699b3cc36ad0bfd45cb474"' }>
                                            <li class="link">
                                                <a href="components/ShopButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShopButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShopComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShopComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShopListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShopListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShopProductComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShopProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShopTitleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShopTitleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SportModule.html" data-type="entity-link">SportModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SportModule-c0749df1757007a95b814f286d4e110b"' : 'data-target="#xs-components-links-module-SportModule-c0749df1757007a95b814f286d4e110b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SportModule-c0749df1757007a95b814f286d4e110b"' :
                                            'id="xs-components-links-module-SportModule-c0749df1757007a95b814f286d4e110b"' }>
                                            <li class="link">
                                                <a href="components/SportBannerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SportBannerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserModule-95d009c920b50226fe94381672eba90a"' : 'data-target="#xs-components-links-module-UserModule-95d009c920b50226fe94381672eba90a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-95d009c920b50226fe94381672eba90a"' :
                                            'id="xs-components-links-module-UserModule-95d009c920b50226fe94381672eba90a"' }>
                                            <li class="link">
                                                <a href="components/UserConnexionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserConnexionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});