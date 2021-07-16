module.exports = {
  baseUrl: 'pages/example/',
  subPackages: true,
  root: 'pagesChart',
  children: [
    {
      path: 'line/line',
      name: '折线图'
    },
    {
      path: 'pie/pie',
      name: '饼图'
    },
    {
      path: 'column/column',
      name: '柱状图'
    }
  ]
}
