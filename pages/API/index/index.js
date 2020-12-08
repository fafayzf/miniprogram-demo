Page({
  onShareAppMessage() {
    return {
      title: '小程序接口能力展示',
      path: 'pages/API/index'
    }
  },
  data: {
    list: [{
      id: 'base',
      name: '基础',
      open: false,
      pages: [
      {
        zh: 'buffer',
        url: 'buffer/buffer'
      },
      {
        zh: '获取小程序启动参数',
        url: 'launch-options/launch-options'
      },
      {
        zh: '应用级事件',
        url: 'app-level-event/app-level-event'
      },
      {
        zh: '定时器',
        url: 'timmer/timmer'
      },
      {
        zh: '路由',
        url: 'router/router'
      }
      ],
    },
      {
        id: 'page',
        name: '界面',
        open: false,
        pages: [
          {
            zh: '交互',
            url: 'intereaction/intereaction'
          },
          {
            zh: '导航栏',
            url: 'navigationBar/navigationBar'
          },
          {
            zh: '设置TabBar',
            url: '@set-tab-bar'
          },
        ]
      }, {
        id: 'device',
        name: '设备',
        open: false,
        pages: [
          {
            zh: '获取手机网络状态',
            url: 'get-network-type/get-network-type'
          }, {
            zh: '监听手机网络变化',
            url: 'on-network-status-change/on-network-status-change'
          }, {
            zh: '获取手机系统信息',
            url: 'get-system-info/get-system-info'
          }, {
            zh: '打电话',
            url: 'make-phone-call/make-phone-call'
          }, {
            zh: '扫码',
            url: 'scan-code/scan-code'
          },{
            zh: '剪切板',
            url: 'clipboard-data/clipboard-data'
          }, 
          // {
          //   zh: '屏幕亮度',
          //   url: 'screen-brightness/screen-brightness'
          // }, {
          //   zh: '振动',
          //   url: 'vibrate/vibrate'
          // }, {
          //   zh: '手机联系人',
          //   url: 'add-contact/add-contact'
          // }
        ]
      }, {
        id: 'network',
        name: '网络',
        open: false,
        pages: [
          {
            zh: '发起一个请求',
            url: 'request/request'
          }, {
            zh: 'WebSocket',
            url: 'web-socket/web-socket'
          }, {
            zh: '上传文件',
            url: 'upload-file/upload-file'
          }, {
            zh: '下载文件',
            url: 'download-file/download-file'
          }
        ]
      }, {
        id: 'media',
        name: '媒体',
        open: false,
        pages: [
          {
            zh: '图片',
            url: 'image/image'
          }, {
            zh: '音频',
            url: 'audio/audio'
          }, {
            zh: '录音',
            url: 'voice/voice'
          }, {
            zh: '视频',
            url: 'video/video'
          }, {
            zh: '动态加载字体',
            url: 'load-font-face/load-font-face'
          }
        ]
      }, {
        id: 'location',
        name: '位置',
        open: false,
        pages: [
          {
            zh: '获取当前位置',
            url: 'get-location/get-location'
          }, {
            zh: '使用原生地图选择位置',
            url: 'choose-location/choose-location'
          }
        ]
      }, {
        id: 'storage',
        name: '数据',
        pages: [{
          zh: '本地存储',
          url: 'storage/storage'
        }],
      }
    ],
    isSetTabBarPage: false,
    theme: 'light'
  },
  onShow() {
    this.leaveSetTabBarPage()
  },
  onHide() {
    this.leaveSetTabBarPage()
  },
  kindToggle(e) {
    const id = e.currentTarget.id; const
      list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        if (list[i].url) {
          wx.navigateTo({
            url: '/pages/' + list[i].url
          })
          return
        }
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
  },
  enterSetTabBarPage() {
    this.setData({
      isSetTabBarPage: true
    })
  },
  leaveSetTabBarPage() {
    this.setData({
      isSetTabBarPage: false
    })
  },
})
