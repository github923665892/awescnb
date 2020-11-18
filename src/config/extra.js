/**
 * 插件以外的配置
 */
import { mergeOptions } from '@tools'

/**
 * 皮肤基本配置
 * @param {*} devOptions
 */
function getThemeOptions(devOptions) {
    const defaultThemeOptions = {
        name: 'reacg',
        color: '#FFB3CC',
        title: '',
        avatar: 'https://api.uomg.com/api/rand.avatar',
        favicon: '',
        contentSize: 'mid', // disabled
        headerBackground:
            'https://api.uomg.com/api/rand.avatar',
    }
    const options = mergeOptions(
        defaultThemeOptions,
        window.opts.theme,
        devOptions,
    )
    return options
}

/**
 * 自定义链接
 * @param {*} devOptions
 */
function getLinksOptions(devOptions) {
    const defaultLinks = devOptions || [
        {
            name: '自定义链接',
            link: '',
        },
    ]
    const options = window.opts.links || defaultLinks
    return options
}

/**
 * GitHub 配置
 * @param {*} devOptions
 */
function getGithubOptions(devOptions) {
    const defaultThemeOptions = {
        enable: true,
        color: '#ffb3cc',
        url: '',
    }
    const options = mergeOptions(
        defaultThemeOptions,
        window.opts.github,
        devOptions,
    )
    return options
}

/**
 * Gitee 配置
 * @param {*} devOptions
 */
function getGiteeOptions(devOptions) {
    const defaultThemeOptions = {
        enable: true,
        color: '#C71D23',
        url: '',
    }
    const options = mergeOptions(
        defaultThemeOptions,
        window.opts.gitee,
        devOptions,
    )
    return options
}

/**
 * 首页图片列表配置
 * @param {*} devOptions
 */
function getIndexListImgOptions(devOptions) {
    const defaultThemeOptions = {
        enable: false,
        imgs: [],
    }
    const options = mergeOptions(
        defaultThemeOptions,
        window.opts.indexListImg,
        devOptions,
    )
    return options
}

export {
    getThemeOptions,
    getLinksOptions,
    getGithubOptions,
    getGiteeOptions,
    getIndexListImgOptions,
}
