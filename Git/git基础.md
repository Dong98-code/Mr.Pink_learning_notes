Git

## 工作原理

检测文件变化：

40个16进制字符（0-9和a-f）字符串

修改文件，git修改文件的状态：

`git status`：查询

![20220906155910](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220906155910.png)

![20220906155950](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220906155950.png)

## fork  clone branch概念

使用 git branch 创建新的分支； 
使用`git checkout` 切换到另一个分支

### fork 

![20220906160327](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220906160327.png)

![20220906160358](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220906160358.png)


## 常见 的git 命令

`git init `初始化一个git代码库

![20220906160626](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220906160626.png)

![20220906160718](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220906160718.png)

![20220906160850](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220906160850.png)

![20220906160907](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220906160907.png)

## git fetch 和 git pull
使用：

`git fetch`:`git fetch <远程主机名> <远程分支名>:<本地分支名>`

需要使用 git merge合并

![20220906161405](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220906161405.png)


## git stach

存放 ： 暂存区和工作区的改动 进行保存； 
之后可以 讲某次的修改 推出来 

![20220906161742](https://xd-imgsubmit.oss-cn-beijing.aliyuncs.com/images/20220906161742.png)

## git merge 和git rebase