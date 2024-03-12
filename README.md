# genshen-impact
<a name="kVt0h"></a>
## 1.写在前面
最近闲来无事，学习了前端的HTML+CSS还有javascript，刚好想要做点什么项目练练手，但是我自己写网页吧，还要自己进行网页设计，布局什么的还要自己想。我嫌太麻烦，还不如找个现成的网页模仿做一个不香嘛。<br />于是乎打开了原神官网（原神，启动！）觉得布局还不错，就决定模仿着试一下，就当给自己这段时间的学习做个总结。
<a name="YSfr3"></a>
## 2.网页展示
话不多说，先看图：<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/38957757/1709533970213-24e4ac74-21fd-47e2-ae38-81511b96d1a3.png#averageHue=%23d3d6cd&clientId=ue29a3aa1-dc4b-4&from=paste&height=327&id=udd7eee01&originHeight=853&originWidth=1917&originalType=binary&ratio=1.6500000953674316&rotation=0&showTitle=false&size=3703887&status=done&style=none&taskId=u54f248c1-d3a6-4bec-ad44-387d1d4e5f7&title=&width=734.8333129882812)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/38957757/1709533988083-eb26336b-d078-4199-8cb9-fc2e283f455d.png#averageHue=%23a89269&clientId=ue29a3aa1-dc4b-4&from=paste&height=518&id=u888b16b2&originHeight=855&originWidth=1889&originalType=binary&ratio=1.6500000953674316&rotation=0&showTitle=false&size=708756&status=done&style=none&taskId=u220dfc63-5c31-4552-9b85-82c3e8fceff&title=&width=1144.8484186780283)![image.png](https://cdn.nlark.com/yuque/0/2024/png/38957757/1709534013497-4e629791-6729-47d4-8549-35100b6a0fde.png#averageHue=%2349675d&clientId=ue29a3aa1-dc4b-4&from=paste&height=518&id=udd0af2eb&originHeight=855&originWidth=1893&originalType=binary&ratio=1.6500000953674316&rotation=0&showTitle=false&size=3025786&status=done&style=none&taskId=uf1183db3-b3cb-4cd7-a0b3-71358fb4525&title=&width=1147.2726609621534)<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/38957757/1709534287450-e1c1580c-8b39-4913-af2f-4ec7423c392f.png#averageHue=%23567976&clientId=ue29a3aa1-dc4b-4&from=paste&height=516&id=uba3462b5&originHeight=851&originWidth=1918&originalType=binary&ratio=1.6500000953674316&rotation=0&showTitle=false&size=2503780&status=done&style=none&taskId=u25508d07-eab8-40ee-aa76-101fda180e2&title=&width=1162.4241752379346)<br />还有一些没有展示的，算了，那就先不展示了。其实我只完成了一小部分的网页**首页**，**新闻**，**角色**和**漫画**，要是全部都做下来对我这种新手来说也不太可能。而且每个页面也不是完全模仿，也都有自己的一些想法（当然也有可能有些效果是作者做不出来，所以放弃了...），总体来说，对自己做的还算满意。<br />这是文件夹目录：<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/38957757/1709534130744-7bea0574-08c6-4f3e-b254-e8c5b353cae2.png#averageHue=%2320201f&clientId=ue29a3aa1-dc4b-4&from=paste&height=615&id=uedce4e8c&originHeight=1014&originWidth=1920&originalType=binary&ratio=1.6500000953674316&rotation=0&showTitle=false&size=274845&status=done&style=none&taskId=u123bb54c-4e96-49c4-af62-918fa896dbd&title=&width=1163.636296379997)<br />做这种项目，文件夹的分类还是很重要的，各种功能的文件都要区分好，不然要引用的时候找不到就麻烦了，或者修改也麻烦。
<a name="iBxoE"></a>
## 3.布局技巧
首先是顶部的导航栏制作，这个感觉比较麻烦。它首先要固定在顶部，用position：fixed可以解决，然后导航栏的每个导航模块，使用的是向左浮动，并在一排，在集体对这些模块进行修饰。<br />还有一个就是我也加上了音乐模块，也在导航栏上，点击音乐按钮，音乐停止，出现禁止的标志；再次点击，禁止标志消失，音乐自动播放。就是下面最左边的那个图案：<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/38957757/1709534796648-ae4cb757-e132-4d83-beba-62bf17442f2c.png#averageHue=%233b4144&clientId=ue29a3aa1-dc4b-4&from=paste&height=59&id=uc885fd63&originHeight=98&originWidth=1901&originalType=binary&ratio=1.6500000953674316&rotation=0&showTitle=false&size=111291&status=done&style=none&taskId=uf4cffa85-70c9-44b2-8a6c-641b7b38e11&title=&width=1152.1211455304033)<br />首页的话基本没什么可说的，我们看新闻页面，这三个盒子采用的是装在一个大盒子里，这个大盒子采用flex布局，让这三个小盒子并排在一排，并且垂直居中。<br />每个小盒子下面的时间是实时的，用js调Date对象，显示出来就行。<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/38957757/1709534936038-7fb6a49b-453b-4b56-93dd-48f968c403de.png#averageHue=%2349665e&clientId=ue29a3aa1-dc4b-4&from=paste&height=245&id=u5e50b2a7&originHeight=405&originWidth=1133&originalType=binary&ratio=1.6500000953674316&rotation=0&showTitle=false&size=1044441&status=done&style=none&taskId=u31084a61-7546-48db-8ab1-c23efa5d183&title=&width=686.6666269784045)<br />包括下面的这些盒子，采用的也是flex布局。感觉flex确实好用，让子元素垂直居中方法最简单，不用一个滋贺子一个子盒子一个子盒子的修改，真的方便。<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/38957757/1709535070764-5b6524d5-a446-4c0d-88c2-94b583dbdd12.png#averageHue=%23f7f5f3&clientId=ue29a3aa1-dc4b-4&from=paste&height=210&id=ucb58d9db&originHeight=596&originWidth=1840&originalType=binary&ratio=1.6500000953674316&rotation=0&showTitle=false&size=469682&status=done&style=none&taskId=u42f31275-e7b9-4080-b90e-db098e484a0&title=&width=649.850341796875)<br />另外要说的就是角色页面了，我是做了个简单的入场动画的。点击左边的城市，右边的人物会有一个从页面右边到左边的入场动画的。<br />还有我发现我点击城市的时候，该城市盒子有个向右的滑动，但是却会影响其他城市盒子，发生抖动。研究过后我发现，城市向右滑动的时候会撑开它们的父盒子，于是乎我将父盒子宽度加宽，抖动的问题就解决了，没有抖动看起来就是丝滑啊。<br />![image.png](https://cdn.nlark.com/yuque/0/2024/png/38957757/1709535353648-db7f585c-6b10-45e4-ac35-b5bea752370d.png#averageHue=%23607884&clientId=ue29a3aa1-dc4b-4&from=paste&height=511&id=tWaR6&originHeight=843&originWidth=1906&originalType=binary&ratio=1.6500000953674316&rotation=0&showTitle=false&size=2768966&status=done&style=none&taskId=u948641a5-13b7-4709-86b5-7015e6f8d21&title=&width=1155.1514483855594)<br />这个我一开始的想法是用js排他思想，想法没错，但是就是做不出来这个效果，后来我把js的代码改成了jquery，就可以了?! 好神奇，以后有时间一定研究研究研究为什么。还有就是jquery获得容器和修改容器的方法比js简单的多，js太麻烦了，一个一个调，一个一个改。话说以后要是学了框架，肯定更简单！
```javascript
 <script>
        $(document).ready(function() {
    var $arr1 = $('.state li');
    var $imgs = $('.feng, .yan, .lei, .cao');
    var $pics = $('.wendi img, .zhongli img, .ying img, .naxida img');

    $arr1.click(function() {
        var index = $arr1.index(this);
        $arr1.css({
            'marginLeft': '0',
            'backgroundColor': 'rgba(0,0,0,0)'
        });
        $imgs.hide();
        $pics.hide();

        $(this).css({
            'marginLeft': '15px',
            'backgroundColor': 'rgba(0,0,0,0.5)',
        });
        $imgs.eq(index).show();
        $pics.eq(index).show();
    });
});
```
到后面就差不多了，漫画部分也是用flex布局写的，就没什么可讲的了。
<a name="vQ4W8"></a>
## 4.总结
这个项目还有很多不尽人意的地方，比如就是导航栏，每个页面都要用到导航栏，我却笨笨的把每个页面都加上导航栏的代码，代码冗余量好大！以后做这些公共样式一定得找个办法写一次就行，其他的需要了引入就行了，。<br />还有就是页面的盒子布局比较混乱，这个我在写css的时候就发现了，前前后后修改了很多遍，以后要多多学习布局技巧，才能提高效率。<br />给class起名的大部分也是拼音，这个我也是被自己整笑了，还是老老实实把英语给学好吧，不然以后肯定被人笑话。<br />好了这篇内容就写到这里了。主要的目的呢还是给这段时间的自己做个学习总结，看看学习成果如何。接下来的学习内容主要是网络相关的，然后再学点node与npm。


