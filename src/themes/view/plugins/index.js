import footer from '@plugins/footer'
import highlight from '@plugins/highlight'
import copy from '@plugins/copy'
import linenumbers from '@plugins/linenumbers'
import imagebox from '@plugins/imagebox'
import emoji from '@plugins/emoji'
import player from '@plugins/player'
import postMessage from '@plugins/postMessage'
import postSignature from '@plugins/postSignature'
import notice from '@plugins/notice'
import signature from '@plugins/signature'
import commentsAvatars from '@plugins/commentsAvatars'
import notation from '@plugins/notation'
import menu from './menu'
// import donation from '@plugins/donation'
// import themeColor from '@plugins/themeColor'
// import titleFavicon from '@plugins/titleFavicon'
// import postTopimage from '@plugins/postTopimage'
// import live2d from '@plugins/live2d'
// import background from '@plugins/background'
// import click from '@plugins/click'
// import lock from '@plugins/lock'
// import postBottomimage from '@plugins/postBottomimage'

const plugins = () => {
    footer()
    highlight()
    copy()
    linenumbers()
    imagebox()
    emoji()
    postMessage()
    postSignature()
    notice()
    signature()
    commentsAvatars()
    menu()
    notation()
    player()
    // themeColor()
    // donation()
    // postTopimage()
    // titleFavicon()
    // live2d()
    // background()
    // postBottomimage()
    // lock()
    // click()
}

module.exports = plugins