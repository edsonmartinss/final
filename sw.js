const cacheName = "Portfolio-v1"
const files = {
  '/final/',
  '/final/index.html',
  '/final/styles.css',
  '/final/script.js',
  '/final/project.css',
  '/final/project.js',
  '/final/project1.html',
  '/final/project2.html',
  '/final/project3.html',
  '/final/project4.html',
  '/final/project5.html',
  '/final/project6.html',
  '/final/favicon.png',
  'https://code.jquery.com/jquery-3.2.1.slim.min.js',
  'https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js',
  'https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js',
  'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
}

self.addEventListener('install', function(evt){
  evt.waitUntil(
    caches.open(cacheName).then(function(cache){
      console.log('colocando arquivos na cache')
      cache.addAll(files)
    })
  )
})

self.addEventListener('activate', function(evt){
    console.log("activate sw");
})

self.addEventListener('fetch', function(evt){
    console.log("fetch sw");
      evt.responseWith(
        cache.match(evt.request).then(function(res){
          return res || fetch(evt.request)
        })
    )
})
