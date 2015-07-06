/**
* admin-projects Module
*
* Description
*/
angular.module('admin-projects', []);

.controller('ProjectsListCtrl', function($scope){
  // 这里是控制器的代码
})


.controller('ProjectsEditCtrl', function($scope){
  // 这里是控制器的代码
})



//声明配置和运行块的语法

//启动 Angularjs 的过程分为配置阶段和运行阶段,每个模块可以有多个配置和运行块
// 注册将在配置阶段运行的函数有两种方法

angular.module('admin-projects',[],function(){
  //  这里是配置逻辑
})

// 我们用另一种


angular.module('admin-projects',[])
  .config(function() {
     // 配置模块1
  })
  .config(function() {
     // 配置模块2
  })

