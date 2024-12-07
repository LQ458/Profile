hexo.extend.helper.register('getLocalizedUrl', function (input) {
  const currentLang = this.page.lang
  const defaultLang = this.config.language[0]
  const supportedLangs = this.config.language

  // 判断输入是否为语言代码
  const isLangCode = supportedLangs.includes(input)

  // 如果是语言代码,按语言切换处理
  if (isLangCode) {
    if (input === defaultLang) {
      return '/'
    }
    return '/' + input
  }

  // 如果是路径,移除 index.html 后返回
  let path = input

  // 如果是外部链接或邮件链接,直接返回
  if (
    path.startsWith('http') ||
    path.startsWith('mailto:') ||
    path.includes('mailto:')
  ) {
    return path
  }

  // 检查是否为文章页面（包含年份格式）
  const isPost = /\/\d{4}\/\d{2}\/\d{2}\//.test(path)

  // 如果是根路径
  if (path === '' || path === '/') {
    if (currentLang === defaultLang) {
      return '/'
    }
    return '/' + currentLang
  }

  // 移除现有的语言前缀
  supportedLangs.forEach(lang => {
    const langPrefix = new RegExp(`^${lang}\/`, 'i')
    path = path.replace(langPrefix, '')
  })

  // 如果是文章页面,所有语言都添加前缀
  if (isPost) {
    return (
      '/' +
      currentLang +
      '/' +
      path.replace(/^\/+/, '').replace(/\/index\.html$/, '')
    )
  }

  // 非文章页面,默认语言不加前缀
  if (currentLang === defaultLang) {
    return '/' + path.replace(/^\/+/, '').replace(/\/index\.html$/, '')
  }

  // 其他语言添加前缀
  return (
    '/' +
    currentLang +
    '/' +
    path.replace(/^\/+/, '').replace(/\/index\.html$/, '')
  )
})
