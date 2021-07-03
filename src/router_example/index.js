module.exports = {
  globalStyle: {
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'uni-app',
    navigationBarBackgroundColor: '#F8F8F8',
    backgroundColor: '#F8F8F8'
  },
  tabBar: {
    color: '#666',
    selectedColor: '#4a9ff8',
    backgroundColor: '#f7f7f7',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/example/index',
        iconPath: 'static/example/ic_homepage_normal.png',
        selectedIconPath: 'static/example/ic_homepage_selected.png',
        text: '组件'
      },
      {
        pagePath: 'pages/example/icon',
        iconPath: 'static/example/ic_find_normal.png',
        selectedIconPath: 'static/example/ic_find_selected.png',
        text: '内置图标'
      },
      {
        pagePath: 'pages/example/commoncss',
        iconPath: 'static/example/ic_template_card.png',
        selectedIconPath: 'static/example/ic_template.png',
        text: '全局功能'
      }
    ]
  }
}
