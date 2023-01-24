import React from 'react';

const Cookies2 = () => {
    return (
        <div class="cky-consent-bar cky-box box-bottom-right" style={{background:`#000`,color:`#fff`,border:`1px solid #4f5461`, top:`auto`, right:`2px`, bottom:`20px`,left:`auto`}} id="cky-consent">
            <div class="cky-consent-title" style={{color:`#fff`}} cky-i18n="gdpr.notice.title">Cookie consent</div>
                <div class="cky-content-wrapper">
                    <p class="cky-bar-text" style={{color:`#fff`}} cky-i18n="gdpr.notice.text">This website uses cookies that help the website to function and also to track how you interact with it. We will only use the cookies if you consent to it by clicking on Accept. You can also manage individual cookie preferences from Settings.<a class="cky-btn-readMore" style={{color:`#e48026`,backgroundColor:`transparent`,borderColor:`transparent`}} rel="noreferrer" id="cky-btn-readMore" href="https://www.solutions4mobiles.com/terms" target="_blank" cky-i18n="gdpr.buttons.readMore.title">Read More</a></p>
                <div class="cky-button-wrapper"><button class="cky-btn cky-btn-settings" style={{color:`#3098d5`,backgroundColor:`transparent`,borderColor:`transparent`}} id="cky-btn-settings" cky-i18n="gdpr.buttons.settings.title">Preferences</button><button class="cky-btn cky-btn-accept" style={{color:`#fff`,backgroundColor:`#3098d5`,borderColor:`#3098d5`}} id="cky-btn-accept" cky-i18n="gdpr.buttons.accept.title">Accept</button>
                </div>
            </div>
        </div>
    );
};

export default Cookies2;