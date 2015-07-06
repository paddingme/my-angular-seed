<code>
<pre>
-app
  -- dist  (线上环境)
  -- docs  (文档)
  -- src   (生产环境)
    --- common  (共用组件)
      ---- directives (指令)
      ---- services (服务)
    --- styles (样式表)
    --- images (图片)
    --- modules （各模块）
    ---- login
      ----- view1.js （controller）
      ----- view1.html (子模板)
      ----- view2.js （controller）
      ----- view2.html (子模板)
    --- vendor (第三方插件)
    --- app.js (angular js 配置以及启动入口js)
    --- index.html （布局模板）
  -- test  (单元测试和端到端测试)
  -- gulpfile.js (gulp 构建配置文件)
  -- package.json
</pre></code>