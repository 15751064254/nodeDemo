var http = require('http');
var Promise = require('bluebird');
var cheerio = require('cheerio');
var baseUrl = 'http://www.imooc.com/learn/';
//var videoIds = [348, 259, 197, 134, 75];
var videoIds = [348];


function filterChapters(html){
  //console.log(html);
  var $ = cheerio.load(html);
  //var chapters = $('.chapter');
  var chapters = $('#main');
  var title = chapters.find('.course-infos .hd h2').text();
  var number = $('.js-learn-num').length;
  console.log('----------------------------');
  console.log($('.js-learn-num').html());
  console.log($('.js-learn-num').attr('class'));
  console.log('----------------------------');
  console.log('number: ' + number);

  //[{
  //  chapterTitle: '',
  //  videos: [
  //    title : '',
  //    id: ''
  //  ]
  //}]

  //courseData = {
  //  title: title,
  //  number: number,
  //  videos: [
  //    chapterTitle: '',
  //    videos: [
  //      title: '',
  //      id: ''
  //    ]
  //  ]
  //};

  var courseData = {
    title: title,
    number: number,
    videos: []
  };

  chapters.each(function(item){
    var chapter = $(this).find('.chapter');
    var chapterTitle = chapter.find('strong').text().replace(/\s+/g,' ');
    var videos = chapter.find('.video').children('li');
    var chapterData = {
      chapterTitle: chapterTitle,
      videos: []
    };

    videos.each(function(item){
      var video = $(this).find('.J-media-item');
      var videoTitle = video.text().replace(/\s+/g,' ');
      var id = video.attr('href').split('video/')[1];

      chapterData.videos.push({
        title: videoTitle,
        id: id
      });

    });


    courseData.videos.push(chapterData);

  });

  return courseData;
}


function printCourseInfo(courseData){
  courseData.forEach(function(courseData){
    console.log(courseData.number + ' 人学过 ' + courseData.title + '\n');

    courseData.videos.forEach(function(courseData){
      console.log('### ' + courseData.title + '\n');

      courseData.videos.forEach(function(item){
        var chapterTitle = item.chapterTitle;

        console.log(chapterTitle + '\n');

        //item.videos.forEach(function(video){
        //  console.log('[' + video.id + ']' + video.title + '\n');
        //});


      });
    });
  });

}


function getPageAsync(url){
  return new Promise(function(resolve, reject){
    console.log('正在爬取 ' + url)

    http.get(url, function(res){
      var html = '';

      res.on('data', function(data){
        html += data;
      });

      res.on('end', function(){
        resolve(html);
      });


    }).on('error', function(e){
      reject(e);
    });

  });
}

var fetchCourseArray = [];

videoIds.forEach(function(id){
  fetchCourseArray.push(getPageAsync(baseUrl + id));
})


Promise
  .all(fetchCourseArray)
  .then(function(pages){
    var coursesData = [];

    pages.forEach(function(html){
      var courses = filterChapters(html);
      coursesData.push(courses);
    });

    coursesData.sort(function(a, b){
      return a.number < b.number;
    });

    printCourseInfo(coursesData);


  });

//http.get(url, function(res){
//  var html = '';
//
//  res.on('data', function(data){
//    html += data;
//  });
//
//  res.on('end', function(){
//    //console.log(html);
//    var courseData = filterChapters(html);
//
//    printCourseInfo(courseData);
//
//  });
//}).on('error', function(){
//  console.log('获取课程数据出错！');
//});
